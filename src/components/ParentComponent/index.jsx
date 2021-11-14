import React, { useState } from "react";
import IceCream from "../IceCream";
import Tea from "../Tea";

function Parent() {
  const [temperature, setTemperature] = useState(0);

  return (
    <div>
      <Tea temperature={temperature + 90} setTemperature={setTemperature} />
      <IceCream temperature={temperature} setTemperature={setTemperature} />
    </div>
  );
}

export default Parent;
