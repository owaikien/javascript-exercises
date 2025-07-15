const sumAll = function(start, end) {
    if (
        typeof start != 'number' || typeof end != 'number' ||
        start < 0 || end < 0 ||
        !Number.isInteger(start) ||
        !Number.isInteger(end)
    ) {
        return 'ERROR';
    }
    
    const min = Math.min(start, end)
    const max = Math.max(start, end)

    const n = (max - min) + 1
    return n * (min + max) / 2
};

// Do not edit below this line
module.exports = sumAll;