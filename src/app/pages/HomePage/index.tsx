import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from './slice/selectors';
import { useTodosSlice } from './slice';
import { Addlist } from 'app/components/Addlist';
import styled from 'styled-components';

export function HomePage() {
  const { actions } = useTodosSlice();
  const { isLoading, todos } = useSelector(selectTodos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getTodos());
  }, []);

  const EDitTodo = e => {
    dispatch(
      actions.editTodo({
        userId: e.target.value,
        title: 'edited Todo',
        id: e.target.value,
        body: 'this is a edited todo',
      }),
    );
  };
  return (
    <>
      <Div>
        <div>
          {isLoading && <p>Loading!!!!</p>}
          {!isLoading &&
            todos &&
            todos.map(item => {
              return (
                <p>
                  {' '}
                  {item.title}
                  <button value={item.id} onClick={EDitTodo}>
                    Edittodo
                  </button>
                </p>
              );
            })}
        </div>
        <div></div>
        <Addlist />
      </Div>
    </>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
