import { useEffect, useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    const [increment, setIncrement] = useState(0);

    useEffect(() => {
        setIncrement(Number(increment));
    },[increment]);

    const onChangeIncrement = e => {
        setIncrement(e.target.value);
    }

    return (<div>
        <p>
            현재 카운터 값은 <b>{value}</b> 입니다.
        </p>
        <input value={increment} onChange={onChangeIncrement}></input>
        <button onClick={() => setValue(value + increment)}>+{increment}</button>
        <button onClick={() => setValue(value - increment)}>-{increment}</button>
    </div>);
};

export default Counter;