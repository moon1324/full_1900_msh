import React from "react";
import useInput from "../../hooks/useInput";
import S from "./style";

const TodoInsert = ({ todos, setIsTodoUpdate, isTodoUpdate }) => {
    const [value, setValue, onChangeValue] = useInput("");

    // CRUD
    // 투두리스트 추가, POST
    // enter를 쳤을 때 confirm 창을 띄워서 이대로 추가하시겠습니까? 로직을 만들기
    const onKeyDownAddTodo = async (e) => {
        console.log(e);
        if (e.key === "Enter") {
            console.log("사용자가 엔터를 누름");
            // console.log(value);
            if (!window.confirm("이대로 추가하시겠습니까?")) return;
            await fetch("http://localhost:4000/todo", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    id: (todos.length + 1).toString(),
                    title: value,
                    isChecked: false,
                }),
            }).then((response) => {
                if (!response.ok) return console.log(`Error ${response}`);
                setIsTodoUpdate(!isTodoUpdate);
                setValue("");
            });
        }
    };
    return (
        <div>
            <S.Input
                type="text"
                placeholder="할 일을 추가해 볼까요?"
                value={value}
                onChange={onChangeValue}
                onKeyDown={onKeyDownAddTodo}
            />
        </div>
    );
};

export default TodoInsert;
