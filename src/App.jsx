import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい",
    "uuuu"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="Todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>.
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        　　<p className="title">完了のTodo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key="todo" className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
