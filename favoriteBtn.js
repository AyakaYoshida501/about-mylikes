import React, { useState } from 'react';
const GoodBtn = () => {
    const [count, setCount] = useState(0);
    const onClick = () => {
        setCount(count + 1);
    }
    const style = {
        backgroundColor:"pink"
    }
    return (
        <div className="flex justify-center mt-3 text-xs" >
            <button  className=" bg-indigo-700 font-semibold text-white py-1 px-2 rounded mr-4 text-center" onClick={onClick}><p className='text-xs'>Good<span className='text-xs'>👍</span></p></button>
            <p className='px-3 mt-2'>{count}</p>
        </div>
    )
}
export default GoodBtn