function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = num1 + num2;
  }

  function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = num1 - num2;
  }

  function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = num1 * num2;
  }

  function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
      document.getElementById("result").innerHTML = "Деление на ноль невозможно!";
    } else {
      document.getElementById("result").innerHTML = num1 / num2;
    }
  }

  function power() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = Math.pow(num1, num2);
  }

  function root() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num1 < 0 && num2 % 2 === 0) {
      document.getElementById("result").innerHTML = "Корень четной степени из отрицательного числа не определен!";
    } else {
      document.getElementById("result").innerHTML = Math.pow(num1, 1 / num2);
    }
  }
