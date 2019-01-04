const Big = require('big.js.safe')
const Decimal = require('decimal.js-light')

const nthRoot = (bigNumber, intRoot) => {
  const strBigNumber = bigNumber.toFixed()
  const decimal = Decimal(strBigNumber)
  const root = decimal.pow(1 / intRoot)
  return Big(root.toFixed())
}

module.exports = nthRoot
