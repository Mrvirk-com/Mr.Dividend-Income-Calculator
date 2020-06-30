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
  let tax_percent = form.elements.tax_percent.value;

  if (cost_per_share == null || cost_per_share == "") {
    cost_per_share = 0;
  }
  if (dividend_per_share == null || dividend_per_share == "") {
    dividend_per_share = 0;
  }

  let dividend_yield = (dividend_per_share / cost_per_share) * 100;
  let taxed_yield = ((dividend_yield / 100) * (tax_percent / 100)) * 100;

  let yield_after_tax = dividend_yield - taxed_yield;

  form.elements.dividend_yield.value = yield_after_tax.toFixed(2) + " %";

  let total_cost = no_of_shares * cost_per_share;
  form.elements.total_cost.value = total_cost.toFixed(2);

  let yearly_dividend = dividend_per_share * no_of_shares;
  let tax_amount = (tax_percent * yearly_dividend) / 100;

  let yearly_dividend_after_tax = yearly_dividend - tax_amount;

  form.elements.yearly_dividend.value = yearly_dividend_after_tax.toFixed(3);

  let quarterly_dividend = yearly_dividend_after_tax / 4;
  form.elements.quarterly_dividend.value = quarterly_dividend.toFixed(3);

  let monthly_dividend = yearly_dividend_after_tax / 12;
  form.elements.monthly_dividend.value = monthly_dividend.toFixed(3);

  if (tax_percent > 0) {
    form.elements.dividend_yield.className = "result-negative";
    form.elements.yearly_dividend.className = "result-negative";
    form.elements.quarterly_dividend.className = "result-negative";
    form.elements.monthly_dividend.className = "result-negative";
  } else {
    form.elements.dividend_yield.className = "result";
    form.elements.yearly_dividend.className = "result";
    form.elements.quarterly_dividend.className = "result";
    form.elements.monthly_dividend.className = "result";
  }

}