// import { useEffect, useState } from "react";

// const VideoClassRoom = () => {
//   const [localStream, setLocalStream] = useState(null);
//   const [remoteStreams, setRemoteStreams] = useState({});
//   const [peers, setPeers] = useState({});

//   useEffect(() => {
//     // Initialize WebRTC
//     const initWebRTC = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });
//         setLocalStream(stream);
//         // Initialize connection to signaling server
//         // Setup peer connections
//       } catch (error) {
//         console.error("Error accessing media devices:", error);
//       }
//     };

//     initWebRTC();
//     return () => {
//       // Cleanup WebRTC connections
//       if (localStream) {
//         localStream.getTracks().forEach((track) => track.stop());
//       }
//       Object.values(peers).forEach((peer) => peer.close());
//     };
//   }, []);

//   return (
//     <div>
//       <video
//         autoPlay
//         muted
//         ref={(video) => {
//           if (video && localStream) {
//             video.srcObject = localStream;
//           }
//         }}
//       />
//       {/* Remote videos */}
//       {Object.values(remoteStreams).map((stream, index) => (
//         <video
//           key={index}
//           autoPlay
//           ref={(video) => {
//             if (video && stream) {
//               video.srcObject = stream;
//             }
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default VideoClassRoom;
