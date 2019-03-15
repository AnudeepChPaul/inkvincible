// import { Api } from "@/api/Api";

export const state = () => ({
    appTitle: "<Title goes here>"
    , appSubtitle: "<subtitle goes here>"
    , defaultRoute: ""
})

export const getters = {
    get_title: (state) => (state.appTitle.concat())
    , get_subtitle: (state) => (state.appSubtitle.concat())
    , get_default_route: (state) => (state.defaultRoute.concat())
}

export const mutations = {
    set_title: (state, payload) => {
        state.appTitle = payload
    }
    , set_subtitle: (state, payload) => {
        state.appSubtitle = payload
    }
    , set_default_route: (state, payload) => {
        state.defaultRoute = payload
    }
}

export const actions = {
    init_app_state: ({ commit }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit("set_title", "Ink'Vincible")
                commit("set_subtitle", "It's Art")
                commit("set_default_route", "/home")
                resolve();
            }, 1000);
        });
    }
}


// export default {
//     state,
//     getters,
//     mutations,
//     actions
// }