import sound from "./assests/music.wav";
import { useState } from "react";
const App = () => {
  // const [counter, setcounter] = useState(0);
  // const [level, setlevel] = useState("low");
  // const [color, setcolor] = useState("green");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const onsubmit1 = (app) => {
    App.preventDefault();
    setNumber1(number1);
  };
  const inputEvent1 = (app) => {
    console.log(app.target.value);
    setNumber1(app.target.value);
  };
  const onsubmit2 = (app) => {
    App.preventDefault();
    setNumber2(number2);
  };
  const inputEvent2 = (app) => {
    console.log(app.target.value);
    setNumber2(app.target.value);
  };

  const play = () => {
    new Audio(sound).play();
  };
  // const handleIncrement = () => {
  //   if (counter + 1 > 5 && counter + 1 < 10) {
  //     setlevel("Medium");
  //     setcolor("blue");
  //   } else if (counter + 1 >= 10) {
  //     setlevel("High");
  //     setcolor("Pink");
  //   } else if (counter + 1 <= 5) {
  //     setlevel("Low");
  //     setcolor("aqua");
  //   }
  //   setcounter(counter + 1);
  // };
  // const handleDecrement = () => {
  //   if (counter - 1 > 5 && counter - 1 < 10) {
  //     setlevel("Medium");
  //     setcolor("blue");
  //   } else if (counter - 1 >= 10) {
  //     setlevel("High");
  //     setcolor("Pink");
  //   } else if (counter - 1 < 5) {
  //     setlevel("Low");
  //     setcolor("aqua");
  //   }
  //   setcounter(counter - 1);
  // };

  return (
    <>
      <form
      // onSubmit={() => {
      //   onsubmit();
      //   play();
      // }}
      >
        <div>
          <h1 style={{ color: "white" }}>
            Enter the numbers you want to multiply
          </h1>
          <h1
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "50%",
              padding: "2%",
            }}
          >
            {number1 * number2}
          </h1>
          <input
            style={{ marginBottom: "2%" }}
            type="number"
            placeholder="Enter the multiplicant"
            onChange={inputEvent1}
            value={number1}
          ></input>
          <input
            type="number"
            placeholder="Enter the multiplier"
            onChange={inputEvent2}
            value={number2}
          ></input>
        </div>
      </form>
      {/* <h1>The Current count is {counter}</h1>
      <p
        style={{
          color: "white",
          backgroundColor: color,
          borderRadius: "20%",
          padding: "10%",
        }}
      >
        Level={level}
      </p> */}

      {/* <button
        id="button"
        onClick={() => {
          handleIncrement();
          play();
        }}
      >
        Increment
      </button>
      <button
        id="button"
        onClick={() => {
          handleDecrement();
          play();
        }}
      >
        Decrement
      </button> */}
    </>
  );
};
export default App;
