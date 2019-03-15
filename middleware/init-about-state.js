export default ({store, route, redirect}) => {
    if(store.getters["about/initialized"]) {
        return route.name === "index-about" &&
            redirect({
                path: store.getters["about/get_first_button"].goto
            });
    }
    store.dispatch("about/init_state").then(() => {
        route.name === "index-about" &&
            redirect({
                path: store.getters["about/get_first_button"].goto
            });
    });
}