import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigator from '../AppNavigator';
import {useDispatch} from 'react-redux';
import {addMyProducts} from '../newredux/MyProductSlice';

let items = [
  {
    id: 0,
    name: 'Nike Max',
    brand: 'SwiftSole',
    price: '1150',
    imageUrl:
      'https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?w=900&t=st=1696329597~exp=1696330197~hmac=f2d11ca7f502903ea8d50f685082f741a307ea20172346955d38a38894275679',
    qty: 0,
  },
  {
    id: 1,
    name: 'Adidas',
    brand: 'TrailBlitz',
    price: '2150',
    imageUrl:
      'https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?w=740&t=st=1696329717~exp=1696330317~hmac=fbbaf1ea19164a6c575d18fec0ed8929ed228846fcac2372f48e55918e2243ae',
    qty: 0,
  },
  {
    id: 2,
    name: 'Puma RS-X',
    brand: 'UrbanStride',
    price: '2210',
    imageUrl:
      'https://img.freepik.com/premium-photo/gray-sneakers-with-red-laces-white-background_39665-9.jpg?w=900',
    qty: 0,
  },
  {
    id: 3,
    name: 'Reebok Classic',
    brand: 'LuxeFeet',
    price: '2500',
    imageUrl:
      'https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg?w=900&t=st=1696330038~exp=1696330638~hmac=41d6c6e5bbfe7c7f425221200fe1abbfeffed48aa7e9be8ecc48867fb0767ca4',
    qty: 0,
  },
];

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    items.map(item => {
      dispatch(addMyProducts(item));
    });
  }, []);
  return <AppNavigator />;
};

export default MainContainer;
