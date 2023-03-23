import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {BASE_URL, TODOS} from '../../../services/endpoints';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const todosResponse = await fetch(BASE_URL + TODOS(1));
    const todosResponseJson = await todosResponse.json();
    setTodos([todosResponseJson]);
  };
  useEffect(() => {
    getTodos();
  }, []);
  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text>Todos</Text>
      <FlatList data={todos} renderItem={renderItem} />
    </View>
  );
};

export default Todos;
