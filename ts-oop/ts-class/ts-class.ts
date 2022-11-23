class FinancialDepartment {
  financeStrategy = 'Finance Strategy';
  evaluateEconomicTrends() {
    console.log('Finance department valuates economic trends');
  }
}

const fd = new FinancialDepartment();
console.log(fd.financeStrategy);
fd.evaluateEconomicTrends();
