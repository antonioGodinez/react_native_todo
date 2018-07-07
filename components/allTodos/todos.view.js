import React from 'react';
import { FlatList, View, Text } from 'react-native';

const TodosView = {
    getRender: (todos) => {
        return (
            <View>
              <FlatList 
                data = { todos }
                renderItem = { ({item}) => <Text>{item.text}</Text> }
              />
            </View>
          );
    }
}

export default TodosView;