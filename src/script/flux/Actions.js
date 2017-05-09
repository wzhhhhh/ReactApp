import Dispatcher from './Dispatcher'

export default {
  addItem(text){
    Dispatcher.dispatch({
      type: 'ADD',
      text: text
    })
  },
  removeItem(index){
    Dispatcher.dispatch({
      type: 'REMOVE',
      text: index
    })
  }
}
