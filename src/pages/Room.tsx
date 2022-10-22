import React, {FC} from "react";
import {useParams} from "react-router";
import useWebRTC, {LOCAL_VIDEO} from "../hooks/useWebRTC";


const Room: FC = () => {

    const {id: roomID} = useParams();
    const {clients, provideMediaRef} = useWebRTC(roomID)

    console.log(clients)

    return(
        <React.Fragment>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                height: '100vh',
            }}>
                {clients.map((clientID: any, index: any) => {
                    return (
                        <div key={clientID} id={clientID}>
                            <video
                                width='100%'
                                height='100%'
                                ref={instance => {
                                    provideMediaRef(clientID, instance);
                                }}
                                autoPlay
                                playsInline
                                muted={clientID === LOCAL_VIDEO}
                            />
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    )
}

export default Room