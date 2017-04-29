import { StoreBase, AutoSubscribeStore, autoSubscribe } from 'resub';

@AutoSubscribeStore
class TodosStore extends StoreBase {
    private _todos: String[] = ['hello','world'];

    addTodo(todo: String) {
      this._todos = [...this._todos, todo]
      this.trigger();
    }

    @autoSubscribe
    getTodos() {
        return this._todos;
    }
}

export = new TodosStore();
