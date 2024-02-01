// Challenge https://leetcode.com/problems/filter-elements-from-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArray = []

    for (let i = 0; i < arr.length; i++) {
        const value = fn(arr[i], i)
        if (Boolean(value)) {
            filteredArray.push(arr[i])
        }
    }

    return filteredArray
};