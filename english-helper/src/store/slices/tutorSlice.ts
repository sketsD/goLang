import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type initialStateTutorSlice = {
  loading: boolean;
  error: string | null;
  uid: string | null;
  isCertified: boolean;
};
const initialState: initialStateTutorSlice = {
  loading: false,
  error: null,
  uid: null,
  isCertified: false,
};
export const createTutorCourse = createAsyncThunk(
  "tutor/createCourse",
  async (
    { uid, description }: { uid: string; description: string },
    thunkAPI
  ) => {
    try {
      const setCousre = await new Promise((resolve) => {
        setTimeout(() => {
          console.log(description);
          resolve(localStorage.setItem(uid, JSON.stringify(description)));
        }, 2000);
        return setCousre;
      });
    } catch (err: unknown) {
      const error = err as ReferenceError;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTutorCourse = createAsyncThunk(
  "tutor/getTutorCourse",
  async ({ uid }: { uid: string }, thunkAPI) => {
    try {
      const userCourses = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem(uid) as string) || null);
        }, 1000)
      );
      console.log(userCourses);

      return userCourses;
    } catch (err: unknown) {
      const error = err as ReferenceError;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const tutorSlice = createSlice({
  name: "tutor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTutorCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTutorCourse.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getTutorCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createTutorCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTutorCourse.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createTutorCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default tutorSlice.reducer;
// export const { getTutorsCourses } = tutorSlice.actions;
// getTutorsCourses
