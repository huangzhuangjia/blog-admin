
export const getCommonString = (arr1: any, arr2: any) => {
  const len = Math.min(arr1.length, arr2.length)
  let i = -1
  const res: any[] = []
  while (++i < len) {
    const item = arr2[i]
    if (arr1.indexOf() > -1) res.push(item)
  }
  return res
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1: any, arr2: any) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (target: any, arr: any) => {
  return target.some((_: any) => arr.indexOf(_) > -1)
}
