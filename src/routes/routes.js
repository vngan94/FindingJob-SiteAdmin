import Home from "../pages/Home";
import Job from "../pages/Job/";
import Company from "../pages/Company";
import Blog from "../pages/Blog/";
import config from "../config";
import DetailJob from "../pages/DetailJob";
import ErrorPage from "../pages/ErrorPage";
import HomeCompany from "../pages/HomeComany/HomeCompany";
import AddPost from "../pages/post/AddPost";
import PostList from "../pages/post/PostList";
import EditPost from "../pages/post/EditPost";
import Post from "../pages/post/Post";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ApplicationList from "../pages/applicationList/ApplicationList";
import SignUp from "../pages/SignUp";
import HeaderOnly from "../layouts/HeaderOnly";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.company, component: Company },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.error, component: ErrorPage },
    // {path: "/test", component: Test, layout: HeaderOnly}
    { path: config.routes.job, component: Job },
    { path: config.routes.detailJob, component: DetailJob },

    // company
    { path: config.routes.recruitment, component: HomeCompany, layout: null},
    { path: config.routes.login, component: Login, layout: null},
    { path: config.routes.addPost, component: AddPost, layout: null},
    { path: config.routes.posts, component: PostList, layout: null},
    { path: config.routes.editPost, component: AddPost, layout: null},
    { path: config.routes.post, component: Post, layout: null},
    { path: config.routes.applications, component: ApplicationList, layout: null},
    { path: config.routes.register, component: Register, layout: null},
    
    { path: config.routes.signUp, component: SignUp, layout: HeaderOnly },
    { path: config.routes.forgotPassword, component: ForgotPasswordPage, layout: HeaderOnly },
    { path: config.routes.resetPassword, component: ResetPasswordPage, layout: HeaderOnly },
];

// must login
export const privateRoutes = [
    { path: "test", component: () => (<p>test privateRoutes</p>) },
    { path: "setting", component: () => (<p>Setting page</p>) },
];
