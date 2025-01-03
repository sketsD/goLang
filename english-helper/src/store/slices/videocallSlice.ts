// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import socketIOClient, { Socket } from "socket.io-client";

// // const WS = "http://localhost:8080";
// // const ws = socketIOClient(WS);

// interface VideoCallState {
//   // ws: Socket;
//   // isCallActive: boolean;
//   participants: string[];
//   peerid: string | null;
//   streams: Record<string, { stream: MediaStream }>;
// }
// interface VideoCallActionAdd {
//   peerid: string;
//   stream: MediaStream;
// }
// // Record<string, {stream:MediaStream}>
// const initialState: VideoCallState = {
//   // isCallActive: false,
//   participants: [],
//   peerid: null,
//   streams: {},
// };

// const videoCallSlice = createSlice({
//   name: "videoCall",
//   initialState,
//   reducers: {
//     // startCall: (state, action: PayloadAction<string>) => {
//     //   state.isCallActive = true;
//     //   state.roomId = action.payload;
//     // },
//     // endCall: (state) => {
//     //   state.isCallActive = false;
//     //   state.roomId = null;
//     //   state.participants = [];
//     // },
//     addParticipant: (state, action: PayloadAction<VideoCallActionAdd>) => {
//       state.participants.push(action.payload.peerid);
//       state.streams[action.payload.peerid] = { stream: action.payload.stream };
//     },
//     removeParticipant: (state, action: PayloadAction<string>) => {
//       state.participants = state.participants.filter(
//         (p) => p !== action.payload
//       );
//     },
//   },
// });

// export const { addParticipant, removeParticipant } = videoCallSlice.actions;
// export default videoCallSlice.reducer;
