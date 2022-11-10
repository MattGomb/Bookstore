import React from "react";

function Form() {
  return (
    <form className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default Form;