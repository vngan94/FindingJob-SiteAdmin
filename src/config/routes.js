const routes = {
    // public
    home: "/",
    detailJob: "/job/:_id",
    company: "/company",
    blog: "/blog",
    signUp: "/sign-up",
    forgotPassword: "/forgot-password",
    recruitment: "https://employers.glints.vn/",
    resetPassword: "/reset-password",
    error: "*",
    // private
    job: "/job",
    test: "test",

    // company
    recruitment: "/reCompany",
    addPost: "/addPost",
    posts: "/posts",
    editPost: "/editPost",
    post:"/post/:id",
    applications: "/applications/:id",
    login: "/",
    register: "/recRegister",
    account: "/account",

    

    setting: "setting",
}

export default routes;