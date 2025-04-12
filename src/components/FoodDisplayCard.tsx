import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  id?: number;
  name: string;
  navigation: any;
  description?: string;
  price?: number;
  rating?: number;
  category?: string;
  image?: any;
};

const FoodDisplayCard = ({
  name,
  navigation,
  description,
  price,
  category,
  id,
  image,
}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            name,
            id,
            description,
            price,
            category,
            image,
          })
        }>
        <Image
          source={image}
          style={{
            height: 210,
            width: '100%',
            borderRadius: 10,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 35,
            left: 10,
            flexDirection: 'row',

            width: 147,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{color: 'white', fontFamily: 'Satoshi-Bold', fontSize: 18}}>
            {name}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Icon name="star" size={14} color={'#FF6726'} />
            <Text
              style={{
                color: 'white',
                fontFamily: 'Satoshi-Bold',
                fontSize: 14,
              }}>
              4.5
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 15,
            left: 10,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
          }}>
          <Icon name="location" size={16} color={'#FF6726'} />
          <Text
            style={{
              color: 'white',
              fontFamily: 'Satoshi-Bold',
              fontSize: 14,
            }}>
            Resturant name
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 210,
    width: 167,
    marginRight: 20,
    borderRadius: 10,
  },
});

export default FoodDisplayCard;
