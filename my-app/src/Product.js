function Product(props)
{
    console.log(props);
    return (
        <>
            <div className="product">
                <h3>{props.name}</h3>
                <p>{props.price} Rs</p>
            </div>
        
        
        </>
    )
}

export default Product;