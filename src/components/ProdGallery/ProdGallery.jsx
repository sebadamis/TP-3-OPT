import React, { useEffect, useState } from 'react'
import Productos from '../Productos/Productos'
import { getProducts } from '../../services/prodservices';
import "./ProdGallery.css";





export const ProdGallery = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const getProductsList = async () => {
        setLoading(true)
        
        setTimeout(
            async () => {
                const products_list_response = await getProducts()
                if (products_list_response) {
                    setProductos(products_list_response)
                }
                else {
                    setError('Error al obtener productos')
                }
                setLoading(false)
            },
            1500
        )

    }

    useEffect(
        () => {
            getProductsList()
        },
        []
    )

    const componentes = productos.map(
        (product) => {
    
            return <Productos
                {...product}
                key={product.id}
                
                
            />
        }
    )
    let content
    if (loading) {
        content = <h2>Cargando...</h2>
    }
    else {
        if (error) {
            content = <h2>{error}</h2>
        }
        else {
            content = componentes;
        }
    }


    return (
        <>
            
                <div id='content'>
                

                    {content}

                </div>
        </>
        
    )
}

export default ProdGallery