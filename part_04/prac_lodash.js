import _ from 'lodash'

const usersA = [{
    userId: 1,
    name: 'a'
  },
  {
    userId: 2,
    name: 'b'
  }
]

const usersB = [{
    userId: 1,
    name: 'a'
  },
  {
    userId: 3,
    name: 'c'
  }
]

const usersC = usersA.concat(usersB)

// .uniqBy()
_.uniqBy(usersC, 'userId')

// .unionBy()
const usersD = _.unionBy(usersA, usersB, 'userId')

// .find()
const foundUser = _.find(usersA, {
  name: 'a'
})

// .findIndex()
const foundUserIndex = _.findIndex(usersA, {
  name: 'a'
})

// .remove()
_.remove(usersA, {
  name: 'a'
})