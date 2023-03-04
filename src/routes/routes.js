import Home from "../pages/Home";
import Job from "../pages/Job/";
import Company from "../pages/Company/Company";
import Blog from "../pages/Blog/Blog";
import config from "../config";

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.job, component: Job },
    {path: config.routes.company, component: Company},
    {path: config.routes.blog, component: Blog}
    // {path: "/test", component: Test, layout: HeaderOnly}
]

// must login
export const privateRoutes = [

]
