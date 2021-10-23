import React, { useState } from "react";

export const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState)=>{return !prevState});
  }

  return (
    <div>
      <button onClick={()=>toggle()}>
        {open ? "OPEN" : "CLOSE"}
      </button>
    </div>
  )
};