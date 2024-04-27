const button = document.querySelectorAll("button");
const display = document.querySelector("input");

const allBtn = Array.from(button);

console.log(allBtn);
let string = "";

const changeVal = (o, ans) => {
  let speaker = new SpeechSynthesisUtterance();
  console.log(o);
  
  if (o == "AC") speaker.text = "All Clear";
  else if (o == "DEL") speaker.text = "Delete";
  else if (o == "=") speaker.text = `Answer is ${ans}`;
  else if (o == "+") speaker.text = "plus";
  else if (o == "-") speaker.text = "mainus";
  else if (o == "*") speaker.text = "Multiplay by";
  else if (o == "/") speaker.text = "Divide by";
  else if (o == "%") speaker.text = "modulous";
  else if (o == ".") speaker.text = "dot";
  else speaker.text = o;
  window.speechSynthesis.speak(speaker);
};

allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      display.value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      display.value = string;
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }

    changeVal(e.target.innerHTML, string);
  });
});
