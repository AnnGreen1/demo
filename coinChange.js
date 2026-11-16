function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity); // 初始化一个数组，用来存储每个金额的最少硬币数量
    dp[0] = 0; // 金额为 0 时，所需硬币数量为 0

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// 测试
const coins = [1, 5, 10, 25];
const amount = 37;
const minCoins = coinChange(coins, amount);
console.log(minCoins);
