const getNthTriangleNumber = (n = 0) => n < 1 ? undefined : n * (n + 1) / 2

module.exports = getNthTriangleNumber
