import React, {FC, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import socket from "../socket";
import ACTIONS from '../socket/actions'
import {v4} from "uuid";

const Main: FC = () => {

    const navigate = useNavigate()

    const [rooms, updateRooms] = useState([]);

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
            updateRooms(rooms);
        });
    }, []);

    return(
        <React.Fragment>
            <div>
                <h1>Комнаты</h1>

                <ul>
                    {rooms.map(roomID => (
                        <li key={roomID}>
                            {roomID}
                            <button onClick={() => {
                                navigate(`/room/${roomID}`);
                            }}>Подключиться к комнате</button>
                        </li>
                    ))}
                </ul>

                <button onClick={() => {
                    navigate(`/room/${v4()}`);
                }}>
                    Создать комнату
                </button>
            </div>
        </React.Fragment>
    )
}

export default Main