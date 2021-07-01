import React, {useState} from 'react';

const ClickCounter: React.FC = () => {
    const [clickCount, setClickCount] = useState(0);

    function onClick() {
        setClickCount(clickCount + 1);
    }
    return <button onClick={onClick}> This button was clicked {clickCount} times! </button>
};

export {ClickCounter}