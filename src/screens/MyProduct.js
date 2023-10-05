import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addProductToMyCart} from '../newredux/MyCartSlice';
import {useNavigation} from '@react-navigation/native'
import { increaseQty, decreaseQty } from '../newredux/MyProductSlice';
import { removeMyCartItem } from '../newredux/MyCartSlice';
import { deleteMyCartItem } from '../newredux/MyCartSlice';

const MyProduct = () => {
  const myProducts = useSelector(state => state.product);
  const myCartItems = useSelector(state => state.cart);
  console.log('added Products in cart', myCartItems);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0
    myCartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

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
        data={myProducts}
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
                  {item.qty == 0 ? (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 10,
                        height: 26,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                      }}
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                        dispatch(increaseQty(item.id));
                      }}
                      >
                      <Text style={{color: '#fff'}}>Add To Cart</Text>
                    </TouchableOpacity>
                  ) : null}

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
                      }} onPress={() => {
                        dispatch(addProductToMyCart(item));
                        dispatch(increaseQty(item.id));

                      }}
                      >
                      <Text style={{color: '#fff'}}>+</Text>
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
                      }} onPress={() => {
                        if (item.qty > 1) {
                          dispatch(removeMyCartItem(item));
                          dispatch(decreaseQty(item.id))
                        } else {
                          dispatch(deleteMyCartItem(item.id));
                          dispatch(decreaseQty(item.id))
                        }
                      }}
                      >
                      <Text style={{color: '#fff'}}>-</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />

      {
        myCartItems.length > 0 ? (
            <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            height: 100,
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
            {'added Items' + '(' + myCartItems.length + ')'}
          </Text>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '700'}}>
            {'Total:' + getTotal()}
          </Text>
        </View>

        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            height: 100,
            alignItems: 'center',
          }}>
            <TouchableOpacity style={{
                width: '75%',
                height: 35,
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 7
            }} 
            onPress={() => {
                navigation.navigate('MyCart')
            }}
            >
                <Text style={{color: '#fff', fontSize: 18}}>View Cart</Text>

            </TouchableOpacity>
          </View>
      </View>
        ) : null
      }

      
    </View>
  );
};

export default MyProduct;
