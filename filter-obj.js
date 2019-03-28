const obj = {
  fullStr: 'full string',
  emptyStr: '',
  one: 1,
  zero: 0,
  null: null,
  undefined: undefined,
  booleanFalse: false,
  booleanTrue: true,
  anotherObj: { hello: 'world' },
  arr: [1, 2, 3],
}

const filterObj = (object, callback = () => true) => {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (callback(key, value)) return { ...acc, [key]: value }
    return acc
  }, {})
}

/** TEST CASES
  const truthy = (key, value) => {
    return Boolean(value)
  }

  const noNullOrUndefined = (key, value) => {
    return value !== undefined && value !== null
  }

  const noEmptyStrings = (key, value) => {
    return value !== ''
  }

  console.log('full object', obj)
  console.log('truthy', filterObj(obj, truthy))
  console.log('noEmptyStrings', filterObj(obj, noEmptyStrings))
  console.log('noNullOrUndefined', filterObj(obj, noNullOrUndefined))
 */

module.exports = filterObj
