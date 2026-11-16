function greedyCoinChange(amount) {
    const coins = [25, 10, 5, 1]; // 硬币面值从大到小排列
    let remainingAmount = amount;
    const result = [];

    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        const count = Math.floor(remainingAmount / coin); // 计算当前面值硬币的数量
        remainingAmount -= count * coin; // 更新剩余金额
        result.push({ coin: coin, count: count });
    }

    return result;
}

// 测试
const amount = 37;
const result = greedyCoinChange(amount);
console.log(result);
