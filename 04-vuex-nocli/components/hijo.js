Vue.component('hijo', {
    template: //html
    `
    <div>
        <button @click="aumentar" class="btn btn-success">+</button>
        <button @click="disminuir(2)" class="btn btn-success">-</button>
        <button @click="obtenerCursos" class="btn btn-success">Obtener cursos</button>
        <h1>Numero: {{numero}}</h1>
        <ul v-for="items of cursos">
            <li>{{items.nombre}}</li>
        </ul>
    </div> 
    `,
    computed: {
        ...Vuex.mapState(['numero', 'cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    },
})