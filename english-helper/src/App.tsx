import { DarkModeProvider } from "./context/DarkModeContext";
import { Provider } from "react-redux";
import { store } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import LoginPage from "./features/auth/LoginPage";
import SignupPage from "./features/auth/SignupPage";
import ResetPassword from "./features/auth/ResetPassword";
import BuisnessPage from "./features/buisness/BuisnessPage";
import TutorsLesson from "./features/tutor/tutorsLesson/TutorsLesson";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import Support from "./pages/Support";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import ProtectedRoute from "./ui/ProtectedRoute";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import AdminDashboard from "./features/admin/AdminDashboard";
import TutorDashboard from "./features/tutor/TutorDashboard";
import StudentDashboard from "./features/student/StudentDashboard";
// import CreateNewCourse from "./features/course/CreateNewCourse";
import CreateNewTest, {
  loader as testsLoader,
} from "./features/tutor/tutorsTest/CreateNewTest";
import TutorsCard from "./features/tutor/tutorsCard/TutorsCard";
import TutorTests from "./features/tutor/tutorsTest/TutorTests";
import TutorsForm from "./features/tutor/tutorsCard/TutorsForm";
import TutorsInfo from "./features/tutor/tutorsCard/TutorsInfo";
import ListOfTests, {
  loader as tutorsTestsLoader,
} from "./features/tutor/tutorsTest/ListOfTests";
import Schedule from "./features/tutor/tutorsCalendar/Schedule";
import UpcommingLessons from "./features/tutor/tutorsLesson/UpcommingLessons";
// import LiveLesson from "./features/tutor/tutorsLesson/LiveLesson";
import HistoryLesson from "./features/tutor/tutorsLesson/HistoryLesson";
// import VideoClassRoom from "./features/VideoCall/VideoClassRoom";
// import { VideoRoomProvider } from "./context/VideoRoomContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/reset_password", element: <ResetPassword /> },

      {
        path: "/buisness",
        element: <BuisnessPage />,
      },
      // { path: "/tutor", element: <TutorPage /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/support", element: <Support /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/cookiespolicy", element: <CookiePolicy /> },
      { path: "/termsofuse", element: <TermsOfUse /> },
      { path: "/privacypolicy", element: <PrivacyPolicy /> },
    ],
  },
  {
    element: (
      <ProtectedRoute allowedRoles="tutor">
        {/* <VideoRoomProvider> */}
        <TutorDashboard />
        {/* </VideoRoomProvider> */}
      </ProtectedRoute>
    ),
    path: "/tutor-cabinet",
    children: [
      {
        path: "lesson",
        element: <TutorsLesson />,
        children: [
          { index: true, element: <UpcommingLessons /> },
          { path: "history", element: <HistoryLesson /> },
          // { path: "live/:roomid", element: <VideoClassRoom /> },
        ],
      },
      {
        path: "tutors-card",
        element: <TutorsInfo />,
        children: [
          { index: true, element: <TutorsCard /> },
          { path: "edit", element: <TutorsForm /> },
        ],
      },
      // { path: "create-new-courese", element: <CreateNewCourse /> },
      {
        path: "tests",
        element: <TutorTests />,
        children: [
          { index: true, element: <ListOfTests />, loader: tutorsTestsLoader },
          {
            path: "edit-test/:testid",
            element: <CreateNewTest />,
            loader: testsLoader,
          },
          {
            path: "create-new-test",
            element: <CreateNewTest />,
          },
        ],
      },
      { path: "schedule", element: <Schedule /> },
    ],
  },
  {
    element: (
      <ProtectedRoute allowedRoles="student">
        <StudentDashboard />
      </ProtectedRoute>
    ),
    path: "/student-cabinet",
  },
  {
    element: (
      <ProtectedRoute allowedRoles="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
    path: "/admin-cabinet",
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<SpinnerFullPage />} />
      </Provider>
    </DarkModeProvider>
  );
}

export default App;
