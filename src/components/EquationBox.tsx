import React, { useRef, useState } from "react";
import useForm from "../hooks/useForm";
import useKeyPress from "../hooks/useKeyPress";
import Confetti from "react-confetti";

type Update = {
  text: string;
  answer: number;
};

type Props = {
  updateFunc: () => Update;
  curr: Update;
};

const EquationBox: React.FC<Props> = ({ updateFunc, curr }) => {
  const [response, handleChange] = useForm({ text: "" });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let buttonRect: any = buttonRef.current?.getBoundingClientRect();
  const [currText, setCurrText] = useState<string>(curr.text);
  const [currAnswer, setCurrAnswer] = useState<number>(curr.answer);
  const [runConfetti, setRunConfetti] = useState<boolean>(false);
  const [incorrectInput, setIncorrectInput] = useState<boolean>(false);

  if (buttonRect == null) {
    buttonRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  }

  const submitInput = () => {
    if (parseInt(response.text) === currAnswer) {
      if (inputRef.current !== null) {
        response.text = "";
      }
      createNewEquation();
      setRunConfetti(true);
      setIncorrectInput(false);
    } else {
      setIncorrectInput(parseInt(response.text) !== currAnswer);
    }
  };

  useKeyPress("Enter", () => submitInput());

  const createNewEquation = () => {
    const update: Update = updateFunc();
    setCurrText(update.text);
    setCurrAnswer(update.answer);
  };

  return (
    <div className="equation-box">
      {currText}
      <input
        type="text"
        className={
          incorrectInput ? "equation-box-error" : "equation-box-normal"
        }
        onChange={handleChange}
        value={response.text}
        name="text"
        ref={inputRef}
      />
      <button
        onClick={submitInput}
        ref={buttonRef}
        className="equation-box-submit"
      >
        Submit
      </button>
      <Confetti
        confettiSource={{
          x: buttonRect.x,
          y: buttonRect.y,
          //-3 accounts for rounded edges
          w: buttonRect.width - 3,
          h: buttonRect.height - 3,
        }}
        recycle={false}
        numberOfPieces={runConfetti ? 200 : 0}
        onConfettiComplete={(confetti) => {
          setRunConfetti(false);
          confetti?.reset();
        }}
      />
    </div>
  );
};
export default EquationBox;
