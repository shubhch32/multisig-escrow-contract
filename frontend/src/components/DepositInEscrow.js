import React from "react";

export function DepositInEscrow({ deposit }) {
  return (
    <div>
      <h4>Deposit In Escrow Contract</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);

          var token = formData.get("token");
          var recipient = formData.get("recipient");
          var amount = formData.get("amount");
          var endTime = formData.get("endTime");


          if (token && recipient && amount && endTime) {
            deposit(token, recipient, amount, endTime);
          }
        }}
      >
        <div className="form-group">
          <label>Token Address</label>
          <input className="form-control" type="text" name="token" required />
        </div>
        <div className="form-group">
          <label>Recepient Address</label>
          <input className="form-control" type="text" name="recipient" required />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
          <label>End Time</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="endTime"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Deposit" />
        </div>
      </form>
    </div>
  );
}
