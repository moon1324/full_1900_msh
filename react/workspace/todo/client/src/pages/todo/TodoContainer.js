import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoInsert from "./TodoInsert";

const TodoContainer = () => {
    // http://localhost:4000/todo에 데이터를 콘솔에 찍기

    // fetch("http://localhost:4000/todo").then((response) =>
    //     console.log(response)
    // );

    // const [todos, setTodos] = useState([]);
    // const [error, setError] = useState(false);
    // const getTodos = async () => {
    //     try {
    //         const response = await fetch("http://localhost:4000/todo");
    //         const datas = await response.json();
    //         return datas;
    //     } catch (error) {
    //         setError(error);
    //     }
    // };
    // useEffect(() => {
    //     getTodos().then(setTodos);
    // }, []);

    // console.log(todos && todos.length);

    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(false);
    const [isTodoUpdate, setIsTodoUpdate] = useState(false);
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:4000/todo");
            const datas = await response.json();
            return datas;
        } catch (error) {
            setError(error);
        }
    };
    useEffect(() => {
        getTodos().then(setTodos);
    }, [isTodoUpdate]);

    // console.log(todos && todos.length)

    return (
        <div>
            <TodoInsert
                todos={todos}
                setIsTodoUpdate={setIsTodoUpdate}
                isTodoUpdate={isTodoUpdate}
            />
            {<p className="sub-title">남은 할 일:😒 {todos.length}개 </p>}
            {/* map함수 이용해서 todo 컴포넌트 만들기,  todos, getTodos props로 보내기 */}
            <ul>
                {todos.map((todo, i) => (
                    <Todo
                        key={i}
                        todo={todo}
                        getTodos={getTodos}
                        setIsTodoUpdate={setIsTodoUpdate}
                        isTodoUpdate={isTodoUpdate}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoContainer;
