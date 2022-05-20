import React from "react";

export function Approve({ approve }) {
  return (
    <div>
      <h4>Approve</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const approveAmount = formData.get("approveAmount");

          if (approveAmount) {
            approve(approveAmount);
          }
        }}
      >
        <div className="form-group">
          <label>Approve Amount</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="approveAmount"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Approve" />
        </div>
      </form>
    </div>
  );
}
