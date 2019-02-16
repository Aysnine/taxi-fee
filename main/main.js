const price = 0.8;

module.exports = function main(km_num, stay_minute = 0) {
    let count = stay_minute * 0.25;                      // 等待时间计价
    if (km_num <= 2) return Math.round(count + 6);       // 2 公里起步价内
    count += 6 + (km_num - 2) * price;                   // 起步价之外的行程计价
    if (km_num > 8) count += (km_num - 8) * (price / 2); // 8 公里外的额外计价
    return Math.round(count);
};