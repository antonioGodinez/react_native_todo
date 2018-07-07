import React from 'react';

import TodosView from './todos.view';

const API_TODOS = 'http://warm-stream-29932.herokuapp.com/todos';

export default class App extends React.Component {
  state = {
    todos: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return fetch(API_TODOS)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          todos: responseJson.todos
        });
      });
  }

  render() {
    const { todos } = this.state;

    return TodosView.getRender(todos);
  }
}