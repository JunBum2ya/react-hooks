import { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    const [increment, setIncrement] = useState(0);

    const onChangeIncrement = e => {
        setIncrement(e.target.value);
    }

    return (<div>
        <p>
            현재 카운터 값은 <b>{value}</b> 입니다.
        </p>
        <input value={increment} onChange={onChangeIncrement}></input>
        <button onClick={() => setValue(Number(value) + Number(increment))}>+{increment}</button>
        <button onClick={() => setValue(Number(value) - Number(increment))}>-{increment}</button>
    </div>);
};

export default Counter;