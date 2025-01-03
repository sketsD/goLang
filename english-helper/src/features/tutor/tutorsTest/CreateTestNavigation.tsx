import { ReactNode } from "react";
import { useUserDispatch } from "../../../store/hooks";
import {
  // firstQuestion,
  // lastQuestion,
  addTestData,
  nextQuestion,
  prevQuestion,
} from "../../../store/slices/testSlice";
import Button from "../../../ui/Button";

const wrapValues = (values) => {
  const { testName, testDuration, question, correctAnswer, answers } = values;
  const questionAnswer = { question, correctAnswer, answers };
  return { testName, testDuration, questionAnswer };
};

const CreateTestNavigation: React.FC<{
  children: ReactNode;
  isTouched: boolean;
  values;
}> = ({ isTouched, values, children }) => {
  const dispatch = useUserDispatch();
  // console.log(isTouched);

  return (
    <div className="flex justify-center gap-3 py-2">
      {/* <Button
        style="secondaryWhite"
        type="button"
        addedClass="px-10 h-10"
        onClick={() => dispatch(firstQuestion())}
      >
        first
      </Button> */}
      <Button
        style="secondaryWhite"
        type="button"
        addedClass="px-10 h-10"
        onClick={() => {
          if (isTouched) dispatch(addTestData(wrapValues(values)));
          dispatch(prevQuestion());
        }}
      >
        prev
      </Button>
      <div className="py-1 px-28 border-2 rounded-lg">{children}</div>
      <Button
        style="secondaryWhite"
        type="button"
        addedClass="px-10 h-10"
        onClick={() => {
          if (isTouched) dispatch(addTestData(wrapValues(values)));
          dispatch(nextQuestion());
        }}
      >
        Next
      </Button>
      {/* <Button
        style="secondaryWhite"
        type="button"
        addedClass="px-10 h-10"
        onClick={() => dispatch(lastQuestion())}
      >
        Last
      </Button> */}
    </div>
  );
};

export default CreateTestNavigation;
