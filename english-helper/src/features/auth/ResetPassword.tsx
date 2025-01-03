import Button from "../../ui/Button";
import Label from "../../ui/Label";
import ArrowLeft from "../../assets/svgs/ArrowLeft";
import SmallErrorMessage from "../../ui/SmallErrorMessage";
import Message from "../../ui/Message";
import Spinner from "../../ui/Spinner";
import { useUserDispatch, useUserSelector } from "../../store/hooks";
import { logOut, resetPassword } from "../../store/slices/authSlice";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function ForgotPassword() {
  const dispatch = useUserDispatch();
  const isError = useUserSelector((store) => store.auth.error);
  const isLoading = useUserSelector((store) => store.auth.loading);
  const isSent = useUserSelector((store) => store.auth.userStatus);
  const resetHandler = () => {
    dispatch(logOut());
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("address is invalid").required("Required"),
    }),
    onSubmit: async ({ email }) => {
      await dispatch(resetPassword(email));
    },
  });

  const emailValidation: boolean =
    formik.touched.email && formik.errors.email ? true : false;

  return !isError && isSent ? (
    <Message
      title="We've sent you an email."
      message="It may take up to 10 min.
      Please, follow the instructions to reset your password. If you didn`t
      receive an email you can try again."
    >
      <span onClick={resetHandler} className="underline cursor-pointer">
        Try again
      </span>
    </Message>
  ) : (
    <div className="h-screen w-full mx-auto flex flex-col justify-center p-4 sm:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 ">
      <div className="w-full border-b border-black dark:border-white">
        <h2 className="font-bold text-2xl">Forgot your password ?</h2>
      </div>
      <div className="py-4">
        <p className="inline"> Do not have an account?</p>
        <span> </span>
        <Link to="/signup" className="underline">
          Sign up
        </Link>
        <span> first!</span>
        <span> or </span>
        <Link to="/login" className="underline">
          Log in
        </Link>
      </div>
      {!!isError && <SmallErrorMessage errorMessage={isError} />}
      <form
        onSubmit={formik.handleSubmit}
        className=" flex flex-col justify-center gap-2 pt-8 "
      >
        <Label htmlFor="email" isValid={emailValidation}>
          Email {emailValidation ? formik.errors.email : ""}
        </Label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Your email"
          className={`dark:bg-gray-500 border-2 border-gray-150 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
            emailValidation ? "border-red-500/40" : ""
          }`}
        />

        <Button type="submit" style="colored" addedClass="h-12 w-full">
          {isLoading ? "Submitting..." : `Submit`}
          {isLoading && <Spinner />}
        </Button>

        <Button
          to="/"
          style="secondaryWhite"
          addedClass="h-12 gap-5 hover:gap-10 "
        >
          <ArrowLeft />
          Back to doLang
        </Button>
      </form>
    </div>
  );
}
