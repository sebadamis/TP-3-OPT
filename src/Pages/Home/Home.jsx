import React from 'react';
import NavBar from "../../components/NavBar/NavBar.jsx";
import ProdGallery from '../../components/ProdGallery/ProdGallery';






function Home() {
    return (
        <>

            <NavBar/>

            <h1>lista de productos</h1>

            <ProdGallery/>

        </>
    )
}

export default Home