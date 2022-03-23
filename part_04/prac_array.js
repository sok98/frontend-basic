const arr1 = [1, 2, 3, 4]
const arr2 = ['apple', 'banana', 'cherry']

// .find()
const a = arr1.find(element => element > 3)

// .concat()
const b = arr1.concat(arr2)

// .foreach()
const c = arr1.forEach((item, index) => {
  console.log(`${item} : ${index}`)
})

// .map()
const d = arr1.map((item, index) => ({
  id: index,
  name: item
}))

// .filter()
const e = arr1.fileter(item => number < 3)

// .find()
const f = arr2.find(item => {
  return /^B/.test(item)
})

// .findIndex()
const g = arr2.findIndex(item => {
  return /^B/.test(item)
})

// .includes()
const h = arr1.includes(3)

// .push()
arr1.push(5)

//.unshift()
arr1.unshift(0)

// .reverse()
arr1.reverse()

// .splice()
arr1.splice(2, 1)
arr1.splice(2, 0, 999)