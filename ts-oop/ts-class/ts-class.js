var FinancialDepartment = /** @class */ (function () {
    function FinancialDepartment() {
        this.financeStrategy = 'Finance Strategy';
    }
    FinancialDepartment.prototype.evaluateEconomicTrends = function () {
        console.log('Finance department valuates economic trends');
    };
    return FinancialDepartment;
}());
var fd = new FinancialDepartment();
console.log(fd.financeStrategy);
fd.evaluateEconomicTrends();
