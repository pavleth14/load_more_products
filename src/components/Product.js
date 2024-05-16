import React from "react";

const Product = ({ item, setAllItems, setTotalPrice }) => {
    const projectDiv = {
        border: '1px solid',
        width: '25%',
        boxSizing: 'border-box',
        textAlign: 'center'
    };

    const imgStyle = {
        height: '200px'
    };

    const addItemToTheCard = (itemToAdd) => {
        setAllItems((state) => {
            const index = state.findIndex((existingItem) => {
                return Array.isArray(existingItem) ? existingItem[0] === itemToAdd : existingItem === itemToAdd;
            });
            if (index !== -1) {
                const newArray = [...state];
                newArray[index] = Array.isArray(newArray[index]) ? [...newArray[index], itemToAdd] : [newArray[index], itemToAdd];
                setTotalPrice(calculateTotalPrice(newArray));
                return newArray;
            } else {
                const newState = [...state, [itemToAdd]];
                setTotalPrice(calculateTotalPrice(newState));
                return newState;
            }
        });
    };

    const removeItemFromTheCard = (itemToRemove) => {
        setAllItems((state) => {
            const updatedState = state.map((item) => {
                if (Array.isArray(item)) {
                    const updatedArray = item.filter((existingItem) => existingItem !== itemToRemove);
                    return updatedArray.length === 0 ? null : updatedArray;
                }
                return item !== itemToRemove ? item : null;
            }).filter(Boolean);

            setTotalPrice(calculateTotalPrice(updatedState));
            return updatedState;
        });
    };

    const calculateTotalPrice = (items) => {
        return items.reduce((total, itemOrArray) => {
            if (Array.isArray(itemOrArray)) {
                return total + itemOrArray.reduce((subTotal, item) => subTotal + item.price, 0);
            }
            return total + itemOrArray.price;
        }, 0);
    };

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
};

export default Product;
