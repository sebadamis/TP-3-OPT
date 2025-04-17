import React from 'react'
import "./Productos.css";
import BotonComprar from '../BotonComprar/BotonComprar';

const Productos = ({id, titulo, descripcion, img, descuento, stock, categoria, precioAntes, precioFinal}) => {




    return (
        <>
            

            <div id="card">
                <div className="card">
                    <div className="card-image">
                    <img
                        className="img"
                        src={img}
                        alt={id}
                    />
                    </div>
                    <div className="card-title">
                    <h2>{titulo}</h2>
                    </div>
                    <div className="card-detail">
                        <h3>
                            {" "}
                            in | <span className="date">{categoria}</span>
                        </h3>
                    </div>
                    <div className="card-text">
                        <p>
                        Descripción: {descripcion}
                        </p>
                    </div>
                    <div className="card-stock">
                        <p>
                        Disponibles: {stock}
                        </p>
                    </div>
                    <div className="star-rating">
                    <h2 id="review-text">Review</h2>
                        <div className="star-rating__wrap">
                            <input
                            className="star-rating__input"
                            id="star-rating-5"
                            type="radio"
                            name="rating"
                            defaultValue={5}
                            />
                            <label
                            className="star-rating__ico fa fa-star-o fa-lg"
                            htmlFor="star-rating-5"
                            title="5 out of 5 stars"
                            />
                            <input
                            className="star-rating__input"
                            id="star-rating-4"
                            type="radio"
                            name="rating"
                            defaultValue={4}
                            />
                            <label
                            className="star-rating__ico fa fa-star-o fa-lg"
                            htmlFor="star-rating-4"
                            title="4 out of 5 stars"
                            />
                            <input
                            className="star-rating__input"
                            id="star-rating-3"
                            type="radio"
                            name="rating"
                            defaultValue={3}
                            />
                            <label
                            className="star-rating__ico fa fa-star-o fa-lg"
                            htmlFor="star-rating-3"
                            title="3 out of 5 stars"
                            />
                            <input
                            className="star-rating__input"
                            id="star-rating-2"
                            type="radio"
                            name="rating"
                            defaultValue={2}
                            />
                            <label
                            className="star-rating__ico fa fa-star-o fa-lg"
                            htmlFor="star-rating-2"
                            title="2 out of 5 stars"
                            />
                            <input
                            className="star-rating__input"
                            id="star-rating-1"
                            type="radio"
                            name="rating"
                            defaultValue={1}
                            />
                            <label
                            className="star-rating__ico fa fa-star-o fa-lg"
                            htmlFor="star-rating-1"
                            title="1 out of 5 stars"
                            />
                        </div>
                    </div>
                    <div className="card-product-price">
                    <p id="final-price">
                        Precio: $<span id="final">{precioFinal}</span>
                    </p>
                    <p id="price">
                        Antes: $<span id="number-price">{precioAntes}</span>
                    </p>
                    <p id="desc">
                        <span id="discount">{descuento}</span>
                    </p>
                    </div>
                    <div className="button">
                    <BotonComprar type="button">COMPRAR</BotonComprar>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Productos