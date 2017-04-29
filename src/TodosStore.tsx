import { StoreBase, AutoSubscribeStore, autoSubscribeWithKey } from 'resub'

const TriggerKeys = {
    InputTextKey: 'input',
    TodosChangedKey: 'todos'
}

@AutoSubscribeStore
class TodosStore extends StoreBase {
    private _todos: string[] = ['hello','world']
    private _textInputValue: string = ''
    
    updateTextInputValue(value: string) {
        this._textInputValue = value;
        this.trigger(TriggerKeys.InputTextKey)
    }

    addTodo() {
      if(this._textInputValue === '') return
      this._todos = [...this._todos, this._textInputValue]
      this._textInputValue = ''
      this.trigger(TriggerKeys.TodosChangedKey)
    }

    @autoSubscribeWithKey(TriggerKeys.TodosChangedKey)
    getTodos() {
        return this._todos
    }

    @autoSubscribeWithKey(TriggerKeys.InputTextKey)
    getTextInputValue() {
        return this._textInputValue
    }
}

export = new TodosStore()
