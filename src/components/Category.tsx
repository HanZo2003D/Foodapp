import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {foodData} from '../data/foodData';
import FoodDisplayCard from './FoodDisplayCard';
import {Icon} from 'react-native-vector-icons/Icon';

type Props = {};

const Category = ({navigation}: {navigation: any}) => {
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category

  // Function to filter food items based on category
  const filteredData =
    selectedCategory === 'All'
      ? foodData // Show all items if "All" is selected
      : foodData.filter(item => item.category === selectedCategory);

  const categories = [
    'All',
    'Italian',
    'Indian',
    'Japanese',
    'Salad',
    'American',
    'Thai',
    'Dessert',
    'Middle Eastern',
    'Mexican',
    'Vietnamese',
    'Hawaiian',
    'Korean',
    'French',
    'Spanish',
    'Chinese',
    'Turkish',
    'British',
  ];

  return (
    <View style={styles.container}>
      {/* Category Buttons */}
      <View style={{paddingLeft: 20, marginVertical: 20}}>
        <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === item && styles.selectedCategory, // Highlight selected category
              ]}
              onPress={() => setSelectedCategory(item)} // Update selected category
            >
              <Image
                source={require('../assets/bannerImage.png')}
                style={{height: 16, width: 16}}
              />
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.selectedCategoryText,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <FoodDisplayCard
              name={item.name.split(' ')[0]}
              navigation={navigation}
              category={item.category}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          )}
          numColumns={2} // Displays two items per row
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},

  categoryButton: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginRight: 12,
    alignItems: 'center',
    gap: 4, // Adjust spacing for vertical layout
  },
  selectedCategory: {backgroundColor: '#FF6726'},
  categoryText: {color: '#000', fontSize: 16, fontFamily: 'Satoshi-Regular'},
  selectedCategoryText: {color: '#fff'},
  row: {
    marginBottom: 20,
  },
});

export default Category;
