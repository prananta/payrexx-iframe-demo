import React, { useState } from "react";
import "./App.css";

var postMessage = function(e) {
  if (typeof e.data === "string") {
    try {
      var data = JSON.parse(e.data);
    } catch (e) {
      console.log("Error parsing");
      console.log(e.data);
    }
    if (data && data.payrexx) {
      console.log("Payrexx data", data.payrexx);
    }
  }
};

window.addEventListener("message", postMessage, false);

function App() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="App">
      <a
        href="https://swift.payrexx.com/pay?tid=b3aedd54"
        target="_blank"
        rel="noopener noreferrer"
      >
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
            title="Payrexx Payment"
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
