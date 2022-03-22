const str = `
010-1234-5678
sok9805@gmail.com
https://github.com/sok98/frontend-basic
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`

// const regexp = new RegExp('the', 'gi')
const regexp = /the/gi
console.log(str.match(regexp))  // the 배열 반환
console.log(regexp.test(str)) // regexp의 존재여부 반환
console.log(str.replace(regexp, 'AAA')) // 문자 대체

console.log(str.match(/h..p/g)) // http 찾음 
console.log(str.match(/https?/g)) // https, http 찾음 
console.log(str.match(/d{2}/g)) // dd 찾음 
console.log(str.match(/\b\w{2}\b/g)) // 숫자와 문자가 2~3글자인 단어 찾음
console.log(str.match(/\bf\w{1,}\b/g)) // f로 시작하는 모든 영단어 찾음


const h = `    the hello  world   !


`

console.log(h.replace(/\s/g, '')) // 모든 공백 문자 삭제
console.log(str.match(/.{1,}(?=@)/g)) // @ 앞쪽 문자열
console.log(str.match(/(?<=@).{1,}/g))  // @ 뒤쪽 문자열