function coinCounter (money) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  money = money * 100;
  coinPurse.quarters = parseInt(money / 25);
  money = money - (coinPurse.quarters * 25);
  coinPurse.dimes = parseInt(money / 10);
  money = money - (coinPurse.dimes * 10);
  coinPurse.nickels = parseInt(money / 5);
  money = money - (coinPurse.nickels * 5);
  coinPurse.pennies = parseInt(money / 1);

  return coinPurse;
}

var coins = coinCounter(3.19);
console.log(coins);