import React, { useState } from "react";
import Button from "./Button";

const Main = () => {
  const [mainText, setMainText] = useState("");

  return (
    <div>
      <Button color="red" text="Button 1" setText={setMainText} />
      <Button color="green" text="Button 2" setText={setMainText} />
      <Button color="blue" text="Button 3" setText={setMainText} />
      <h1>{mainText}</h1>
    </div>
  );
};

export default Main;
