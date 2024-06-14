import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from './slice/selectors';
import { useTodosSlice } from './slice';

export function HomePage() {
  const { actions } = useTodosSlice();
  const { isLoading, todos } = useSelector(selectTodos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getTodos());
  }, []);
  return (
    <>
      {isLoading && <p>Loading!!!!</p>}
      {!isLoading &&
        todos &&
        todos.map(item => {
          return <p> {item.title}</p>;
        })}
    </>
  );
}
