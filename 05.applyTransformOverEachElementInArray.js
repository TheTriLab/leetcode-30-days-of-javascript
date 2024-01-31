// Challenge https://leetcode.com/problems/apply-transform-over-each-element-in-array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = []
    for (let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i))
    }

    return returnedArray
};