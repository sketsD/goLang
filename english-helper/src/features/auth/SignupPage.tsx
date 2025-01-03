import Button from "../../ui/Button";
import PasswordField from "./PasswordField";
import Label from "../../ui/Label";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SmallErrorMessage from "../../ui/SmallErrorMessage";
import { useUserDispatch, useUserSelector } from "../../store/hooks";
import { registerUser } from "../../store/slices/authSlice";
import { RegisterUserArgs } from "../../store/slices/authSlice";
import Spinner from "../../ui/Spinner";
import InputRadioButton from "../../ui/InputRadioButton";
import { useEffect } from "react";

export default function SignupPage() {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();
  const isRegistered = useUserSelector((store) => store.auth.userStatus);
  const isError = useUserSelector((store) => store.auth.error);
  const isLoading = useUserSelector((store) => store.auth.loading);

  const hanldeSubmit = async function (values: RegisterUserArgs) {
    await dispatch(registerUser(values));
  };

  useEffect(() => {
    if (isRegistered === "registered") {
      navigate("/login");
    }
  }, [navigate, isRegistered]);

  // const pass = "ospspspspsps&*/.22Q";

  const formik = useFormik<RegisterUserArgs & { confirmPassword: string }>({
    initialValues: {
      role: "student",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, " must be at least 2 characters")
        .required(" is required"),
      role: Yup.string().oneOf(["student", "tutor"]).required(),
      email: Yup.string().email(" address is invalid").required(" is required"),
      password: Yup.string()
        .min(8, " must be at least 8 characters")
        .matches(/[A-Z]/, "must contain an uppercase letter")
        .matches(/[a-z]/, "must contain a lowercase letter")
        .matches(/\d/, "must contain a number")
        .matches(/[@$!%*?&]/, "must contain a special character")
        .required(" is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Confirmation is required"),
    }),
    onSubmit: (values) => {
      hanldeSubmit(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const emailValidation = (!!formik.touched.email &&
    formik.errors.email) as boolean;
  const passwordValidation = (!!formik.touched.password &&
    formik.errors.password) as boolean;
  const confirmPasswordValidation = (!!formik.touched.confirmPassword &&
    formik.errors.confirmPassword) as boolean;
  const fullNameValidation = (!!formik.touched.fullName &&
    formik.errors.fullName) as boolean;

  return (
    <div className="pt-24 min-h-fit h-screen w-full mx-auto flex flex-col justify-center p-4 sm:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 ">
      <div className="w-full border-b border-black dark:border-white">
        <h2 className="font-bold text-2xl">Sign up</h2>
      </div>

      <div className="py-4">
        <p className="inline"> Already have an account?</p>
        <span> </span>
        <Link to="/login" className="underline">
          Log in!
        </Link>
      </div>
      {!!isError && <SmallErrorMessage errorMessage={isError} />}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center gap-2 pt-6 "
      >
        <div
          id="role-radio-group"
          role="group"
          aria-labelledby="role-radio-group"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="flex flex-wrap gap-4 py-4"
        >
          Are you student or a tutor ?
          <div className="flex gap-4">
            <InputRadioButton
              name="role"
              value="student"
              label="Student"
              isActive={"student" === formik.values.role}
            />
            <InputRadioButton
              name="role"
              value="tutor"
              label="Tutor"
              isActive={"tutor" === formik.values.role}
            />
          </div>
        </div>
        <Label htmlFor="firstName" isValid={fullNameValidation}>
          Full name {fullNameValidation ? formik.errors.fullName : ""}
        </Label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          autoComplete="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          placeholder="Your full name"
          className={`border-2 border-gray-150 px-4 py-2 rounded-md outline-none  transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
            fullNameValidation ? "border-red-500/40" : ""
          }`}
        />

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
          className={`border-2 border-gray-150 px-4 py-2 rounded-md outline-none  transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
            emailValidation ? "border-red-500/40" : ""
          }`}
        />

        <Label htmlFor="password" isValid={passwordValidation}>
          Password {passwordValidation ? formik.errors.password : ""}
        </Label>
        <PasswordField
          id="password"
          name="password"
          isValid={passwordValidation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Your password"
          autoComplete="new-password"
        />

        <Label htmlFor="confirmPassword" isValid={confirmPasswordValidation}>
          {confirmPasswordValidation
            ? formik.errors.confirmPassword
            : "Confirm your password"}
        </Label>
        <PasswordField
          id="confirmPassword"
          name="confirmPassword"
          isValid={confirmPasswordValidation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          placeholder="Confirm your password"
          autoComplete="new-password"
        />

        <Button type="submit" style="colored" addedClass="h-12 w-full mt-2">
          {isLoading ? "Processing..." : `Sign up as a ${formik.values.role}`}
          {isLoading && <Spinner />}
        </Button>
      </form>
      <div className="py-4 ">
        <span>
          By clicking Sign up, you agree to doLang
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

// export default <div>o</div>;
