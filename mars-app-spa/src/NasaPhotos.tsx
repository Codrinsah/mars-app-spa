import React, {useEffect, useState} from "react";
import Select from "react-select";
import axios from "axios"
import {ImageList} from "./ImageList";

const NasaPhotos: React.FC = () => {
    const [roversResponse, setRoverResponse] = useState<RoverResponse>({data: {rovers: []}});
    const [roverOptions, setRoverOptions] = useState<Options[]>([]);
    const [cameraOptions, setCameraOptions] = useState<Options[]>([])
    const [links, setLinks] = useState<string[]>([]);
    const [roverName, setRoverName] = useState<string>("");
    const [roverCamera, setRoverCamera] = useState<string>("");

    useEffect(() => {
        const roversResponsePromise: Promise<RoverResponse> = axios.get("http://localhost:8000/rovers")
        roversResponsePromise.then(response => {
            setRoverResponse(response)
            setRoverOptions(response.data.rovers.map((rover) => {
                return {value: rover.name, label: rover.name};
            }));
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div style={{width: '300px'}}>
            <p>Select the rover:</p>
            <Select options={roverOptions} onChange={(selected) => {
                if (selected) {
                    const name = selected.value;
                    const rovers = roversResponse.data.rovers;
                    const selectedRover = rovers.find((rover) => rover.name == name);
                    if (!selectedRover) {
                        return
                    }
                    const cameras = selectedRover.cameras.map((camera) => camera.name);
                    setRoverName(name);
                    setCameraOptions(cameras.map((camera) => {
                        return {value: camera, label: camera}
                    }));
                }
            }
            }/>
            <p>Select the type of camera:</p>
            <Select options={cameraOptions} onChange={(selected) => {
                if (selected) {
                    setRoverCamera(selected.value);
                }
            }
            }/>
            <button onClick={() => {
                const photoLinksResponse = axios.get<string[]>(`http://localhost:8000/rovers/${roverName}/photos/${roverCamera}`);
                photoLinksResponse.then((photoLinks) => {
                    setLinks(photoLinks.data);
                })
            }
            }> Submit request
            </button>
            <ImageList images={links.slice(0, 5)}/>
        </div>
    );
}

interface RoverResponse {
    data: { rovers: { name: string, cameras: { name: string }[] }[] }
}

interface Options {
    value: string,
    label: string
}

export {NasaPhotos}
