/**
 *
 * Addlist
 *
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { useTodosSlice } from 'app/pages/HomePage/slice';
import { messages } from './messages';
import { useDispatch } from 'react-redux';
import { title } from 'process';

interface Props {}

export const Addlist = () => {
  const { actions } = useTodosSlice();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const AddToDOOO = async () => {
    if (value === '') {
      alert('enter value atleast');
    } else {
      const obj = {
        userId: 1,
        title: 'created by prince',
        id: Date.now(),
        body: value,
      };
      setValue(' ');
      dispatch(actions.addTodo(obj));
    }
  };

  return (
    <Div>
      <label>Add Todo</label>
      <input
        type="text"
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      {/*  {t(...messages.someThing())}  */}
      <button onClick={AddToDOOO}>Add</button>
    </Div>
  );
};

const Div = styled.div``;
