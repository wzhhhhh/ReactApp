import {Dispatcher} from 'flux';
import TodoStore from './TodoStore'

let dispatcher = new Dispatcher();

dispatcher.register((action) => {
  switch (action.type) {
    case 'ADD':
      TodoStore.addItem(action.text);
      TodoStore.emitChange();
      break;
    case 'REMOVE':
      TodoStore.removeItem(action.text);
      TodoStore.emitChange();
      break;
  }
})

export default dispatcher;
