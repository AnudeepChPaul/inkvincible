export default function({store, route, redirect}) {
    store.dispatch("app/init_app_state").then(() => {
        route.matched.length === 1 &&
            redirect({
                path: store.getters["app/get_default_route"]
            });
    });
}