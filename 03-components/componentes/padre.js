Vue.component('padre', {
    template: //html
    `
        <div class="p-5 bg-dark text-white">
            <h2>Componente Padre: {{numeroPadre}}</h2>
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
            {{nombrePadre}}
            <button class="btn btn-danger" @click="numeroPadre++"> + </button>
        </div>        
    `,
    data(){
        return {
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})