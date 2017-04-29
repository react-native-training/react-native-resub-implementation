import { ComponentBase } from 'resub';
import * as React from 'react'

import TodosStore = require('./TodosStore');

import { View, Text , TouchableHighlight, StyleSheet } from 'react-native'

interface TodoListState {
    todos?: string[];
}

let styles: any = {}

class TodoList extends ComponentBase<{}, TodoListState> {
    protected _buildState(props: {}, initialBuild: boolean): TodoListState {
      return {
        todos: TodosStore.getTodos()
      }
    }

    render() {
        console.log('state: ', this.state)
        return (
            <View style={{ marginTop: 100 }}>
                { this.state.todos.map((x, i) => <Text key={i}>{x}</Text>) }
                <TouchableHighlight onPress={() => TodosStore.addTodo('yo')} style={styles.button}>
                  <Text style={{ marginTop: 20, color:'white' }}>Add Todo</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
})

export = TodoList;
