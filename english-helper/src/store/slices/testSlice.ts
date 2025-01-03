import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TestProps = {
  id: string;
  isLoading: boolean;
  indexQuestion: number;
  testName: string;
  testDuration: string;
  questions: QuestionAnswer[];
};
type QuestionAnswer = {
  question: string;
  context: string;
  correctAnswer: string;
  answers: string[];
};

const initialState: TestProps = {
  id: "",
  isLoading: false,
  indexQuestion: 0,
  testName: "",
  testDuration: "",
  questions: [
    { question: "", correctAnswer: "", context: "", answers: ["", "", ""] },
  ],
};

export const uploadTest = createAsyncThunk(
  "test/uploadTest",
  async (testid: string | null, thunkAPI) => {
    const link = testid
      ? `http://localhost:8000/tests/${testid}`
      : "http://localhost:8000/tests";
    const method = testid ? "PUT" : "POST";
    const state = thunkAPI.getState() as { test: TestProps };
    const dataToSend = {
      testName: state.test.testName,
      testDuration: state.test.testDuration,
      questions: state.test.questions,
    };
    try {
      // const userID = uid;
      const responce = await fetch(link, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      if (!responce.ok) throw new Error("Failed to upload the data");
    } catch (err) {
      console.log(err);
      thunkAPI.rejectWithValue("Error");
    }
  }
);
export const deleteTest = createAsyncThunk(
  "test/deleteTest",
  async (testid: string) => {
    try {
      const responce = await fetch(`http://localhost:8000/tests/${testid}`, {
        method: "DELETE",
      });
      if (!responce.ok) throw new Error("Failed to delete the test");
      console.log(responce);
      // return responce.status;
    } catch (err) {
      console.log(err);
    }
  }
);

export const editPreviousTest = createAsyncThunk(
  "test/editPreviousTest",
  async (testid: string) => {
    try {
      const responce = await fetch("http://localhost:8000/tests");
      if (!responce.ok) throw new Error("Can't load this test");
      const data = await responce.json();
      console.log(data);
      const currentTest = data.filter((test: TestProps) => test.id === testid);
      return currentTest[0];
    } catch (err) {
      console.log(err);
    }
  }
);
// export const loadAllTests = createAsyncThunk(
//   "test/loadAllTests",
//   async (uid: string, thunkAPI) => {
// try {
//   const responce = await fetch("http://localhost:8000/tests");
//   if (!responce.ok) throw new Error("Cant load users' tests");
//   const data = await responce.json();
//   return data;
// } catch (err) {
//   console.log(err);
// }
//   }
// );

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    cleanTest(state) {
      state.id = "";
      state.isLoading = false;
      state.indexQuestion = 0;
      state.testName = "";
      state.testDuration = "";
      state.questions = [
        { question: "", correctAnswer: "", context: "", answers: ["", "", ""] },
      ];
    },
    lastQuestion(state) {
      state.indexQuestion = state.questions.length - 1;
    },

    nextQuestion(state) {
      if (state.questions.length - 1 === state.indexQuestion) {
        state.questions.push({
          question: "",
          correctAnswer: "",
          context: "",
          answers: ["", "", ""],
        });
      }
      state.indexQuestion++;
    },
    prevQuestion(state) {
      if (state.indexQuestion !== 0) state.indexQuestion--;
    },

    addTestData(
      state,
      action: PayloadAction<{
        testName: string;
        testDuration: string;
        questionAnswer: QuestionAnswer;
      }>
    ) {
      state.testName = action.payload.testName;
      state.testDuration = action.payload.testDuration;
      if (state.questions.length - 1 === state.indexQuestion) {
        state.questions[state.questions.length - 1] =
          action.payload.questionAnswer;
        return;
      } else {
        state.questions = state.questions.map((qa, i) =>
          i === state.indexQuestion ? action.payload.questionAnswer : qa
        );
      }
    },
    deleteQuestion(state) {
      state.questions = state.questions.filter(
        (_, i) => i !== state.indexQuestion
      );
      console.log(state);
    },

    saveTest(
      state,
      action: PayloadAction<{
        testName: string;
        testDuration: string;
        questionAnswer: QuestionAnswer;
      }>
    ) {
      state.testName = action.payload?.testName || state.testName;
      state.testDuration = action.payload?.testDuration || state.testDuration;
      state.questions[state.questions.length - 1] =
        action.payload.questionAnswer;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editPreviousTest.pending, (state) => {
        state.id = "";
        state.isLoading = true;
        state.indexQuestion = 0;
      })
      .addCase(editPreviousTest.fulfilled, (state, action) => {
        console.log(action.payload);
        const { testName, testDuration, questions, id } = action.payload;
        state.id = id;
        state.isLoading = false;
        state.testName = testName;
        state.testDuration = testDuration;
        state.questions = questions;
      })
      // .addCase(editPreviousTest.rejected, (state) => {
      //   state.isLoading = false;
      // })
      .addCase(uploadTest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadTest.fulfilled, (state) => {
        state.id = "";
        state.isLoading = false;
        state.indexQuestion = 0;
        state.testDuration = "";
        state.testName = "";
        state.questions = [
          {
            question: "",
            correctAnswer: "",
            context: "",
            answers: ["", "", ""],
          },
        ];
      });
    // .addCase(loadAllTests.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(loadAllTests.fulfilled, (state, action) => {});
  },
});

export default testSlice.reducer;
export const {
  addTestData,
  deleteQuestion,
  saveTest,
  nextQuestion,
  prevQuestion,
  cleanTest,
  lastQuestion,
} = testSlice.actions;
