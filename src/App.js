import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [showPayment, setShowPayment] = useState(false);
  return (
    <div className="App">
      <a href="https://swift.payrexx.com/pay?tid=b3aedd54" target="_blank">
        Pay in New Window
      </a>
      <br />
      <br />
      <button className="pay-button" onClick={() => setShowPayment(true)}>
        Pay
      </button>
      {showPayment && (
        <div className="payment-modal" onClick={() => setShowPayment(false)}>
          <iframe
            className="payment-iframe"
            src="https://swift.payrexx.com/pay?tid=b3aedd54&appview=1"
            width="50%"
            height="800"
            id="payrexx-embed"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
