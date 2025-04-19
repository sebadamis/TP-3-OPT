import React from 'react'
import "./ProdDetailCard.css"

const ProdDetailCard = ({id, titulo, descripcion, img, descuento, stock, categoria, precioAntes, precioFinal}) => {

    return (
        <>

        <div className="max-container">
            <main>
                <div className="card-detail">
                    <div className="card__title">
                        <h3>Info del Producto</h3>
                    </div>
                    <div className="card__body">
                        <div className="half">
                            <div className="featured_text">
                            <h1>{titulo}</h1>
                            <p className="sub">{categoria}</p>
                            
                            </div>
                            <div className="image">
                            <img
                                src={img}
                                alt={id}
                            />
                            </div>
                        </div>
                        <div className="half">
                            
                            <span className="stock">
                            Stock: {stock}
                            </span>
                            <div className="description">
                                <p>
                                    {descripcion}
                                </p>
                            </div>

                            <div className="recommend">
                            <p>Antes: {precioAntes}</p>
                            <p>Descuento: {descuento}</p>
                            <h3>Precio: {precioFinal}</h3>
                            </div>

                        </div>
                    </div>
                    <div className="card__footer">
                    
                    <div className="action">
                        <button className='cart-btn' type="button">Add to cart</button>
                    </div>
                    </div>
                </div>
            </main>
        </div>


        
        
        </>
    )
}

export default ProdDetailCard