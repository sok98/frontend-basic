// const user = {
//   firstName: 'Gildong',
//   lastName: 'Hong',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// 생성자 함수
function User1(first, last) {
  this.firstName = first
  this.lastName = last
}
User1.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const name = new User1('Gildong', 'Hong');

// ES6 Classes
class User2 {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}