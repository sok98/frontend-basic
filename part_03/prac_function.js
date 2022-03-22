// 기본 함수
function sum1(x, y) {
  return x + y
}

const sum2 = function () {
  return x + y
}

// 화살표 함수
const double1 = (x) => {
  return x * 2
}

const double2 = x => x * 2

const name = x => ({
  name: 'SYS'
})

// 즉시 실행함수 IIFE
(function () {
  console.log(a)
}());