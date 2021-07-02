import React, {useEffect, useState} from "react";
import Select from "react-select";
import axios from "axios"

const NasaPhotos: React.FC = () => {
    const [roverOptions, setRoverOptions] = useState<RoverOptions[]>([]);

    useEffect(() => {
        const roversResponsePromise: Promise<RoverResponse> = axios.get("http://localhost:8000/rovers")
        roversResponsePromise.then(roversResponse => {
            console.log(roversResponse);
            console.log("RESPONSE ABOVE")
            setRoverOptions(roversResponse.rovers.map((rover) => {
                return {value: rover.name, label: rover.name};
            }));
        }).catch(error => {
            console.log(error);
        })
    },[])

    console.log("RESPONSE ABOVE")

    return (
        <div style={{width: '300px'}}>
            <Select options={roverOptions}/>
        </div>
    );
}

interface RoverResponse {
    rovers: {name: string, cameras: {name: string}[]}[]
}
interface RoverOptions {
    value: string,
    label: string
}
export { NasaPhotos }
