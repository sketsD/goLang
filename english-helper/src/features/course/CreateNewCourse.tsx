// import React from 'react'

// export default function CreateNewCourse() {
//   return (
//     <div>CreateNewCourse</div>
//   )
// }

import { Link } from "react-router-dom";
import { useUserDispatch, useUserSelector } from "../../store/hooks";
import { useState } from "react";
import { createTutorCourse } from "../../store/slices/tutorSlice";

export default function TutorPage() {
  const dispatch = useUserDispatch();
  const uid = useUserSelector((store) => store.auth.user?.uid);

  const [description, setDescription] = useState<string>("");
  const hanldeSubmit = async function (uid: string, description: string) {
    console.log(description);
    await dispatch(createTutorCourse({ uid, description }));
  };
  return (
    <>
      <button onClick={() => hanldeSubmit(uid!, description)}>SetDesc</button>
      <button>GetFesc</button>
      <div>TutorPage</div>
      <label htmlFor=""> Course description</label>
      <input
        className="text-black"
        type="text"
        value={description || ""}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Link to="/" />
    </>
  );
}
