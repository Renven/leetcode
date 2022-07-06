/**
 * 定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 *
 * 
 * 示例 1:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 * 示例 2:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 * 
 * 
 * 提示：
 * 
 * 你可以假设 nums 中的所有元素是不重复的。
 * n 将在 [1, 10000]之间。
 * nums 的每个元素都将在 [-9999, 9999]之间。
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//     for (i = 0; i <= nums.length; i++) {
//         if (nums[i] == target) {
//             return i;
//         }
//     }
//     return -1;
// }

//二分查找法-左闭右闭
var search = function (nums, target) {
    // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
    let left = 0;
    let right = nums.length - 1;
    // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
        if (nums[mid] > target) {
            right = mid - 1; // 去左面闭区间寻找
        } else if (nums[mid] < target) {
            left = mid + 1; // 去右面闭区间寻找
        } else {
            return mid;
        }
    }
    return -1;
};

//二分查找法-左闭右开
// var search = function (nums, target) {
//     let left = 0;
//     let right = nums.length;
//     while (left < right) {
//         let mid = left + Math.floor((right - left) / 2);
//         if (nums[mid] > target) {
//             right = mid; // 去左面闭区间寻找
//         } else if (nums[mid] < target) {
//             left = mid + 1; // 去右面闭区间寻找
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// };