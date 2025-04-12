import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {};

const DetainScreen: React.FC<{route: any}> = ({route}) => {
  const {name, category, price, description, image} = route.params;
  const [like, setLike] = useState(false);
  const handlePress = () => {
    setLike(!like);
  };
  return (
    <View style={{flex: 1}}>
      <Image
        source={image}
        style={{height: '50%', width: '100%', borderBottomRightRadius: 40}}
      />

      <View style={{paddingHorizontal: 30, paddingTop: 38}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Satoshi-Medium',
                color: '#000',
                marginBottom: 6,
              }}>
              {category} Food
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Satoshi-Bold',
                color: '#FF6726',
              }}>
              {name}
            </Text>
          </View>
          <View style={{marginRight: 40}}>
            <TouchableOpacity onPress={handlePress}>
              <Icon
                name="heart"
                size={40}
                color={like ? '#FF6726' : '#ccc'}
                style={{position: 'absolute'}}
              />

              <Icon
                name="heart-half"
                size={40}
                style={{
                  position: 'absolute',
                }}
                color={'#FF6726'}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            fontFamily: 'Satoshi-Medium',
            color: '#352f2f',
            fontSize: 16,

            marginBottom: 20,

            textAlign: 'left',
            marginRight: 20,
          }}>
          {description}
        </Text>
        <Text
          style={{fontFamily: 'Satoshi-Bold', fontSize: 20, marginBottom: 5}}>
          NRP {price}
        </Text>
        <Text style={{fontFamily: 'Satoshi-Medium', fontSize: 16}}>
          Food Type : {category}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF6726',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            width: 160,
            borderRadius: 8,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Icon name="cart-outline" size={25} color={'#fff'} />
          <Text
            style={{
              fontFamily: 'Satoshi-Bold',
              fontSize: 18,
              color: '#fff',
              marginLeft: 4,
            }}>
            Order Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetainScreen;
