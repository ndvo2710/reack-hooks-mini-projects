import React, { useState } from 'react';
import Heading from './components/Heading';



function TodoList() {
    const [tempList, setTempList] = useState([
        'test 1',
        'test 2',
        'test 3'
    ]);
    return (
        <div>
            {
                tempList.map(tempItem => {
                    return (
                        <Heading tempContent={tempItem} />
                    )
                })
            }
        </div>
    )
}

export default TodoList
