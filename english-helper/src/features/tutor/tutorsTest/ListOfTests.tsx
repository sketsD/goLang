import { useLoaderData } from "react-router-dom";
import { TestProps } from "../../../store/slices/testSlice";

import ScrollableList from "../../../ui/ScrollableList";
import MaterialsItem from "./MaterialsItem";

export default function ListOfTests() {
  const testData = useLoaderData() as TestProps[] | [] | "Something went wrong";

  if (testData === "Something went wrong")
    return <div>Something went wrong</div>;
  if (testData.length === 0) return <div>You don have any test yet</div>;

  return (
    <div>
      <div className="grid grid-cols-10 my-8 border-b pl-4">
        <p className="col-span-7">Test Topic</p>
        <p className="mx-auto">Questions</p>
        <p className="mx-auto">Duration</p>
      </div>

      <ScrollableList>
        {testData.map((test: TestProps) => (
          <MaterialsItem
            testId={test.id}
            testDuration={test.testDuration}
            testLength={test.questions.length}
            testName={test.testName}
          />
        ))}
      </ScrollableList>
    </div>
  );
}

export async function loader() {
  try {
    const responce = await fetch("http://localhost:8000/tests");
    if (!responce.ok) throw new Error("Cant load users' tests");
    const data = await responce.json();
    if (!data || data.length < 1) return [];
    return data;
  } catch (err) {
    console.log(err);
    return "Something went wrong";
  }
}
