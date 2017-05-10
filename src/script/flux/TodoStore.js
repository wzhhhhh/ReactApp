import {EventEmitter} from 'events'
export default Object.assign({}, EventEmitter.prototype, {
  items: ['wzh', 'rr'],
  getAll(){
    return this.items;
  },
  addItem(item){
    this.items.push(item);
  },
  removeItem(index){
    this.items.splice(index, 1);
  },
  emitChange(){
    this.emit('change')
  },
  addChangeListener(callback){
    this.on('change', callback)
  },
  removeChangeListener(callback){
    this.removeListener('change', callback)
  }
})
