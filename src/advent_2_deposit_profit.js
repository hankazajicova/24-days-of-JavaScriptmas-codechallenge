function depositProfit(deposit, rate, threshold) {
    var years = 0;
    while (deposit < threshold) {
        var profit = (rate / 100) * deposit;
        console.log(`new profit is: ${profit}`);
        deposit += profit;
        years += 1;
        console.log(`new deposit is: ${deposit}`);
    }
    console.log(`In ${years} years you will get to the threshold ${threshold}`)
    return years

};

module.exports = depositProfit;
console.log(depositProfit(100, 20, 170))