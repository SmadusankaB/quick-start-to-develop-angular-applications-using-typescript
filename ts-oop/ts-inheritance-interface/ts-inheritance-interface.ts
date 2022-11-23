interface IDepartment {
  name: string;
  manageEmployees();
}

class Department {
  name: string;
  manageEmployees() {
    console.log('Department manage employees');
  }
}

class FinancialDepartment extends Department implements IDepartment {
  financeStrategy = 'Finance Strategy';
  evaluateEconomicTrends() {
    console.log('Finance department valuates economic trends');
  }
}

const fd = new FinancialDepartment();
console.log(fd.financeStrategy);
fd.evaluateEconomicTrends();
fd.manageEmployees();