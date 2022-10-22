import React, {FC} from "react";
import {useParams} from "react-router";
import useWebRTC from "../hooks/useWebRTC";


const Room: FC = () => {

    const {id: roomID} = useParams();

    useWebRTC(roomID)

    console.log(roomID)

    return(
        <React.Fragment>
            Room
        </React.Fragment>
    )
}

export default Room