import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux';

const HooksTodoContainer = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          setText('');
          if (text.trim() != '') {
            dispatch(addTodo(text));
          }
        }}
      >
        Add todo
      </button>
      <ul>
        {todoList.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
export default HooksTodoContainer;
