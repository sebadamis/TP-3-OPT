export const getProducts = async () =>{
    try{
        const response = await fetch(
            'http://localhost:5173/productos.json',
            {
                method: 'GET'
            }
        )
        const data = await response.json()
        return data
    }
    catch(error){
        console.error('Error al obtener productos:', error)
        return null
    }
}