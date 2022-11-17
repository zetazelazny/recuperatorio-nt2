<template>

  <section>
    <div class="jumbotron">
      <input type="text" :value="textoIngresado" @input="actualizar($event)">
      <br>
      <br>
      <h4> {{valorCodificado}} </h4>
      <br>
      <h4> {{valorMayus}} </h4>
      <br>
      <h4> {{valorMinus}} </h4>
      <br>
      <h4> {{valorMinusMayus}} </h4>
      <br>
      <h4> {{valorMayusMinus}} </h4>
      <br>
      
    </div>
    <p>
      Respuestas:  <br>
      1: C <br>
      2: B <br>
      3: C  <br>
      4: A <br>
      5: B 
    </p>

  </section>

  
</template>

<script>

  export default  {
    name: 'src-componentes',
    mounted () {

    },
    data () {
      return {
        textoIngresado: "",
        valorMayus: "",
        valorMinus: "",
        valorMinusMayus: "",
        valorMayusMinus: "",
        valorCodificado: ""
      }
    },
    methods: {
        actualizar(e) {
            console.log('Actualizar', e.target.value)
            this.textoIngresado = e.target.value
            this.pasarAMayus()
            this.pasarAMinus()
            this.alternarMinusMayus()
            this.alternarMayusMinus()
            this.codificar()
        },
        pasarAMayus() {	
          this.valorMayus = this.textoIngresado.toUpperCase()
          console.log('Pasar a mayusculas', this.valorMayus)
        },
        pasarAMinus() {
          this.valorMinus = this.textoIngresado.toLowerCase()
          console.log('Pasar a minusculas', this.valosMinus)
        },
        alternarMinusMayus() {
          let textoAlternado = ""
          for (let i = 0; i < this.textoIngresado.length; i++) {
            if (i % 2 == 0) {
              textoAlternado += this.textoIngresado[i].toLowerCase()
            } else {
              textoAlternado += this.textoIngresado[i].toUpperCase()
            }
          }
          this.valorMinusMayus = textoAlternado
          console.log('Alternar Minus/Mayus', this.valorMinusMayus)
        },
        alternarMayusMinus() {
          let textoAlternado = ""
          for (let i = 0; i < this.textoIngresado.length; i++) {
            if (i % 2 == 0) {
              textoAlternado += this.textoIngresado[i].toUpperCase()
            } else {
              textoAlternado += this.textoIngresado[i].toLowerCase()
            }
          }
          this.valorMayusMinus = textoAlternado
          console.log('Alternar Mayus/Minus', this.valorMayusMinus)
        },
        codificar() {
          let textoCodificado = ""
          let textoACodificar = this.textoIngresado.toLowerCase()
          for (let i = 0; i < textoACodificar.length; i++) {
            if (i % 2 == 0) {
              switch(textoACodificar[i]) {
                case "a":
                  textoCodificado += "u"
                  break;
                case "e":
                  textoCodificado += "o"
                  break;
                case "o":
                  textoCodificado += "e"
                  break;
                case "u":
                  textoCodificado += "a"
                  break;
                default:
                  textoCodificado += textoACodificar[i]
              }
            } else {
              switch(textoACodificar[i]) {
                case "a":
                  textoCodificado += "u"
                  break;
                case "e":
                  textoCodificado += "o"
                  break;
                case "o":
                  textoCodificado += "e"
                  break;
                case "u":
                  textoCodificado += "a"
                  break;
                default:
                  textoCodificado += textoACodificar[i]
            }
          }
        }
          this.valorCodificado = textoCodificado
          console.log('Codificar', this.valorCodificado)
        }
    },
    computed: {

    }
}


</script>

