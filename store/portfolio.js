// import { Api } from "@/api/Api";

export const state = () => ({
    items: []
    , interval: 5000
    , actions: []
})

export const getters = {
    get_portfolios: (state) => (state.items.concat())
    , get_each_slide_interval: (state) => (state.interval)
    , get_item_actions: (state) => (state.actions)
}

export const mutations = {
    add_portfolio: (state, payload) => {
        state.items.push(payload);
    }
    , set_portfolio: (state, payload) => {
        state.items = payload.concat();
    }
    , set_item_actions: (state, payload) => {
        state.actions = payload.concat();
    }
}

export const actions = {
    init_state: ({ commit }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit("set_portfolio", [{
                    src: "https://cdn.pixabay.com/photo/2017/05/09/21/49/gecko-2299365_1280.jpg"
                }, {
                    src: "https://resize.indiatvnews.com/en/centered/newbucket/715_431/2018/03/h6-1521531233.jpg"
                }, {
                    src: "http://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg"
                }])

                commit("set_item_actions", [{
                    color: "error"
                    , icon: "favorite"
                    , role: "favorite"
                }, {
                    color: "success"
                    , icon: "share"
                    , role: "share"
                }])

                resolve();
            }, 1000);
        });
    }
}


export default {
    state
    , getters
    , mutations
    , actions
}