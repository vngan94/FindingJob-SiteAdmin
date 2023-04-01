import Home from "../pages/Home";
import JobPage from "../pages/JobPage";
import Company from "../pages/Company";
import BlogPage from "../pages/BlogPage";
import config from "../config";
import DetailJob from "../pages/DetailJob";
import ErrorPage from "../pages/ErrorPage";
import SignUp from "../pages/SignUp";
import HeaderOnly from "../layouts/HeaderOnly";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import SettingPage from "../pages/SettingPage/SettingPage";

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.company, component: Company },
    { path: config.routes.blog, component: BlogPage },
    { path: config.routes.error, component: ErrorPage },
    // {path: "/test", component: Test, layout: HeaderOnly}
    { path: config.routes.job, component: JobPage },
    { path: config.routes.detailJob, component: DetailJob },
    { path: config.routes.signUp, component: SignUp, layout: HeaderOnly },
    { path: config.routes.forgotPassword, component: ForgotPasswordPage, layout: HeaderOnly },
    { path: config.routes.resetPassword, component: ResetPasswordPage, layout: HeaderOnly },
];

// must login
export const privateRoutes = [
    { path: "test", component: () => (<p>test privateRoutes</p>) },
    { path: config.routes.setting, component: SettingPage, layout: HeaderOnly },
];
