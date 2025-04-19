import React from 'react'
import "./ProdDetailCard.css"

const ProdDetailCard = ({id, titulo, descripcion, img, descuento, stock, categoria, precioAntes, precioFinal}) => {

    return (
        <>
        
            <div className="container">
                <div className="product-container main-product-container">
                    <div className="product-left-container">
                        <img
                            src={img}
                            alt={titulo}
                            width={540}
                        />
                    </div>
                    <div className="product-col-container">
                        <p className="product-info-meta">{id}</p>
                        <h1 className="product-page">{titulo}</h1>
                        <p>
                            <b>{categoria}</b>
                            <br />
                            
                        </p>
                        <p className="product-price">
                            <b>Pris:</b>
                            <span className="old-price">{precioAntes}</span>
                            <span className="price">{precioFinal}</span>
                            <span className="product-price-meta" style={{ float: "right" }}>
                            {descuento}
                            </span>
                        </p>
                        <p>
                            <span className="quantity">Antal: [{stock}]</span>
                            <button>Lägg i varukorgen</button>
                            <br clear="both" />
                        </p>
                        <p>[social sharing]</p>
                    </div>
                </div>
                <br clear="all" />
                <div className="product-container">
                    <div className="product-left-container">
                        <h2 className="product-page">{descripcion}</h2>
                        <p className="product-body">
                            Mini høyttaler med meget godt lyd for PC/mobil/smart med innbygd
                            FM-radio. Perfekt at ha med på hytten, tur, i teltet, parken eller bare
                            på uteplassen. Høyttaleren kan brukes sammen med alle enheter som har
                            mini-jack utgang (3,5 mm) så som Smartphone, PC, Nettbrett, etc. X-mini
                            Rave har et innebygd oppladbart batteri med en kapasitet på opptil 6
                            timer når batteriet et fulladet. Høyttaleren lades med den medfølgende
                            USB-kabelen. ?BuddyJack? for sammenkobling av flere høyttalere. X-Mini
                            har tidligere vunnet de prestisjefylte prisene Red Dot Design
                        </p>
                    </div>
                    <div className="product-col-container">Col</div>
                </div>
                <br clear="all" />
            </div>
        
        </>
    )
}

export default ProdDetailCard