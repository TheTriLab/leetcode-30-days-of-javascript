// Challenge https://leetcode.com/problems/memoize/

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cached = {}
    return function(...args) {
        const key = args.join('_')
        
        if (!cached.hasOwnProperty(key)) {
            cached[key] = fn(...args)
        }

        return cached[key]
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */