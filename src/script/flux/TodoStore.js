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
  }
})
