const routes = {
    // public
    home: "/",
    detailJob: "/job/:_id",
    company: "/company",
    blog: "/blog",
    signUp: "/sign-up",
    forgotPassword: "/forgot-password",
    recruitment: "https://employers.glints.vn/",
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
    applications: ":id/applications",
    login: "/recLogin",
    register: "/recRegister",

    

}

export default routes;