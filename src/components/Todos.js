import React, { useCallback, useMemo } from "react";
import gql from "graphql-tag";
import { useQuery } from "urql";
import { Loading, Error, Todo } from ".";

export const Todos = () => {
  const [res, executeQuery] = useQuery({ query: TodoQuery });

  const todos = useMemo(() => {
    if (res.fetching || res.data === undefined) {
      return <Loading />;
    }

    if (res.error) {
      return <Error>{res.error.message}</Error>;
    }

    return (
      <ul>
        {res.data.todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    );
  }, [res]);

  return (
    <>
      <h1>Todos</h1>
      {todos}
    </>
  );
};

Todos.displayName = "Todos";

const TodoQuery = gql`
  query {
    todos {
      id
      text
      complete
    }
  }
`;
