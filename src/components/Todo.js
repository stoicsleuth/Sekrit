import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import createProfile from "./../store/actions/profileActions";

const Todos = props => {
  const firestore = useFirestore();
  useFirestoreConnect("todos");

  const todos = useSelector(state => state.firestore.ordered.todos);

  const dispatch = useDispatch();
  const createTodo = useCallback(
    todo => dispatch(createProfile({ firestore }, todo)),
    [ dispatch, firestore ]
  );

  const [todo, setTodo] = useState({ title: "", content: "" });

  const handleChange = e => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.title.trim() === "" || todo.content.trim() === "") return;
    createTodo(todo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Title: </label>
        <input
          type="text"
          id="title"
          value={todo.title}
          onChange={handleChange}
        />
        <br />
        <label>Enter Content: </label>
        <input
          type="text"
          id="content"
          value={todo.content}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
      {todos ? (
        todos.map((todo, i) => (
          <div key={i}>
            <h4> {todo.title}</h4>
            <p> {todo.content}</p>
          </div>
        ))
      ) : (
        <h2>Loading.... Please Wait</h2>
      )}
    </div>
  );
};

export default Todos;
