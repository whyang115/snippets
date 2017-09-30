function arrRange (start, end) {
  let res = []
  let i = start
  if (end && typeof +end == 'number') {
    for (; i < +end; i++) {
      res.push(i)
    }
  } else {
    while (i--) {
      res[i] = i
    }
  }
  console.log(res)
  return res
}

arrRange(10)
arrRange(9,'10')
