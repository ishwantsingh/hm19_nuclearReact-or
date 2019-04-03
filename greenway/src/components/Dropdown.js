import React from "react";

function Dropdown() {
  return (
    <datalist id="types">
      <option value="Announcement" />
      <option value="Dev Team" />
      <option value="Design Team" />
      <option value="Marketing" />
      <option value="HR" />
      <option value="Product Manager" />
    </datalist>
  );
}

export default Dropdown;
