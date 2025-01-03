import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import tutorReducer from "./slices/tutorSlice";
import testReducer from "./slices/testSlice";
// import videocallReducer from "./slices/videocallSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tutor: tutorReducer,
    test: testReducer,
    // videoCall: videocallReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
