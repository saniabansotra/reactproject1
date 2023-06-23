import sound from "./assests/music.wav";
import { useState } from "react";
const App = () => {
  // const [counter, setcounter] = useState(0);
  // const [level, setlevel] = useState("low");
  // const [color, setcolor] = useState("green");
  const [number, setNumber] = useState("");

  const onsubmit = (app) => {
    App.preventDefault();
    setNumber(number);
  };
  const inputEvent = (app) => {
    console.log(app.target.value);
    setNumber(app.target.value);
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
            Enter the number you want to multiply with 2
          </h1>
          <h1
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "50%",
              padding: "2%",
            }}
          >
            {number * 2}
          </h1>
          <input
            type="number"
            placeholder="Enter the Number"
            onChange={inputEvent}
            value={number}
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
