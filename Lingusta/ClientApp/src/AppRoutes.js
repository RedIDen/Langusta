import Authentication from "./components/main_pages/Authentication";
import Registration from "./components/main_pages/Registration";
import AdditiontalInfo from "./components/main_pages/AdditionalInfo";
import { Navigate } from "react-router-dom";
import TestPage from "./components/main_pages/TestPage";
import MainPage from "./components/main_pages/MainPage";
import TheoryPage from "./components/main_pages/TheoryPage";

const AppRoutes = [
  {
    index: true,
    element: <Navigate to='/authentication' />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/authentication',
    element: <Authentication />
  },
  {
    path: '/first-login',
    element: <AdditiontalInfo />
  },
  {
    path: '/test/:title',
    element: <TestPage />
  },
  {
    path: '/theory/:title',
    element: <TheoryPage />
  },
  {
    path: '/main',
    element: <MainPage />
  }
];

export default AppRoutes;
