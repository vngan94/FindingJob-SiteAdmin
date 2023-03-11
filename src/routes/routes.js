import Home from "../pages/Home";
import Job from "../pages/Job/";
import Company from "../pages/Company";
import Blog from "../pages/Blog/";
import config from "../config";
import DetailJob from "../pages/DetailJob";

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.company, component: Company },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.error, component: () => (<p>404 Page not found!</p>) },
    // {path: "/test", component: Test, layout: HeaderOnly}
    { path: config.routes.job, component: Job },
    { path: config.routes.detailJob, component: DetailJob },
];

// must login
export const privateRoutes = [
    { path: "test", component: () => (<p>test privateRoutes</p>) },
    { path: "setting", component: () => (<p>Setting page</p>) },
];
