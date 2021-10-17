import React, { useRef, useState } from "react";
import useForm from "../hooks/useForm";
import useKeyPress from "../hooks/useKeyPress";
import Confetti from "react-confetti";
import { Update } from "../pages/ProblemPages/Update";

type Props = {
  OnCorrectAnswer: () => void;
  curr: Update;
};

const EquationBoxUpdate: React.FC<Props> = ({OnCorrectAnswer, curr}) => {
  const [response, handleChange] = useForm({ text: "" });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let buttonRect: any = buttonRef.current?.getBoundingClientRect();
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
    if (parseInt(response.text) === curr.answer) {
      if (inputRef.current !== null) {
        response.text = "";
      }
      OnCorrectAnswer();
      setRunConfetti(true);
      setIncorrectInput(false);
    } else {
      setIncorrectInput(parseInt(response.text) !== curr.answer);
    }
  };

  useKeyPress("Enter", () => submitInput());

  return (
    <div className="equation-box">
      {curr.text}
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
export default EquationBoxUpdate;
