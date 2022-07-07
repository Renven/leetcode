/**
 * 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 进阶：不要 使用任何内置的库函数，如  sqrt 。
 *
 * @param {number} num
 * @return {boolean}
 */

//通过内置库函数
// var isPerfectSquare = function (num) {
//     const x = Math.floor(Math.sqrt(num));
//     return x * x === num;
// };

//暴力解法
// var isPerfectSquare = function (num) {
//     let x = 1,
//         square = 1;
//     while (square <= num) {
//         if (square === num) {
//             return true;
//         };
//         x++;
//         square = x * x;
//     };
//     return false;
// }

//二分查找
c