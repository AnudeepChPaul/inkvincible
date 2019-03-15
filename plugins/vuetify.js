import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import LRU from 'lru-cache'

const themeCache = new LRU({
    max: 0
    , maxAge: 1000 * 60 * 60 // 1 hour
})

Vue.use(Vuetify, {
    theme: {
        primary: colors.blueGrey.darken4
        , secondary: colors.blueGrey.lighten5
        , accent: colors.blueGrey.lighten4
        , error: colors.pink.accent4
        , success: colors.teal.accent4
        , info: colors.blue.accent4
        , warning: colors.amber.accent4
    }
    , iconfont: 'md'
    , options: {
        customProperties: true
        , themeCache
    }
})