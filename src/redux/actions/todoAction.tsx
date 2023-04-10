import {createAction} from '@reduxjs/toolkit';
import axios from 'axios';

const addDataToTodo = createAction(
  'todos/add',
  function setData(name: string, userid: number) {
    return {
      payload: {
        name,
        userId: userid,
      },
    };
  },
);

const getTodos = createAction<Array>('todos/getAllTodos');
