import React from "react";

export function ExecuteMultiTransaction({ executeTransaction, tokenAddress }) {
  return (
    <div>
      <h4>Execute MultiSig Transaction</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
//          const tokenAddress = formData.get("tokenAddress");
          const transactionId = formData.get("transactionId");

          if (transactionId) {
            executeTransaction(transactionId);
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
        {/*<div className="form-group">
          <label>Token address</label>
          <input className="form-control" type="text" name="tokenAddress" required />
        </div>*/}
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Execute" />
        </div>
      </form>
    </div>
  );
}
