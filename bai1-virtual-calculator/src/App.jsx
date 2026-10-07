import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import { OPERATORS, calculate } from "./calculate";
import "./App.css";

const buttons = [
  { label: "C", color: "red", wide: true },
  { label: "⌫", color: "dark" },
  { label: "÷", color: "orange" },
  { label: "7" }, { label: "8" }, { label: "9" },
  { label: "×", color: "orange" },
  { label: "4" }, { label: "5" }, { label: "6" },
  { label: "-", color: "orange" },
  { label: "1" }, { label: "2" }, { label: "3" },
  { label: "+", color: "orange" },
  { label: "0", wide: true },
  { label: "." },
  { label: "=", color: "green" },
];

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  function handleClick(label) {
    const lastChar = expression.slice(-1);

    if (label === "=") {
      if (expression === "" || OPERATORS.includes(lastChar)) return;
      const value = calculate(expression);
      if (value === null) {
        setResult("Không thể chia cho 0");
      } else {
        setResult("= " + value);
        setExpression(String(value));
      }
      return;
    }

    setResult("");

    if (label === "C") {
      setExpression("");
    } else if (label === "⌫") {
      setExpression(expression.slice(0, -1));
    } else if (OPERATORS.includes(label)) {
      // Đầu biểu thức chỉ được nhập dấu -
      if (expression === "" && label !== "-") return;
      // Bấm 2 phép toán liền nhau thì thay phép cũ
      if (OPERATORS.includes(lastChar)) {
        setExpression(expression.slice(0, -1) + label);
      } else {
        setExpression(expression + label);
      }
    } else if (label === ".") {
      const numbers = expression.split(/[+\-×÷]/);
      const currentNumber = numbers[numbers.length - 1];
      if (currentNumber.includes(".")) return;
      setExpression(expression + (currentNumber === "" ? "0." : "."));
    } else {
      setExpression(expression + label);
    }
  }

  return (
    <div className="calculator">
      <h1>Virtual Calculator</h1>
      <Display expression={expression} result={result} />
      <div className="keypad">
        {buttons.map((btn) => (
          <Button
            key={btn.label}
            label={btn.label}
            color={btn.color}
            wide={btn.wide}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
