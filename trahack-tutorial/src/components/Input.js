import React, { useState } from "react";

export const Input = () => {
  const [name, setName] = useState("");

  const handleName = (event) => {
    console.log(name);
    setName(event.target.value);
  };

  return (
    <input onChange={(event) => handleName(event)} type="text" value={name} />
  );
};
