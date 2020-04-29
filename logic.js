dividendCalculator();

inputForm2.oninput = function(event) {
  event.preventDefault();
  dividendCalculator();
};

function dividendCalculator() {
  const form = document.forms.inputForm2;
  let x = form.elements.x.value;
  let y = form.elements.y.value;
  console.log(y);
  if (y == null || y == "") {
    y = 100;
  }
  if (x == null || x == "") {
    x = 25;
  }
  let p = (x / y) * 100;
  form.elements.p.value = p.toFixed(2) + "%";
  if (p < 0) {
    form.elements.p.className = "result-negative"
  } else {
    form.elements.p.className = "result"
  }
}