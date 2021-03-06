import Dashboard from "../components/Dashboard/Dashboard";
import Main from "../components/Main/Main";
import Auth from "../components/Auth/Auth";

export const publicRouter = [
  {path: '/account' , component: Auth},
  {path: '/', component: Main, exact: true}
]

export const privateRouter = [
  {path: '/dashboard' , component: Dashboard , exact : true}
]
