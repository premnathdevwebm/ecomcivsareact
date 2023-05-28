import React, { useEffect } from "react";

const CCAvenuePayment = () => {
  useEffect(() => {
    window.location.href = "https://test.ccavenue.com";
  }, []);

  return (
    <div>
      <p>Redirecting to CCAvenue...</p>
    </div>
  );
};

export default CCAvenuePayment;