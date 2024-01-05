const TotalNumber = document.getElementById("TotalTests");
const Corrects = document.getElementById("CorrectTests");
const Incorrects = document.getElementById("IncorrectTests");
const Button = document.getElementById("Calculate");
const ResultBox = document.getElementById("resultbox");
const Result = document.getElementById("result");

Button.addEventListener("click", Calculating);

function Calculating() {
  let Total = Number(TotalNumber.value);
  let Correct = Number(Corrects.value);
  let Incorrect = Number(Incorrects.value);
  console.log(Total, Correct, Incorrect);
  if ((Total, Correct, Incorrect) == " ") {
    window.alert("Please Fill in All input blanks!");
  } else {
    if (Total == Correct + Incorrect) {
      let result = (Correct / Total) * 100;
      console.log(result);
      Result.innerHTML = result + "%";
      ResultBox.style.opacity = "1";
    } else {
      window.alert(
        "The total test is not equal to the sum of the correct and incorrect tests!"
      );
    }
  }
}
