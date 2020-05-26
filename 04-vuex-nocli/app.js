const store = new Vuex.Store({
    state: {
        numero: 10,
        cursos:[]
    },
    //cambian caracteristicas del estado
    mutations: {
        aumentar(state){
            state.numero ++
        },
        disminuir(state, n){
            state.numero -= n
        }, 
        llenarCursos(state,cursosAction){
            state.cursos = cursosAction
        }
    },
    actions: {
        obtenerCursos:  async function({ commit }){
            const data = await fetch('cursos.json');
            const cursos = await data.json();
            commit('llenarCursos', cursos);
        }
    }
});

const app = new Vue({
    el: '#app',
    store: store,
    data:{
        titulo: "Hola desde js"
    }
});

