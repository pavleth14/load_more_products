const Product = ({item, totalPrice,  setTotalPrice}) => {

    const projectDiv = {
        border: '1px solid',
        width: '25%',
        boxSizing: 'border-box',
        textAlign: 'center'
    }

    const imgStyle = {
        height: '200px'
    }

    const addItemToTheCard = (item) => {        
        setTotalPrice(state => state + item.price)
    }

    const removeItemFromTheCard = (item) => { 
        if(totalPrice <= 0) {
            console.log(123);
            setTotalPrice(state => state = 0);
        } else {
            setTotalPrice(state => state - item.price)
        }       
    }

    return ( 
        <div style={projectDiv}>
            <h1>Brand: {item.brand}</h1>
            <p>Model: {item.title}</p>
            <div>
                <img style={imgStyle} src={item.images[0]} alt="" />
            </div>
            <p>Rating: {item.rating}</p>
            <p>Price: {item.price}</p>
            <div>
                <button onClick={() => addItemToTheCard(item)}>Add Item</button>
            </div>
            <div>
                <button onClick={() => removeItemFromTheCard(item)}>Remove Item</button>
            </div>
        </div>
     );
}
 
export default Product;