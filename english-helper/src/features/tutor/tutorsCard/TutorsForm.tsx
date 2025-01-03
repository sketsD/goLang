import Button from "../../../ui/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Label from "../../../ui/Label";
import { tutorsCard } from "../../../data/tutorsCard";

const TutorsForm = () => {
  //   {
  //   tutorsData,
  // }: {
  //   tutorsData: {
  //     author: string;
  //     img: string;
  //     nativeLanguage: string;
  //     language: string;
  //     description: string;
  //     rating: string;
  //     price: string;
  //   };
  // }
  const { author, nativeLanguage, language, description, img, price } =
    tutorsCard;
  const hanldeSubmit = (values: unknown) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      imgUrl: img,
      fullName: author,
      description: description,
      lessonDuration: "120" + "min",
      pricePerLesson: price + "$",
      nativeLanguage: nativeLanguage,
      otherLanguage: language,
    },
    validationSchema: Yup.object({
      imgUrl: Yup.string().required(" is required"),
      fullName: Yup.string()
        .min(2, " must be at least 2 characters")
        .required(" is required"),
      description: Yup.string()
        .min(100, " you section must contain more information")
        .required(" is required"),
      lessonDuration: Yup.string().required(" is required"),
      pricePerLesson: Yup.string().required(" is required"),
      nativeLanguage: Yup.string()
        .notOneOf(["russian"], " must be one of human languages")
        .required(" is required"),
      otherLanguage: Yup.string().required(" is required"),
    }),
    onSubmit: (values) => {
      hanldeSubmit(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const fullNameValidation = (!!formik.touched.fullName &&
    formik.errors.fullName) as boolean;
  const imgUrlValidation = (!!formik.touched.imgUrl &&
    formik.errors.imgUrl) as boolean;
  const descriptionValidation = (!!formik.touched.description &&
    formik.errors.description) as boolean;
  const lessonDurationValidation = (!!formik.touched.lessonDuration &&
    formik.errors.lessonDuration) as boolean;
  const pricePerLessonValidation = (!!formik.touched.pricePerLesson &&
    formik.errors.pricePerLesson) as boolean;
  const nativeLanguageValidation = (!!formik.touched.nativeLanguage &&
    formik.errors.nativeLanguage) as boolean;
  const otherLanguageValidation = (!!formik.touched.otherLanguage &&
    formik.errors.otherLanguage) as boolean;

  return (
    <div className="min-h-fit h-screen w-full mx-auto flex flex-col  p-4 sm:w-1/2 lg:w-1/2  ">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col max-h-fit w-full p-4 "
      >
        <div>
          <Label isValid={imgUrlValidation} additionalClass="font-bold">
            Image url {imgUrlValidation ? formik.errors.imgUrl : ""}:
          </Label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imgUrl}
            placeholder="Your email"
            className={`dark:bg-gray-500 border-2 border-gray-150 px-4 py-2 w-full rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
              imgUrlValidation ? "border-red-500/40" : ""
            }`}
          />
        </div>

        <div>
          <Label isValid={fullNameValidation} additionalClass="font-bold">
            Tutor's name {fullNameValidation ? formik.errors.fullName : ""}:
          </Label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imgUrl}
            placeholder="Your email"
            className={`dark:bg-gray-500 border-2 border-gray-150 px-4 py-2 w-full rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
              imgUrlValidation ? "border-red-500/40" : ""
            }`}
          />
        </div>
        <div>
          <Label isValid={nativeLanguageValidation} additionalClass="font-bold">
            Native language{" "}
            {nativeLanguageValidation ? formik.errors.nativeLanguage : ""}:
          </Label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imgUrl}
            placeholder="Your email"
            className={`dark:bg-gray-500 border-2 border-gray-150 px-4 py-2 w-full rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
              imgUrlValidation ? "border-red-500/40" : ""
            }`}
          />
        </div>
        <div>
          <Label isValid={otherLanguageValidation} additionalClass="font-bold">
            Language I teach
            {otherLanguageValidation ? formik.errors.otherLanguage : ""}:
          </Label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imgUrl}
            placeholder="Your email"
            className={`dark:bg-gray-500 border-2 border-gray-150 px-4 py-2 w-full rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
              imgUrlValidation ? "border-red-500/40" : ""
            }`}
          />
        </div>
        <div>
          <Label isValid={descriptionValidation} additionalClass="font-bold">
            About
            {descriptionValidation ? formik.errors.description : ""}:
          </Label>

          <div className="min-h-fit">
            <textarea
              // ref={textareRef}
              id="description"
              rows={10}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className={`dark:bg-gray-500 border-2 border-gray-150 px-4 py-2 w-full resize-y  overflow-hidden rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
                imgUrlValidation ? "border-red-500/40" : ""
              }`}
            ></textarea>
          </div>
        </div>

        <div>
          <Label isValid={lessonDurationValidation} additionalClass="font-bold">
            Lesson duration
            {lessonDurationValidation ? formik.errors.lessonDuration : ""}:
          </Label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imgUrl}
            placeholder="Your email"
            className={`dark:bg-gray-500 border-2 border-gray-150 px-4 py-2 w-full rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
              imgUrlValidation ? "border-red-500/40" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <Label isValid={pricePerLessonValidation} additionalClass="font-bold">
            Price per lesson
            {pricePerLessonValidation ? formik.errors.pricePerLesson : ""}:
          </Label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imgUrl}
            placeholder="Your email"
            className={`dark:bg-gray-500 border-2 border-gray-150 px-4 py-2 w-full rounded-md outline-none transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900/90 dark:border-teal-950 ${
              imgUrlValidation ? "border-red-500/40" : ""
            }`}
          />
        </div>

        <Button style="mainBlack">Save changes</Button>
      </form>
    </div>
  );
};

export default TutorsForm;
