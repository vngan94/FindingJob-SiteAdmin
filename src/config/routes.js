const routes = {
    // public
    home: "/",
    job: "/job",
    detailJob: "/job/:_id",
    company: "/company",
    blog: "/blog",
    error: "*",
    // private
    test: "test",

    // company
    recruitment: "/reCompany",
    addPost: "/addPost",
    posts: "/posts",
    editPost: "/editPost/:id",
    post:"/post/:id",
    applications: ":id/applications",
    login: "/recLogin",
    register: "/recRegister",

    

}

export default routes;