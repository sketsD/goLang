// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useVideoRoom } from "../../context/VideoRoomContext";
// import VideoPlayer from "./VideoPlayer";
// import ScrollableList from "../../ui/ScrollableList";

// const VideoClassRoom: React.FC = () => {
//   const { roomid } = useParams();
//   const { ws, me, stream, peers } = useVideoRoom();
//   console.log({ peers });
//   useEffect(() => {
//     if (me) ws.emit("join-room", { roomid: roomid, peerid: me.id });
//   }, [roomid, me, ws, peers]);
//   if (!stream)
//     return (
//       <div>
//         <p>No stream</p>
//       </div>
//     );
//   console.log({ peers });

//   return (
//     <div className=" flex gap-2">
//       <ScrollableList>
//         <p>Room {roomid}</p>
//         <VideoPlayer stream={stream} />
//         {Object.values(peers).map((peer) => (
//           <VideoPlayer stream={peer.stream} />
//         ))}
//       </ScrollableList>
//     </div>
//   );
// };
// export default VideoClassRoom;
