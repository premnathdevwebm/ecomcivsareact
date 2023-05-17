import React, { useState, useContext } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Grid,
  Paper,
} from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import "./Checkout.scss";
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "../../utils/context";
import { makePaymentRequest } from "../../utils/api";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

const CheckoutForm = () => {
  const { cartItems, setCartItems, wishItems, setWishItems, cartSubTotal } =
    useContext(Context);
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [useCashOnDelivery, setUseCashOnDelivery] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    if (useCashOnDelivery) {
      // Handle cash on delivery
      await makePaymentRequest.post("/api/orders", {
        cartItems,
        cartSubTotal,
        paymentConfirmation: "COD",
        name,
        email,
        phone,
        address1,
        address2,
        city,
        state,
        country,
        zip,
        length: 20,
        breadth: 5,
        height: 10,
        weight: 1,
      });
      setIsProcessing(false);
      setCartItems(() => []);
    } else {
      const cardElement = elements.getElement(CardElement);

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name,
          email,
          phone,
        },
      });

      if (error) {
        setErrorMessage(error.message);
        setIsProcessing(false);
      } else {
        // Send the payment method to your server to complete the transaction
        setIsProcessing(false);
        const paymnentIntent = await makePaymentRequest.post("/create-charge", {
          payment_method_id: paymentMethod.id,
          amount: cartSubTotal * 100, // in cents
          currency: "inr",
          description: `order on ${cartItems[0].data.name}`,
        });
        const paymentConfirmation = await stripe.confirmCardPayment(
          paymnentIntent.data.response,
          {
            payment_method: {
              card: cardElement,
            },
          }
        );
        cardElement.clear();
        if (paymentConfirmation.paymentIntent.status === "succeeded") {
          await makePaymentRequest.post("/api/orders", {
            cartItems,
            cartSubTotal,
            paymentConfirmation,
            name,
            email,
            phone,
            address1,
            address2,
            city,
            state,
            country,
            zip,
            length: 20,
            breadth: 5,
            height: 10,
            weight: 1,
          });
        }
        setCartItems(() => []);
      }
    }
  };

  return (
    <div className="container">
      <Paper className={`${classes.paper} column`}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Fullname"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Phone"
                fullWidth
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Address 1"
                  fullWidth
                  value={address1}
                  onChange={(event) => setAddress1(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Address 2"
                  fullWidth
                  value={address2}
                  onChange={(event) => setAddress2(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="City/Town"
                  fullWidth
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="State"
                  fullWidth
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Country"
                  fullWidth
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Zip"
                  fullWidth
                  value={zip}
                  onChange={(event) => setZip(event.target.value)}
                />
              </Grid>
            </Grid>
            {!useCashOnDelivery && (
              <Grid item xs={12}>
                <CardElement />
              </Grid>
            )}
            {errorMessage && (
              <Grid item xs={12}>
                <p style={{ color: "red" }}>{errorMessage}</p>
              </Grid>
            )}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={useCashOnDelivery}
                    onChange={(event) =>
                      setUseCashOnDelivery(event.target.checked)
                    }
                  />
                }
                label="Cash on Delivery"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isProcessing}
                className={classes.button}
              >
                {isProcessing
                  ? useCashOnDelivery
                    ? "Processing..."
                    : "Submitting Payment..."
                  : useCashOnDelivery
                  ? "Place Order"
                  : "Proceed"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <div className="column">
        {!cartItems.length && <p>No Order Placed yet</p>}
        {!!cartItems.length && (
          <List sx={style} component="nav">
            <ListItem>
              <ListItemText primary="YOUR ORDER" />
              <ListItemText primary={`${cartItems[0].data.name}`} />
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemText primary="Sub Total" />
              <ListItemText primary={`${cartSubTotal}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Shipping" />
              <ListItemText primary="Free Shipping" />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText primary="Total" />
              <ListItemText primary={`${cartSubTotal}`} />
            </ListItem>
          </List>
        )}
      </div>
    </div>
  );
};

const ElementalForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default ElementalForm;
