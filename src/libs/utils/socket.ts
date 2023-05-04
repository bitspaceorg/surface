import { ws } from "../stores/ws";
import { io } from "socket.io-client";
import {SERVER_URL} from "./constants";

export const getSocket = async () => {
    const client = io(SERVER_URL)
    ws.set(client)
}
