import React from "react";

export function Withdraw({ withdraw }) {
  return (
    <div>
      <h4>Withdraw</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          withdraw();
        }}
      >
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Withdraw" />
        </div>
      </form>
    </div>
  );
}
