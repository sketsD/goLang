// import { useEffect, useState } from "react";
// import ClockIcon from "../../../assets/svgs/classRoom/ClockIcon";
// import MessageIcon from "../../../assets/svgs/classRoom/MessageIcon";
// import Button from "../../../ui/Button";
// import ModalWindow from "../../../ui/ModalWindow";
// import ScrollableList from "../../../ui/ScrollableList";

// export default function LiveLesson() {
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
//       {/* <ModalWindow>Message</ModalWindow> */}
//       <div className="my-8 border-b pl-4">
//         {/* <p className="py-2 text-2xl text-gray-400 text-center">
//           You've started Live Lesson
//         </p> */}
//       </div>
//       <ScrollableList>
//         <div className="grid grid-cols-2 gap-4">
//           <video
//             autoPlay
//             muted
//             ref={(video) => {
//               if (video && localStream) {
//                 video.srcObject = localStream;
//               }
//             }}
//           />
//           {/* Remote videos */}
//           {Object.values(remoteStreams).map((stream, index) => (
//             <video
//               key={index}
//               autoPlay
//               ref={(video) => {
//                 if (video && stream) {
//                   video.srcObject = stream;
//                 }
//               }}
//             />
//           ))}
//         </div>
//       </ScrollableList>
//       <div className="my-8 border-b pl-4">
//         {/* <div className="flex gap-2">
//             <Button style="mainWhite" addedClass="h-2 px-2">
//               <MessageIcon />
//             </Button>
//             <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
//               First lesson
//             </Button>
//             <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
//               Request changes <ClockIcon />
//             </Button>
//           </div> */}
//       </div>
//     </div>
//   );
// }
