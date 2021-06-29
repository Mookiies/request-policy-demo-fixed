import React from "react";
import { useMutation } from "urql";

export const Todo = ({ id, complete, text }) => {
  const [mutation, executeMutation] = useMutation(RemoveTodo);

  const handleToggle = () => executeMutation({ id });

  return (
    <li onClick={handleToggle}>
      <p className={complete ? "strikethrough" : ""}>{text}</p>
      {mutation.fetching && <span>(updating)</span>}
    </li>
  );
};

Todo.displayName = "Todo";

const RemoveTodo = `
  mutation($id: ID!) {
    toggleTodo(id: $id) {
      id
    }
  }
`;
