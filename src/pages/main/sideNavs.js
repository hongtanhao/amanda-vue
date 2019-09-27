import { amaNames } from '../../components/amas.js'
export default (function () {
  function join (a, b) {
    return a + b
  }
  let amaNamesCopy = amaNames.slice()
  amaNamesCopy = amaNamesCopy.map(item => {
    return {
      path: join('#', item),
      text: item
    }
  })
  return amaNamesCopy
})()
