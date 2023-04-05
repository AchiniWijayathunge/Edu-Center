import React from "react";
import "./styles.css";

const amount = 2;

export default function App() {
  const [clickList, setClickList] = React.useState(
    [...Array(amount).keys()].map(x => ({ id: `Button ${x + 1}`, value: 0 }))
  );
  const [activeButton, setActiveButton] = React.useState("");
  const buttonClick = idx => e => {
    const result = [...clickList];
    result[idx].value += 1;
    setClickList(result);
    setActiveButton(e.target.name);
  };
  return (
    <>
      <h1>
        {`${activeButton} clicked ${clickList.find(x => x.id === activeButton)?.value ?? 0} times`}
      </h1>
      {clickList.map((x, idx) => (
        <button name={x.id} type="button" onClick={buttonClick(idx)}>
          {x.id}
        </button>
      ))}
    </>
  );
}