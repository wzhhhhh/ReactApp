import {Dispatcher} from 'flux';
import TodoStore from './TodoStore'

let dispatcher = new Dispatcher();

export default dispatcher.register((action) => {
  switch (action.type) {
    case 'ADD':
      TodoStore.addItem(action.text)
      break;
    case 'REMOve':
      TodoStore.removeItem(index)
      break;
  }
})
