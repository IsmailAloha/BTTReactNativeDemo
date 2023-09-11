import React from 'react';
import {View, Text, Image} from 'react-native';
import {Surface} from '@react-native-material/core';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

function ProductItem(product: Product): JSX.Element {
  return (
    <Surface
      elevation={2}
      category="small"
      style={{
      }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        padding:8
      }}>
        <Image
          style={{
            width: 90,
            height: 90,
            marginRight: 16,
            borderRadius: 8,
          }}
          source={{
            uri: product.image,
          }}
        />
        <View style={{flexGrow: 1, display: 'flex', gap: 10}}>
          <Text style={{fontWeight: 'bold', color: '#111111', fontSize: 18}}>
            {product.name}
          </Text>
          <Text>${product.price}</Text>
        </View>
      </View>
    </Surface>
  );
}

export default ProductItem;
