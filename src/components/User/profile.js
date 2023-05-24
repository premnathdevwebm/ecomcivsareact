import { useContext, useState, useEffect } from "react";
import { Context } from "../../utils/context";
import "./Profile.scss";
import { makeRequestAuth } from "../../utils/api";
import TrackingModal from "./TrackingModal";

const ProfilePage = () => {
  const { user } = useContext(Context);
  const [orders, setOrders] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [track, setTrack] = useState([]);

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
    const response = await makeRequestAuth(`myorder/${data.AWB}`);
    setTrack(() => response.data);
    openModal();
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
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr
                key={order.id}
                onClick={() => {
                  transtactionStatus(order);
                }}
              >
                <td>{i + 1}</td>
                <td>{order.orderId}</td>
                <td>{order.couriername}</td>
                <td>{order.modeOfPay}</td>
                <td>₹{order.orderSelling}</td>
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
