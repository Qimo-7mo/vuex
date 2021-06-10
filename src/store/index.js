import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:0,
    },
    getters:{
        count(state){
            return state.count;
        }
    },
    mutations:{
        addOne(state){
            state.count += 1;
        },
        subOne(state){
            state.count -= 1;
        }
    },
    actions:{
        jiayi(context){
            setTimeout(() => {
                context.commit("subOne");
            }, 1000);
        }
    }

})