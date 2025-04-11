import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, FlatList} from 'react-native';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/Ionicons';
import DisplayCard from '../components/DisplayCard';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>();
  const Data = [
    {name: 'Order 3 foods and get it discount 30%'},
    {name: 'Order 5 foods and get it discount 50%'},
    {name: 'Order 6 foods and get it discount 60%'},
    {name: 'Order 10 foods and get it discount 80%'},
    {name: 'Order 8 foods and get it discount 70%'},
    {name: 'Order 20 foods and get it discount 100%'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={{flex: 1, marginLeft: 20, paddingTop: 20}}>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Icon name={'location-sharp'} size={20} color={'#FF6726'} />
            <Text style={{marginBottom: 36}}>City, Provinve</Text>
          </View>
          <Text style={styles.bannerText}>What do you</Text>
          <Text style={styles.bannerText}>Wanna eat Today?</Text>
        </View>
        <Image
          source={require('../assets/bannerImage.png')}
          style={styles.bannerImage}
        />
      </View>
      <SearchBar />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 20,
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Satoshi-Bold',
          }}>
          Promotions
        </Text>
        <Text
          style={{
            fontFamily: 'Satoshi-Regular',
            color: '#FF6726',
            fontSize: 14,
          }}>
          See all
        </Text>
      </View>

      <FlatList
        data={Data} // Pass the data array
        keyExtractor={(item, index) => index.toString()}
        // Unique key for each item
        renderItem={({item}) => <DisplayCard name={item.name} />}
        style={{marginBottom: 10, paddingHorizontal: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  banner: {
    height: 220,
    backgroundColor: '#e1f6fa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  bannerImage: {
    height: 200,
    width: 180,
    resizeMode: 'contain',
  },
  bannerText: {
    fontSize: 22,
    fontFamily: 'Satoshi-Regular',
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 50,
  },
  search: {
    borderWidth: 6,
    borderColor: '#000',
    borderRadius: 50,
    height: 50,
    margin: 20,
  },
  list: {
    paddingHorizontal: 20,

    width: '100%',
  },
});

export default HomeScreen;
