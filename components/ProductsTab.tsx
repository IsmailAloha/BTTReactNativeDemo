import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import products from '../assets/products.json';
import ProductItem from './ProductItem';

function ProductsTab(): JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        contentContainerStyle={{padding: 8, paddingRight:16}}
        data={products.products}
        ItemSeparatorComponent={() => <View style={{height: 8}} />}
        renderItem={item => ProductItem(item.item)}
        keyExtractor={item => item.id + ''}
      />
    </View>
  );
}

export default ProductsTab;
