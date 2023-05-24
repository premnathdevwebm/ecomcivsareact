import "./TrackingModal.scss";
const TrackingModal = ({ isOpen, onClose, trackingStatus }) => {
  if (!isOpen) {
    return null; // If the modal is closed, don't render anything
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Tracking Status</h2>
        {trackingStatus?.tracking_data &&
          trackingStatus?.tracking_data?.shipment_track.map((ele) => (
            <div key={ele.id}>
              <p>Origin: {ele.origin}</p>
              <p>Destination: {ele.destination}</p>
              <p>Status: {ele.current_status}</p>
            </div>
          ))}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TrackingModal;
