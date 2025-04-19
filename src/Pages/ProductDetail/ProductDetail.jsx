import React, { useEffect, useState } from 'react'
import "./ProductDetail.css"
import { useParams } from 'react-router'
import { getProdById } from '../../services/prodservices';
import ProdDetailCard from '../../components/ProdDetailCard/ProdDetailCard';


function ProductDetail() {
    const {prod_id} = useParams();
    console.log(prod_id);

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    

    const getProductDetail = async () => {
            setLoading(true)
            
            setTimeout(
                async () => {
                    const products_detail_response = await getProdById({prod_id})
                    if (products_detail_response) {
                        setProduct(products_detail_response)
                    }
                    else {
                        setError('Error al buscar el producto')
                    }
                    setLoading(false)
                },
                1500
            )
    
    }

    useEffect(
        () => {
            getProductDetail()
        }, []
    )

    let content
    if (loading) {
        content = <h1>Cargando...</h1>
    }
    else {
        if (error) {
            content = <h1>{error}</h1>
        }
        else {
            content = <ProdDetailCard {...product}/>
        }
    }

    return (      
        <>
        
            {content}
            {/* <div className="container">
                <div className="product-container main-product-container">
                    <div className="product-left-container">
                        <img
                            src="http://www.lyostore.net/sites/default/files/galeria/x-mini_rave_capsule_speaker_charging_port__tuner.jpg"
                            alt=""
                            width={540}
                        />
                    </div>
                    <div className="product-col-container">
                        <p className="product-info-meta">{content}</p>
                        <h1 className="product-page">{content}</h1>
                        <p>
                            <b>Quick overview</b>
                            <br />
                            Minihögtalare med mycket bra ljud för PC/smart phone och inbyggd radio.
                            Perfekt att ha med på semestern, i parken eller på uteplatsen en varm
                            sommarkväll.
                        </p>
                        <p className="product-price">
                            <b>Pris:</b>
                            <span className="old-price">499 kr</span>
                            <span className="price">399 kr</span>
                            <span className="product-price-meta" style={{ float: "right" }}>
                            Finns i lager.
                            </span>
                        </p>
                        <p>
                            <span className="quantity">Antal: [quantity select]</span>
                            <button>Lägg i varukorgen</button>
                            <br clear="both" />
                        </p>
                        <p>[social sharing]</p>
                    </div>
                </div>
                <br clear="all" />
                <div className="product-container">
                    <div className="product-left-container">
                        <h2 className="product-page">Detaljer</h2>
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
            </div> */}

        </>
    )
}

export default ProductDetail