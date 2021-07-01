import React from 'react'
import {Component2} from "./Component2";
import {Component3} from "./Component3";

const Component1: React.FC = () => {
    return (
        <div>
            <Component2/>
            <Component3/>
        </div>
    )
}

export {Component1}