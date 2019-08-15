import React, {Component, Fragment} from 'react';
//import Header from './componentes/Header';
import ListaProductos from './componentes/ListaProductos';
import Header from './componentes/Header';



class App extends Component {
  state = {
    //creo el objeto para cargar el fetch
    results: [],
  }

  //cargo los metodos de carga de datos
  componentDidMount(){
    this.consultarProductos();
    
  }

  //llamar a la api en un metodo propio
  consultarProductos = async (categoria = '') => {
    //cargo la url
    const url = `https://api.mercadolibre.com/sites/MLA/search?nickname=eqstore&category=${categoria}`;
    //hago un fetch de la noticia
    const respuesta = await fetch (url);
    //retornamos la respuesta en un json (para procesarla)
    const productos = await respuesta.json();
    
    //envio la respuesta al state noticias
    this.setState({
      //llamo solo a los articulos, por que no uso el resto de la API (response y demas)
      results : productos.results
    })

  }


  render(){
    return(
      <Fragment>
        <Header 
          titulo='ML Equaphon'
          consultarProductos={this.consultarProductos}
        />
        <div className="container m-main">
          <h1 className="text-white text-center mb-5">Productos de Equaphon</h1>
          <ListaProductos
              productos={this.state.results}
          />
        </div>
      </Fragment>
      
    );
  }
}

export default App;
