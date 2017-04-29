import { ComponentBase } from 'resub';
import * as React from 'react'

import TodosStore = require('./TodosStore');

import { TextInput, View, Text , TouchableHighlight, StyleSheet } from 'react-native'

interface TodoListState {
    todos?: string[];
    todo?: string;
}

let styles: any = {}

class TodoList extends ComponentBase<{}, TodoListState> {
    protected _buildState(props: {}, initialBuild: boolean): TodoListState {
      return {
        todos: TodosStore.getTodos(),
        todo: TodosStore.getTextInputValue(),
      }
    }
    
    addTodo = () => {
      TodosStore.addTodo()
    }

    updateTextField = (value: string) => {
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
                    onChangeText={this.updateTextField}
                    style={styles.input}
                  />
                </View>
                <TouchableHighlight onPress={this.addTodo} style={styles.button}>
                  <Text style={styles.buttonText}>Add Todo</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

styles = StyleSheet.create({
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

export = TodoList;
