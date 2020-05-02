dividendCalculator();

dividend_form.oninput = function(event) {
  event.preventDefault();
  dividendCalculator();
};

function dividendCalculator() {
  const form = document.forms.dividend_form;
  let dividend_per_share = form.elements.dividend_per_share.value;
  let cost_per_share = form.elements.cost_per_share.value;
  let no_of_shares = form.elements.no_of_shares.value;

  if (cost_per_share == null || cost_per_share == "") {
    cost_per_share = 100;
  }
  if (dividend_per_share == null || dividend_per_share == "") {
    dividend_per_share = 25;
  }
  let yield = (dividend_per_share / cost_per_share) * 100;
  form.elements.yield.value = yield.toFixed(3) + "%";
  if (yield < 0) {
    form.elements.yield.className = "result-negative"
  } else {
    form.elements.yield.className = "result"
  }

  let total_cost = no_of_shares * cost_per_share;
  form.elements.total_cost.value = total_cost.toFixed(2);

  let yearly_dividend = dividend_per_share * no_of_shares;
  form.elements.yearly_dividend.value = yearly_dividend.toFixed(5);

  let quarterly_dividend = (dividend_per_share * no_of_shares) / 4;
  form.elements.quarterly_dividend.value = quarterly_dividend.toFixed(5);

  let monthly_dividend = (dividend_per_share * no_of_shares) / 12;
  form.elements.monthly_dividend.value = monthly_dividend.toFixed(5);

}