import React from 'react';

const NasaCard: React.FC<{title: string, imgSrc: string, paragraph1: string, paragraph2: string}> = (props) => {
    return(
        <div>
            <h1> {props.title} </h1>
            <img src = {props.imgSrc} />
            <p> {props.paragraph1} </p>
            <p> {props.paragraph2} </p>
        </div>
    )
};

export {NasaCard}