import React from 'react'
import "./ProductDetail.css"
import NavBar from '../../components/NavBar/NavBar'

function ProductDetail() {
    return (
        <>
        
        <NavBar/>

        <div className="container">
            <div className="product-container main-product-container">
                <div className="product-left-container">
                <img
                    src="http://www.lyostore.net/sites/default/files/galeria/x-mini_rave_capsule_speaker_charging_port__tuner.jpg"
                    alt=""
                    width={540}
                />
                {/* image */}
                </div>
                <div className="product-col-container">
                <p className="product-info-meta">Nyförsäljning</p>
                <h1 className="product-page">Högtalare X-mini RAVE</h1>
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
        </div>


        </>
    )
}

export default ProductDetail