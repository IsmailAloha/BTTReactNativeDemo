import React, { useState, useEffect} from 'react';
import {
    View,
    Text
} from 'react-native';

function ProductsTab(): JSX.Element {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("http://34.31.235.63:8000/btriangle/api/product/").then((response)=> {
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
    }, [])
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Products Tabs</Text>
        </View>
    )
}

export default ProductsTab;