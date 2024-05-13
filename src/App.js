import { useEffect, useState } from "react";
import Product from "./components/Product";

const App = () => {

  const outerDiv = {
    border: '1px solid red',
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
    margin: '0 auto'
  }

  const loadMoreItemsButtonStyle = {
    textAlign: 'center'
  }

  const [allData, setAllData] = useState([]);
  const [dataToRender, setDataToRender] = useState(8);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data.products);
        const dataToFirstRender = data.products.slice(0, dataToRender);
        setAllData(dataToFirstRender);
      })
  }, [dataToRender]);

  const handleLoadMoreItems = () => {
    setDataToRender(state => state + 8)
  }

  const removeAllItemsFromCard = () => {
    setTotalPrice(0);
  }

  return (

    <div>

      <div style={{margin: '20px'}}>
        <h2 style={{ textAlign: 'right', margin: '0', marginRight: '40px' }}>Total price: {totalPrice} $</h2>
        <div style={{ textAlign: 'right', marginRight: '40px' }}>
          <button onClick={removeAllItemsFromCard}>Remove All Items</button>
        </div>
      </div>

      <div style={outerDiv}>
        {allData.map((item, index) => (
          <Product
            key={index}
            item={item}
            setTotalPrice={setTotalPrice}
          />
        ))}
      </div>

      <div style={loadMoreItemsButtonStyle}>
        <button onClick={handleLoadMoreItems}>Load More Items</button>
      </div>

    </div>

  );

}

export default App;