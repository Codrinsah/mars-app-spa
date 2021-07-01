import React, {useCallback, useContext} from 'react'
import {Context} from "../App";

const Component2: React.FC = () => {
    const context = useContext(Context);

    const onClick = () => {
        context.setClickCount(context.clickCount + 1);
    }
    return <button onClick={onClick}> Press me to increment the number! </button>
}

export {Component2}