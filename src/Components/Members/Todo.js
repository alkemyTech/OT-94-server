import React from "react";

const Todo = ({ todo, index, deleteToDo }) => {
  return (
    <>
      <div className="list">
        <a href={todo}>{todo}</a>{" "}
        <button
          className="btn-delete"
          onClick={() => deleteToDo(index)}
          type="button"
        >
          x
        </button>
      </div>
    </>
  );
};

export default Todo;
