import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  name: string;
};

const DisplayCard = ({name}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/landesape.jpg')}
        style={{height: 140, width: '100%', borderRadius: 16}}
      />
      <View
        style={{
          position: 'absolute',

          height: 140,
          width: '65%',
          paddingHorizontal: 15,
          paddingTop: 16,
        }}>
        <Text style={{fontFamily: 'Satoshi-Bold', height: 70}}>{name}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            width: 120,
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text style={{fontFamily: 'Satoshi-Bold', paddingVertical: 10}}>
            Get Coupon
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 280,
    borderRadius: 16,
    marginRight: 20,
  },
});
export default DisplayCard;
