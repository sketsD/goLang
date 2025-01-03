// import {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { useNavigate } from "react-router-dom";
// import socketIOClient from "socket.io-client";
// import Peer from "peerjs";
// import { v4 as uuidV4 } from "uuid";
// import { useUserDispatch, useUserSelector } from "../store/hooks";
// import { addParticipant } from "../store/slices/videocallSlice";

// const WS = "http://localhost:8080";

// interface VideoRoomContextType {
//   ws: typeof ws;
//   me: Peer | undefined;
//   stream: MediaStream | undefined;
//   peers: string[];
// }

// const VideoRoomContext = createContext<VideoRoomContextType | null>(null);
// const ws = socketIOClient(WS);

// const VideoRoomProvider = ({ children }: { children: ReactNode }) => {
//   const navigate = useNavigate();
//   const [me, setMe] = useState<Peer>();
//   const [stream, setStream] = useState<MediaStream>();
//   const dispatch = useUserDispatch();
//   const peers = useUserSelector((store) => store.videoCall.participants);

//   const enterRoom = ({ roomId }: { roomId: string }) => {
//     console.log({ roomId });
//     navigate(`/tutor-cabinet/lesson/live/${roomId}`);
//   };
//   const getUsers = ({ participants }: { participants: string }) => {
//     console.log({ participants });
//   };
//   useEffect(() => {
//     const meId = uuidV4();
//     const peer = new Peer(meId);
//     setMe(peer);

//     try {
//       navigator.mediaDevices
//         .getUserMedia({ video: true, audio: true })
//         .then((stream) => {
//           setStream(stream);
//         });
//     } catch (err) {
//       console.error(err);
//     }
//     ws.on("room-created", enterRoom);
//     ws.on("get-users", getUsers);
//   }, []);

//   useEffect(() => {
//     if (!me || !stream) return;
//     console.log("me", me.id);
//     console.log("stream", stream);
//     ws.on("user-joined", ({ peerid }) => {
//       const call = me.call(peerid, stream);
//       call.on("stream", (peerStream) => {
//         dispatch(addParticipant({ peerid, stream: peerStream }));
//       });
//     });
//     me.on("call", (call) => {
//       call.answer(stream);
//       call.on("stream", (peerStream) => {
//         dispatch(addParticipant({ peerid: call.peer, stream: peerStream }));
//       });
//     });
//   }, [me, stream, dispatch]);

//   console.log(peers);

//   return (
//     <VideoRoomContext.Provider value={{ ws, me, stream, peers }}>
//       {children}
//     </VideoRoomContext.Provider>
//   );
// };

// function useVideoRoom() {
//   const context = useContext(VideoRoomContext);
//   if (context === null)
//     throw new Error("Video room is used outside of the context");
//   return context;
// }

// export { VideoRoomProvider, useVideoRoom };
