// import { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import Label from "../../../ui/Label";
import Button from "../../../ui/Button";
import { useUserDispatch, useUserSelector } from "../../../store/hooks";
import {
  cleanTest,
  editPreviousTest,
  saveTest,
  uploadTest,
} from "../../../store/slices/testSlice";
import CreateTestNavigation from "./CreateTestNavigation";
import { store } from "../../../store";
import { LoaderFunctionArgs, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useToggle from "../../../hooks/useToggle";
// import * as Yup from "yup";
const alpha = Array.from(Array(26)).map((_, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const wrapValues = (values) => {
  const { testName, testDuration, question, context, correctAnswer, answers } =
    values;
  const questionAnswer = { question, correctAnswer, context, answers };
  return { testName, testDuration, questionAnswer };
};

const CreateNewTest = () => {
  const questionNumber = useUserSelector((store) => store.test.indexQuestion);
  const testData = useUserSelector((store) => store.test);
  const dispatch = useUserDispatch();
  const navigate = useNavigate();
  const testID = useParams();

  const [isVisible, handleIsVisible] = useToggle(
    !!testData.questions[questionNumber].context
  );
  useEffect(() => {
    if (!testID?.testid) dispatch(cleanTest());
  }, [testID, dispatch]);

  return (
    <div className="pt-4 pb-20">
      <Formik
        key={questionNumber}
        enableReinitialize
        initialValues={{
          testName: testData.testName,
          testDuration: testData.testDuration,
          question: testData.questions[questionNumber].question,
          correctAnswer: testData.questions[questionNumber].correctAnswer,
          context: testData.questions[questionNumber].context,
          answers: testData.questions[questionNumber].answers,
        }}
        onSubmit={async (values) => {
          const data = wrapValues(values);
          dispatch(saveTest(data));
          const id = testID?.testid ? testID.testid : null;
          await dispatch(uploadTest(id));
          navigate("/tutor-cabinet/tests");
        }}
      >
        {({ values, dirty, isValid }) => (
          <div className="p-4 text-lg">
            <Form>
              <div className="flex gap-4  items-center ">
                <Label isValid={false} additionalClass="min-w-fit">
                  Topic :
                </Label>
                <Field
                  type="text"
                  name="testName"
                  placeholder="Tenses"
                  className="basis-2/6 dark:bg-gray-500 border-2 border-gray-150 px-4 py-1 rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950"
                ></Field>
                <Label isValid={false}>Duration :</Label>
                <Field
                  type="text"
                  name="testDuration"
                  placeholder="6"
                  className="w-16 dark:bg-gray-500 border-2 border-gray-150 px-4 py-1 rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950"
                ></Field>
                min
              </div>

              <div className="flex gap-4 items-center pt-2">
                <Label isValid={false} additionalClass={"min-w-fit"}>
                  Question #{questionNumber + 1}
                </Label>
                <Field
                  type="text"
                  name="question"
                  placeholder="How can it be ?"
                  className="dark:bg-gray-500 border-2 w-full border-gray-150 px-4 py-1 rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950"
                ></Field>
              </div>
              {isVisible && (
                <div className="flex gap-4 items-center pt-2">
                  <Label isValid={false} additionalClass={"min-w-fit"}>
                    Context :
                  </Label>
                  <Field
                    type="text"
                    name="context"
                    placeholder="Write an example or the sentence with missing word"
                    className="dark:bg-gray-500 border-2 w-full border-gray-150 px-4 py-1 rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950"
                  ></Field>
                </div>
              )}
              <div className="py-4">
                <Button
                  type="button"
                  style="colored"
                  addedClass="px-2 h-10"
                  onClick={handleIsVisible}
                >
                  {isVisible ? "Hide Context" : "Add context"}
                </Button>
              </div>
              <div className="pt-2">
                <p>Correct answer :</p>
                <div className="flex gap-4 pt-2 w-full items-center">
                  <Label isValid={false} additionalClass={"min-w-5"}>
                    {alphabet[0]})
                  </Label>
                  <Field
                    type="text"
                    name="correctAnswer"
                    placeholder="True"
                    className="dark:bg-gray-500 grow border-2 min-w-42 border-gray-150 px-4 py-1 rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950"
                  ></Field>
                </div>
              </div>
              <FieldArray
                name="answers"
                render={(arrayHelpers) => (
                  <div className="pt-2">
                    <p>Wrong answer{values.answers.length > 1 && "s"} :</p>
                    {values.answers.map((_, index) => (
                      <div
                        key={index}
                        className="flex gap-4 pt-2 w-full items-center"
                      >
                        <Label additionalClass={"min-w-5"} isValid={false}>
                          {alphabet[index + 1]})
                        </Label>
                        <Field
                          name={`answers[${index}]`}
                          placeholder={index === 0 ? "False" : "Optional"}
                          className="dark:bg-gray-500 grow border-2 min-w-42 border-gray-150 px-4 py-1 rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950"
                        ></Field>
                        {index > 0 && (
                          <Button
                            type="button"
                            style="colored"
                            addedClass="w-10 h-10 py-0 "
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            X
                          </Button>
                        )}
                      </div>
                    ))}
                    <div className="py-4">
                      <Button
                        type="button"
                        style="colored"
                        addedClass="px-2 h-10"
                        onClick={() => arrayHelpers.push("")}
                      >
                        Add answer
                      </Button>
                    </div>
                  </div>
                )}
              />
              <CreateTestNavigation
                isTouched={dirty && isValid}
                values={values}
              >
                <div>
                  Question {questionNumber + 1} of {testData.questions.length}
                </div>
              </CreateTestNavigation>
              <div className="flex justify-center gap-4">
                <Button
                  style="secondaryBlack"
                  type="submit"
                  addedClass="px-10 h-10"
                >
                  Finish Test
                </Button>

                {/* <Button
                    style="mainBlack"
                    type="button"
                    addedClass="px-10 h-10"
                    onClick={() => dispatch(addTestData(wrapValues(values)))}
                  >
                    Next Question
                  </Button> */}

                {/* <Button
                    style="mainBlack"
                    type="button"
                    addedClass="px-10 h-10"
                    onClick={() => dispatch(editQuestion(wrapValues(values)))}
                  >
                    Save Changes
                  </Button> */}
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateNewTest;
export async function loader({ params }: LoaderFunctionArgs) {
  const { testid } = params;
  await store.dispatch(editPreviousTest(testid as string));
  return null;
}
