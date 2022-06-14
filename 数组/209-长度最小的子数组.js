/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 
 *    
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//TODO 注释
var minSubArrayLen = function (target, nums) {
    if (nums.length === 0) return 0;
    const slideWindow = [];
    let acc = 0;
    let min = null;

    for (let i = 0; i < nums.length + 1; i++) {
        const num = nums[i];

        while (acc >= target) {
            if (min === null || slideWindow.length < min) {
                min = slideWindow.length;
            }
            acc = acc - slideWindow.shift();
        }

        slideWindow.push(num);

        acc = slideWindow.reduce((a, b) => a + b, 0);
    }

    return min || 0;
};