import React, {useState, useEffect} from 'react';




const Producto = ({producto}) =>{
    const [fotos, setFotos] = useState([]);

    const urldft = 'https://www.steren.com.co/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/image/177273041/microfono-profesional-para-voz.jpg';
    useEffect(()=>{
        imgProducto({id});
    },[urldft])
    
    const imgProducto = async ({id}) => {
    //cargo la url
    const url = `https://api.mercadolibre.com/items/${id}`;
    //hago un fetch de la noticia
    const respuesta = await fetch (url);
    //retornamos la respuesta en un json (para procesarla)
    const productos = await respuesta.json();
    //console.log(productos.pictures)
    setFotos(productos.pictures[0]);
    
}
    //extraer datos de noticia
    const {id, permalink, title, price, currency_id} = producto;
    //divide el precio en fracciones
    const precioTotal = price.toLocaleString(undefined, {maximumFractionDigits:2});

    return(
        <div className="col-lg-4">
        {/* {console.log(fotos.url)} */}
        <img className="img-fluid rounded-top" src={fotos.url} alt={title} />
        <div className="p-4 rounded-bottom bg-white shadow-sm mb-4">
      
            <h2 className="lead">{title}</h2>
            <h5>{currency_id}$ {precioTotal}</h5>
            <p className="small text-muted float-right"></p>
            <a className="btn btn-danger" href={permalink} target="_blank" rel="noopener noreferrer" >Ver Producto</a>
        </div>
    </div>
    );
}



export default Producto;