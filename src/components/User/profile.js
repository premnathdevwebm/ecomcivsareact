import { useContext, useState, useEffect } from "react";
import { Context } from "../../utils/context";
import "./Profile.scss";
import { makeRequestAuth } from "../../utils/api";
import TrackingModal from "./TrackingModal";
import PdfFile from "./Pdf/Pdf";

const ProfilePage = () => {
  const { user } = useContext(Context);
  const [orders, setOrders] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [track, setTrack] = useState([]);

  console.log(">>>",user);

  const openModal = () => {
    setModalOpen(true);
    setTrack((data) => data);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTrack((data) => data);
  };

  const orderFunc = async () => {
    const response = await makeRequestAuth("myorders");
    return response;
  };

  useEffect(() => {
    orderFunc()
      .then((data) => {
        setOrders(() => data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  async function transtactionStatus(data) {
    if (data.shipmentId) {
      const response = await makeRequestAuth(`myorder/${data.shipmentId}`);
      if (response.data) {
        setTrack(() => response.data);
        openModal();
      }
    }
  }

  return (
    <div className="profile-page">
      <div className="profile-section">
        <h1>My Profile</h1>
        <div className="profile-info">
          <div className="user-details">
            <h2>{user.user.username}</h2>
            <p>Email: {user.user.email}</p>
            <p>Phone: {user.user.phone}</p>
            <p>Location: {`${user.user.address1} ${user.user.address2}`}</p>
            <p>Reference Code: {user.user.referenceCode}</p>
            <p>Internal Wallet: {user.user.wallet}</p>
          </div>
        </div>
      </div>

      <div className="order-section">
        <h1>Orders</h1>
        <table className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>OrderId</th>
              <th>Courier Patner</th>
              <th>Payment Type</th>
              <th>Price</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={order.id}>
                <td>{i + 1}</td>
                <td
                style={{textDecoration: "underline"}}
                  onClick={() => {
                    transtactionStatus(order);
                  }}
                >
                  {order.orderId}
                </td>
                <td>
                  {order.couriername === ""
                    ? "Not Yet Fixed"
                    : order.couriername}
                </td>
                <td>{order.modeOfPay}</td>
                <td>₹{order.orderSelling}</td>
                <td>
                  <PdfFile pdfUrl={order.invoiceURL} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TrackingModal
        isOpen={modalOpen}
        onClose={closeModal}
        trackingStatus={track}
      />
    </div>
  );
};

export default ProfilePage;
