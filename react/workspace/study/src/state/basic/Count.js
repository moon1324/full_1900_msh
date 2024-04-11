import React, {useState} from 'react';

const Count = () => {

    const [number, setNumber] = useState(0)
    const increase = () =>{
        // number+=1;
        setNumber(number+1)
    }
    const decrease = () =>{
        // number-=1;
        setNumber(number-1)
    }
    
    return (
        <div>
            <button onClick={decrease}>감소</button>
            {number}
            <button onClick={increase}>증가</button>
        </div>
    );
};

export default Count;