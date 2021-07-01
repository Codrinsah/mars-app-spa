import React, {useEffect, useState} from 'react';

const ClickCounter: React.FC = () => {
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const count = localStorage.getItem('clickCount');
        if (!count) {
            localStorage.setItem('clickCount', '0');
        } else {
            setClickCount(parseInt(count));
        }
    },
        []);

    function onClick() {
        const nextClickCount = clickCount + 1;
        localStorage.setItem('clickCount', nextClickCount.toString())
        setClickCount(nextClickCount);
    }
    return <button onClick={onClick}> This button was clicked {clickCount} times! </button>
};

export {ClickCounter}