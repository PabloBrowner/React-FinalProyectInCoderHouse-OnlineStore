import React, { useState } from "react";
import Input from "./Input";

export default function ImprovableComp() {
  const [userData, setUserData] = useState({});
  const handleChange = ({ target }) => {
    setUserData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  function onSubmit(e) {
    e.preventDefault;
    console.log(
      `Tu nombre es ${userData.name} ${userData.surname} y tenes ${userData.age}`
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <Input label={"Nombre"} name="name" handleChange={handleChange} />
      <Input label={"Apellido"} name="surname" handleChange={handleChange} />
      <Input label={"Edad"} name="age" handleChange={handleChange} />
      <button
        disabled={!(userData.name && userData.surname && userData.age)}
        type="submit"
      >
        Crear orden
      </button>
    </form>
  );
}