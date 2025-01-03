// import { Socket } from "socket.io";
// import { v4 as uuidV4 } from "uuid";

// const rooms: Record<string, string[]> = {};
// interface IRoomParams {
//   roomid: string;
//   peerid: string;
// }

// export const roomHandler = (socket: Socket) => {
//   const createRoom = () => {
//     const roomId = uuidV4();
//     rooms[roomId] = [];
//     socket.emit("room-created", { roomId });
//     console.log("Room created");
//   };

//   const joinRoom = ({ roomid, peerid }: IRoomParams) => {
//     if (rooms[roomid]) {
//       console.log("User joined the room", roomid, peerid);
//       rooms[roomid].push(peerid);
//       socket.join(roomid);
//       socket.to(roomid).emit("user-joined", { peerid });
//       socket.emit("get-users", { roomid, participants: rooms[roomid] });
//     }
//     socket.on("disconnect", () => {
//       console.log("user left the room ", peerid);
//       leaveRoom({ roomid, peerid });
//     });
//   };

//   const leaveRoom = ({ peerid, roomid }: IRoomParams) => {
//     rooms[roomid] = rooms[roomid].filter((id) => id !== peerid);
//     socket.to(roomid).emit("user-disconnected", peerid);
//   };
//   socket.on("create-room", createRoom);
//   socket.on("join-room", joinRoom);
// };
