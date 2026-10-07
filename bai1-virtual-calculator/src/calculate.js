const OPERATORS = ["+", "-", "×", "÷"];

// Tính biểu thức, vd "12+3×4" -> 24
// Trả về null nếu chia cho 0
function calculate(expression) {
  // Tách thành mảng số và phép toán: [12, "+", 3, "×", 4]
  const parts = [];
  let number = "";
  for (const ch of expression) {
    if (OPERATORS.includes(ch)) {
      parts.push(Number(number));
      parts.push(ch);
      number = "";
    } else {
      number += ch;
    }
  }
  parts.push(Number(number));

  // Tính nhân, chia trước
  const temp = [parts[0]];
  for (let i = 1; i < parts.length; i += 2) {
    const op = parts[i];
    const num = parts[i + 1];
    if (op === "×") {
      temp[temp.length - 1] *= num;
    } else if (op === "÷") {
      if (num === 0) return null;
      temp[temp.length - 1] /= num;
    } else {
      temp.push(op, num);
    }
  }

  // Sau đó tính cộng, trừ
  let result = temp[0];
  for (let i = 1; i < temp.length; i += 2) {
    if (temp[i] === "+") result += temp[i + 1];
    else result -= temp[i + 1];
  }

  // Làm tròn để tránh lỗi kiểu 0.1 + 0.2 = 0.30000000000000004
  return parseFloat(result.toFixed(10));
}

export { OPERATORS, calculate };
