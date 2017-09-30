/**
 * 展平多维数组并添加至目标盒子
 * @param {*} arr 原数组
 * @param {*} res 目标盒子,默认为空数组
 */
function flat (arr, res) {
  res = res || []
  let i = 0
  while (i < arr.length) {
    Array.isArray(arr[i]) ? flat(arr[i], res) : res.push(arr[i])
    i++
  }
  return res
}

console.log(flat([1, 2, [3, [4,[5,6]]]], []))
