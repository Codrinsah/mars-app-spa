import React from "react";

const ImageList: React.FC<{images: string[]}> = (props) => {
    const images = props.images;
    const imageComponents = images.map((image) => {
        return <img src = {image}/>
    })

    return (
        <div>
            {imageComponents}
        </div>
    )

}

export { ImageList }