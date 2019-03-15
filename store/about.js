// import { Api } from "@/api/Api";

export const state = () => ({
    imageSrc: ""
    , buttons: []
    , initialized: false
})

export const getters = {
    get_about_image: (state) => (state.imageSrc.concat())
    , get_about_buttons: (state) => (state.buttons.concat())
    , get_first_button: (state) => (state.buttons[0])
    , initialized: (state) => (state.initialized)
}

export const mutations = {
    set_about_image: (state, payload) => {
        state.imageSrc = payload
    }
    , set_about_buttons: (state, payload) => {
        state.buttons = payload.concat();
    }
    , set_init_state: (state) => {
        state.initialized = true;
    }
}

export const actions = {
    init_state: ({
        commit
    }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit("set_init_state")
                commit("set_about_image", "")
                commit("set_about_buttons", [{
                    color: "error"
                    , text: "Contact"
                    , goto: "/about/contact"
                }, {
                    color: "info"
                    , text: "Our Team"
                    , goto: "/about/team"
                }])
                resolve();
            }, 500);
        });
    }
}


export default {
    state
    , getters
    , mutations
    , actions
}