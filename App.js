import { createStackNavigator } from 'react-navigation';
import TodoScreen from './components/allTodos/todos.component';

const App = createStackNavigator({
  Home: { screen: TodoScreen },
});

export default App;

// export default class App extends React.Component {
//   state = {
//     todos: []
//   };

//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     return fetch(API_TODOS)
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState({
//           todos: responseJson.todos
//         });
//       });
//   }

//   render() {
//     const { todos } = this.state;

//     return (
//       <View>
//         <FlatList 
//           data = { todos }
//           renderItem = { ({item}) => <Text>{item.text}</Text> }
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
