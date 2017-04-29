import { StoreBase, AutoSubscribeStore, autoSubscribe } from 'resub'

@AutoSubscribeStore
class TodosStore extends StoreBase {
    private _todos: string[] = ['hello','world']
    private _textInputValue: string = ''
    
    updateTextInputValue(value: string) {
        this._textInputValue = value;
        this.trigger()
    }

    addTodo() {
      if(this._textInputValue === '') return
      this._todos = [...this._todos, this._textInputValue]
      this._textInputValue = ''
      this.trigger()
    }

    @autoSubscribe
    getTodos() {
        return this._todos
    }

    @autoSubscribe
    getTextInputValue() {
        return this._textInputValue
    }
}

export = new TodosStore()
