function setUnionOfAnyAmountOfSets(...args) {
  let union = new Set();
  args.forEach( function (S) {
    return S.forEach( function (e) {
      return union.add(e)
    })
  })
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
