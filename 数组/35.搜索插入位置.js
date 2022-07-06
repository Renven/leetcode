/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//暴力解法
// var searchInsert = function (nums, target) {
//     for (i = 0; i <= nums.length; i++) {
//         if (nums[i] >= target) {
//             return i
//         }
//     }
//     return nums.length
// };

//二分查找法-左闭右闭
var searchInsert = function (nums, target) {
    const n = nums.length;
    let left = 0,
        right = n - 1,
        ans = n;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};