import React, {Component, Fragment} from 'react';

class Formulario extends Component {
    state={
        categoria : ''
    }

    cambiarCategoria = e => {
        this.setState({
            categoria : e.target.value
        }, () => { //se pone un callback para ejecutarse despues

            //pasarlo a la app principal para hacer la consulta filtrada
            this.props.consultarProductos(this.state.categoria);
            
        });

    }

    render(){
        return(
          <Fragment>
                <form className="form-inline my-2 my-lg-0 ml-auto">
                    <label className="mx-3">Seleccionar Categoría</label>
                    <select onChange={this.cambiarCategoria} className="form-control">
                        <option value="">Todos</option>
                        <option value="MLA3006">Microfonos</option>
                        <option value="MLA3697">Auriculares</option>
                        <option value="MLA44393">Monitores</option>
                        <option value="MLA91749">Drivers</option>
                    </select>
                </form>
           </Fragment>

        );
    }

}

export default Formulario;