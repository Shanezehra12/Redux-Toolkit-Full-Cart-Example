import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  addProductToMyCart,
  deleteMyCartItem,
  removeMyCartItem,
} from './MyCartSlice';
import { decreaseQty, increaseQty } from './MyProductSlice';

const MyCart = () => {
  const myCartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 20,
          backgroundColor: '#fff',
          elevation: 1,
        }}>
        <Text style={{fontSize: 22, fontWeight: '700', color: '#000'}}>
          Redux ToolKit
        </Text>
      </View>

      <FlatList
        data={myCartItems}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 120,
                alignSelf: 'center',
                backgroundColor: '#fff',
                marginTop: 10,
                borderRadius: 10,
                elevation: 2,
                flexDirection: 'row',
                paddingLeft: 10,
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.imageUrl}}
                style={{width: 120, height: 90, borderRadius: 10}}
              />
              <View>
                <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 18, fontWeight: '700', color: 'gray'}}>
                  {item.brand}
                </Text>
                <Text style={{fontSize: 18, fontWeight: '700', color: 'green'}}>
                  ₹{item.price}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 10,
                        height: 26,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        marginLeft: 10,
                      }}
                      onPress={() => {
                        if (item.qty > 1) {
                          dispatch(removeMyCartItem(item));
                          dispatch(decreaseQty(item.id))
                        } else {
                          dispatch(deleteMyCartItem(item.id));
                          dispatch(decreaseQty(item.id))
                        }
                      }}>
                      <Text style={{color: '#fff'}}>-</Text>
                    </TouchableOpacity>
                  )}

                  {item.qty == 0 ? null : (
                    <Text style={{color: '#000', fontSize: 20, marginLeft: 10}}>
                      {item.qty}
                    </Text>
                  )}

                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 10,
                        height: 26,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        marginLeft: 10,
                      }}
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                        dispatch(increaseQty(item.id));

                      }}>
                      <Text style={{color: '#fff'}}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyCart;
