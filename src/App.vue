<template>
  <div id="app">
    <h1>Ações</h1>
    <div class="flex-container">
      <div v-for="ticker in acoes" :key="ticker.nome">
        <span class="stockTitle">{{ticker.nome}}</span>
        <span class="stockValue">{{ticker.valor}}</span>
      </div>
    </div> 
    <h1>FIIs</h1>
    <div class="flex-container">
      <div v-for="ticker in fiis" :key="ticker.nome">
        <span class="stockTitle">{{ticker.nome}}</span>
        <span class="stockValue">{{ticker.valor}}</span>
      </div>
    </div>  
  </div>
</template>

<script>
import bolsaService from '@/services/bolsaService'
import utils from '@/services/utils'

export default {
  name: 'App',
  methods: {
    getTicker(ticker) {
      const bolsa = new bolsaService()
      return bolsa.obterTicker(ticker, utils.getCurrentDateEN()).then((resultado) => {
        if (typeof resultado == "string"){
          return {nome : "Erro de leitura", valor : resultado}
        }
        else {
          return {nome : resultado.friendlyName, 
          valor : utils.formatMoney(resultado.values[0][2])};
        }
      });
    },
    getTickers(arrayTickers, type){
      Promise.all(
      arrayTickers.map((ticker) =>
        this.getTicker(ticker)
        .then(result => {     
          if (type === 'acoes')     
            this.acoes.push(result);
          else
            this.fiis.push(result);
        })
        .catch(err => {
          console.log(err)
        })
      )).then(() => console.log(this.meusTickers))
    }
  },
  mounted() {
    let arrayAcoes = ["petr4", "itub4", "cmig4", "vale3", "bidi4", "bbdc4", "usim5", "ggbr4", "goau4", "azul4", "cvcb3"];

    let arrayFIIS = ["vilg11", "irdm11", "recr11", "hfof11", "hgpo11", "ggrc11", "alzr11", "xpml11"];
    this.getTickers(arrayAcoes, 'acoes');
    this.getTickers(arrayFIIS, 'fiis');
  },
  data() {
    return {
      acoes : [],
      fiis : [],
      // erroLeitura : false,
      // textoErroLeitura : '',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: #FFF;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  /*background-color: DodgerBlue;*/
}
.flex-container > div {
  background-color: #f1f1f1;
  width: 150px;
  margin: 10px;
  text-align: center;
  border-radius: 15px;
  line-height: 75px;
  font-size: 30px;
}

.stockTitle{
  color :darkgreen;
  display: block;
  font-size: 25px;
}

.stockValue{
  color :maroon;
  display: block;
  font-size: 35px;
}

body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}
</style>
