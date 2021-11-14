import React, { useState } from "react";

function IceCream(props) {
  //   const [temperature, setTemperature] = useState(0);
  const [type, setType] = useState("Fruit Ice");
  const { temperature,setTemperature } = props;
  return (
    <div>
      <p>Мороженое</p>
      <p>Температура {temperature}</p>
      <p>Вид {type}</p>
    </div>
  );
}

export default IceCream;
