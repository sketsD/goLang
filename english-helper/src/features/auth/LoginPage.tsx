import { useFormik } from "formik";
import Button from "../../ui/Button";
import PasswordField from "./PasswordField";
import Label from "../../ui/Label";
import { Link, useNavigate } from "react-router-dom";
import CheckBoxInput from "../../ui/CheckBoxInput";
import * as Yup from "yup";
import { useUserDispatch, useUserSelector } from "../../store/hooks";
import SmallErrorMessage from "../../ui/SmallErrorMessage";
import Spinner from "../../ui/Spinner";
import { logInUser } from "../../store/slices/authSlice";
import { useEffect } from "react";
// import { useEffect } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();
  const isLoggedIn = useUserSelector((store) => store.auth.user);
  const userRole = useUserSelector((store) => store.auth.user?.role);
  const isError = useUserSelector((store) => store.auth.error);
  const isLoading = useUserSelector((store) => store.auth.loading);

  useEffect(() => {
    if (!!isLoggedIn as boolean) {
      navigate(`/${userRole}-cabinet`);
    }
  }, [navigate, isLoggedIn, userRole]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("address is invalid").required(" is required"),
      password: Yup.string()
        .min(8, " must be at least 8 characters")
        .matches(/[A-Z]/, "must contain an uppercase letter")
        .matches(/[a-z]/, "must contain a lowercase letter")
        .matches(/\d/, "must contain a number")
        .matches(/[@$!%*?&]/, "must contain a special character")
        .required(" is required"),
    }),
    onSubmit: async ({ email, password }) => {
      dispatch(logInUser({ email, password }));
    },
  });

  const emailValidation = (!!formik.touched.email &&
    formik.errors.email) as boolean;
  const passwordValidation = (!!formik.touched.password &&
    formik.errors.password) as boolean;

  return (
    <div className="min-h-fit pt-20 h-screen w-full mx-auto flex flex-col justify-center p-4 sm:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 ">
      <div className="w-full border-b border-black dark:border-white">
        <h2 className="font-bold text-2xl">Log in</h2>
      </div>

      <div className="py-4">
        <p className="inline"> Do not have an account?</p>
        <span> </span>
        <Link to="/signup" className="underline">
          Sign up first!
        </Link>
      </div>
      {!!isError && <SmallErrorMessage errorMessage={isError} />}

      <form
        onSubmit={formik.handleSubmit}
        className=" flex flex-col justify-center gap-2 pt-8"
      >
        <Label htmlFor="email" isValid={emailValidation}>
          Email {emailValidation ? formik.errors.email : ""}
        </Label>
        <input
          type="text"
          id="email"
          name="email"
          autoComplete="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Your email"
          className={`dark:bg-gray-500 border-2 border-gray-150 px-4 py-2 rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
            emailValidation ? "border-red-500/40" : ""
          }`}
        />

        <Label htmlFor="password" isValid={passwordValidation}>
          Password {passwordValidation ? formik.errors.password : ""}
        </Label>
        <PasswordField
          id="password"
          name="password"
          autoComplete="current-password"
          isValid={passwordValidation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Your password"
        />

        <Link to="/reset_password" className="underline">
          Forgot your password?
        </Link>
        <CheckBoxInput
          id="remember"
          labelValue="Remember me"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button type="submit" style="colored" addedClass="h-12 w-full">
          {isLoading ? "Processing..." : "Log in"}
          {isLoading && <Spinner />}
        </Button>
      </form>
      <div className="py-4 ">
        <span>
          By clicking Log in or Continue with, you agree to doLang
          <span> </span>
          <Link to="/termsofuse" className="underline">
            Terms of use
          </Link>
          <span> and </span>
          <Link to="/privacypolicy" className="underline">
            Privacy Policy
          </Link>
        </span>
      </div>
    </div>
  );
}
