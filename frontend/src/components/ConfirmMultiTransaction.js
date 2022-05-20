import React from "react";

export function ConfirmMultiTransaction({ confirmTransaction }) {
  return (
    <div>
      <h4>Confirm MultiSig Transaction</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const transactionId = formData.get("transactionId");

          if (transactionId) {
            confirmTransaction(transactionId);
          }
        }}
      >
        <div className="form-group">
          <label>Transaction Id</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="transactionId"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Confirm" />
        </div>
      </form>
    </div>
  );
}
