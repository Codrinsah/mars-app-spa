import React, {useContext} from 'react'
import {Context} from "../App";

const Component4: React.FC = () => {
    const context = useContext(Context);

    return <p> {context.clickCount} </p>
}

export {Component4}