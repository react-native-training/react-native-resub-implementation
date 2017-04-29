import {  ComponentBase } from 'resub';
import * as React from 'react'
import { TextInput, View, Text , TouchableHighlight, StyleSheet } from 'react-native'

import TodosStore = require('./TodosStore');

let styles = StyleSheet.create({
  buttonText: {
    color:'white'
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 20
  },
  input: {
    height: 50,
    backgroundColor: '#ededed',
    padding: 7
  }
})

interface TodoListState {
  todos?: string[];
  todo?: string;
}

class TodoList extends ComponentBase<{}, TodoListState> {
    protected _buildState(props: {}, initialBuild: boolean): TodoListState {
      return {
        todos: TodosStore.getTodos(),
        todo: TodosStore.getTextInputValue(),
      }
    }
      
    private _addTodo = () => {
      TodosStore.addTodo()
    }

    private _updateTextField = (value: string) => {
      TodosStore.updateTextInputValue(value)
    }

    render() {
      console.log('state:', this.state)
        return (
            <View style={{ marginTop: 100 }}>
                { this.state.todos.map((x, i) => <Text key={i}>{x}</Text>) }
                <View style={styles.inputContainer}>
                  <TextInput
                    
                    value={this.state.todo}
                    onChangeText={this._updateTextField}
                    style={styles.input}
                  />
                </View>
                <TouchableHighlight onPress={this._addTodo} style={styles.button}>
                  <Text style={styles.buttonText}>Add Todo</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export = TodoList;
