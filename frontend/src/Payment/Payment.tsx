import CheckoutSteps from "./CheckoutSteps";

function Payment() {
  const submitHandler = () => {
    alert("Payment processing...");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>
            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="PayPal"
                />
                <label htmlFor="paymentMethod">PayPal</label>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="bitcoin"
                />
                <label htmlFor="paymentMethod">Bitcoin</label>
              </div>
            </li>
            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Payment;
