const depositProfit = require("../src/advent_2_deposit_profit");
test("returns the count of years for balance to pass the threshold", () => {
        // arrange
        const deposit = 100;
        const rate = 20;
        const threshold = 170;
        
        // act
        const result = depositProfit(deposit, rate, threshold);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });