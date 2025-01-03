import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../config/firebase"; // Імпорт Firebase автентифікації
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

const getUserFromLocalStorage = (): UserType | null => {
  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? (JSON.parse(storedUser) as UserType) : null;
  } catch {
    return null;
  }
};

type initialStateAuthSlice = {
  loading: boolean;
  error: string | null;
  userStatus: "registered" | "reset" | null;
  user: UserType | null;
};

export type UserType = {
  role: "admin" | "student" | "tutor";
  fullName: string;
  email: string;
  uid: string;
  accessToken: string;
  createdAt: string;
};

export type RegisterUserArgs = {
  role: "student" | "tutor";
  fullName: string;
  email: string;
  password: string;
};

const initialState: initialStateAuthSlice = {
  loading: false,
  error: null,
  userStatus: null,
  user: getUserFromLocalStorage(),
};

const handleAuthError = function (errorCode: string): string {
  switch (errorCode) {
    case "auth/user-not-found":
      return "User is not found. Sign up or try again";
    case "auth/email-already-in-use":
      return "This email is already registered";
    default:
      return "Unknown error happen. Try Again";
  }
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async function (
    { email, password, role, fullName }: RegisterUserArgs,
    thunkAPI
  ) {
    try {
      // const db = getFirestore();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await userCredential.user.getIdToken();
      localStorage.setItem(
        "user",
        JSON.stringify({
          role,
          fullName,
          email,
          uid: user.uid,
          token,
          createdAt: new Date(),
        })
      );

      // await setDoc(doc(db, "users", user.uid), {
      //   firstName,
      //   secondName,
      //   //   tel,
      //   //   role,
      //   email: user.email,
      //   createdAt: new Date(),
      // });
      console.log("User registered and data saved:", user);
      return null;
    } catch (err: unknown) {
      const error = err as FirebaseError;
      const errorString = handleAuthError(error.code);
      return thunkAPI.rejectWithValue(errorString);
    }
  }
);
export const logInUser = createAsyncThunk(
  "auth/logInUser",
  async function (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    thunkAPI
  ) {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // const token = await userCredential.user.getIdToken();
      const userData =
        JSON.parse(localStorage.getItem("user") as string) || null;
      // Using the real DB
      // const userDoc = await getDoc(doc(db, "users", uid));
      // const userData = userDoc.data();

      //   return thunkAPI.fulfillWithValue(userData);
      return userData;
    } catch (err: unknown) {
      const error = err as FirebaseError;
      const errorString = handleAuthError(error.code);
      return thunkAPI.rejectWithValue(errorString);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async function resetPassword(email: string, thunkAPI) {
    try {
      await sendPasswordResetEmail(auth, email);
      return null;
    } catch (err: unknown) {
      const error = err as FirebaseError;
      const errorString = handleAuthError(error.code);
      return thunkAPI.rejectWithValue(errorString);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      state.loading = false;
      state.user = null;
      state.userStatus = null;
      state.error = null;
      // localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.userStatus = "registered";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logInUser.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
        state.error = null;
      })
      .addCase(
        logInUser.fulfilled,
        (state, action: PayloadAction<UserType>) => {
          state.loading = false;
          console.log(action.payload);
          state.user = action.payload;
        }
      )
      .addCase(logInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.userStatus = "reset";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// export const {registerUser, }
export default authSlice.reducer;
export const { logOut } = authSlice.actions;

// export const { setUser, removeUser } = userSlice.actions;
// export default userSlice.reducer;

// type admin = {
//   hasRights: true;
//   coursesParticipation: false;
// };
// type student = {
//   coursesParticipation: true;
//   courses: [];
// };
// type teacher = {
//   coursesParticipation: false;
//   createCourse: true;
// };

// type course = [
//   {
//     title: string;
//     href: string;
//     titleImg: string;
//     rating: number;
//     price: number;
//     description: string;
//     comments: comment[];
//   }
// ];

// type comment = {
//   commentText: string;
//   commentedBy: string;
//   commentedAt: string;
//   replys?: comment[];
// };
