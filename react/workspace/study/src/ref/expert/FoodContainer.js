import React, { useRef, useState } from "react";

const FoodContainer = () => {
    // style
    const style = { listStyle: "none" };
    // inputRef
    const inputRef = useRef([]);
    // food 상태
    const [foods, setFoods] = useState([]);
    // checked 상태
    const [checked, setChecked] = useState([]);

    // foodList 만들기
    const foodList = foods.map(({ kor, eng }, i) => {
        return (
            <li key={i} style={style}>
                <input
                    type="checkbox"
                    // checked 상태를 관리하기 위해서
                    // check index와 foods의 list를 비교해서 검사하기 위해서
                    // 상태를 관리한다
                    checked={checked[i]}
                    // checked 안의 상태를 바꾸기 위해서 사용하는 함수
                    onChange={() => {
                        onChangeCheckbox(i);
                    }}
                />
                {`${kor} (${eng})`}
            </li>
        );
    });

    // 추가버튼
    const onClickToAdd = () => {
        // console.log("추가")
        // setFoods값을 추가한 것
        setFoods(
            foods.concat({
                kor: inputRef.current[0].value,
                eng: inputRef.current[1].value,
            })
        );
        // 추가했을때 checked의 상태도 같이 false로 넣어놓는것
        setChecked(checked.concat(false));
        // console.log(inputRef.current[0].value, inputRef.current[1].value);
    };

    // checked상태를 클릭했을때 변화를 주기위해서 splice(index, 몇 개, '값') == 수정
    const onChangeCheckbox = (i) => {
        // 체크박스를 눌렀을 때
        // 누른것에 해당하는 index의 체크박스만
        // true면 false, false면 true로 바꿔준다
        checked.splice(i, 1, !checked[i]);
        // 바꾼값을 적용시켜주기 위해 리랜더링
        // .concat()아무것도 붙이지 않음으로 새로 리랜더링만 시킨다
        setChecked(checked.concat());
    };

    // 삭제버튼
    const onClickToRemove = () => {
        // console.log("삭제")
        // 체크한것을 삭제해야 하기 떄문에, checked[i]인 상태로 삭제버튼을 누르면 클릭한 값이 남으니
        // ! not붙여서 반대값을 배열 foods에 넣는다
        // 조건식 !checked[i]로
        // 체크가 안되어있는것만 남기기
        setFoods(foods.filter((_, i) => !checked[i]));
        // 삭제된 이후 체크박스와 음식이 인덱스가 안맞으니까
        // Foods의 길이만큼 new Array() .fill(false)로 전달하여 다시 만들어 checked의 배열에 넣는다
        // 다시 인덱스를 맞추기 위해 새로 불러온 후 모든걸 false로 세팅
        setChecked(new Array(foods.length).fill(false));
    };

    return (
        <div>
            <input
                type="text"
                ref={(element) => {
                    inputRef.current[0] = element;
                }}
            />
            <input
                type="text"
                ref={(element) => {
                    inputRef.current[1] = element;
                }}
            />
            <button onClick={onClickToAdd}>추가</button>
            <button onClick={onClickToRemove}>삭제</button>
            <div>
                <ul>{foodList}</ul>
            </div>
        </div>
    );
};

export default FoodContainer;

// import React, { useRef, useState } from "react";
// import Food from "./Food.jsx";

// // 실습
// // 한글음식, 영어 음식명을 입력하여 추가버튼을 누르면
// // 아래 결과에서 한글음식명(영어음식명)으로 표현하는 리스트 구현
// // 리스트에서 체크박스로 삭제버튼을 누르면
// // 해당 리스트가 삭제

// const FoodContainer = () => {
//     const inputsRef = useRef([]);
//     const formRef = useRef();

//     const [foodList, setFoodList] = useState([]);

//     const onClickAddFood = (e) => {
//         console.log(e);
//         // 유효성검사
//         for (let input of inputsRef.current) {
//             // input에 value가 들어오지 않았을 시 에러메세지 출력
//             if (!input.value) {
//                 console.log(input.name + " error");
//                 return;
//             }
//         }
//         // form 전송
//         // formRef.current.submit();
//         console.log(formRef.current.koreanName.value);
//         let koreanName = formRef.current.koreanName.value;
//         let englishName = formRef.current.englishName.value;
//         let newFood = koreanName + "(" + englishName + ")";
//         setFoodList([...foodList, newFood]);
//     };

//     const onClickToCheck = () => {};

//     const onClickDeleteFood = (e) => {};

//     return (
//         <div>
//             <Food
//                 inputsRef={inputsRef}
//                 formRef={formRef}
//                 onClickAddFood={onClickAddFood}
//                 onClickDeleteFood={onClickDeleteFood}
//             />
//             <button type="button" onClick={onClickDeleteFood}>
//                 삭제
//             </button>
//             <div>
//                 {foodList.map((foodList, i) => (
//                     <div key={i}>
//                         <li>
//                             <input
//                                 type="checkbox"
//                                 value=""
//                                 onClick={onClickToCheck}
//                             />
//                             <div>{foodList}</div>
//                         </li>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FoodContainer;
