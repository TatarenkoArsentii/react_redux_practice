import React, { useState } from "react";

function Tea(props) {
  //   const [temperature, setTemperature] = useState(90);
  const [type, setType] = useState("Black");
  const { temperature, setTemperature } = props;

  return (
    <div>
      <p>Чай</p>
      <p>Температура {temperature}</p>
      <p>Вид чая {type}</p>
    </div>
  );
}

export default Tea;
