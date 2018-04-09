// src/reducers/board.js

const wordList = ['hello','baby','football','coding','hippopotamus','metatarsal']
const initialState = wordList[Math.floor(Math.random() * wordList.length)]
console.log(initialState)

export default (state = initialState, { type, payload } = {}) => {
  return state
}
