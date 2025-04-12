import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/Ionicons';
import DisplayCard from '../components/DisplayCard';
import FoodDisplayCard from '../components/FoodDisplayCard';
import Category from '../components/Category';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const [searchText, setSearchText] = useState<string>();
  const Data = [
    {name: 'Order 3 foods and get it discount 30%'},
    {name: 'Order 5 foods and get it discount 50%'},
    {name: 'Order 6 foods and get it discount 60%'},
    {name: 'Order 10 foods and get it discount 80%'},
    {name: 'Order 8 foods and get it discount 70%'},
    {name: 'Order 20 foods and get it discount 100%'},
  ];
  const foodData = [
    {
      id: 1,
      name: 'Margherita Pizza',
      category: 'Italian',
      price: 8.99,
      description:
        'A classic pizza with mozzarella, tomato sauce, and fresh basil.',
    },
    {
      id: 2,
      name: 'Chicken Biryani',
      category: 'Indian',
      price: 10.99,
      description: 'Fragrant rice with spiced chicken, served with yogurt.',
    },
    {
      id: 3,
      name: 'Sushi Platter',
      category: 'Japanese',
      price: 15.99,
      description: 'Assorted sushi rolls with fresh seafood and vegetables.',
    },
    {
      id: 4,
      name: 'Caesar Salad',
      category: 'Salad',
      price: 7.49,
      description: 'Crisp lettuce, Caesar dressing, Parmesan, and croutons.',
    },
    {
      id: 5,
      name: 'Burger',
      category: 'American',
      price: 9.99,
      description:
        'Juicy beef patty with cheese, lettuce, and tomato in a bun.',
    },
    {
      id: 6,
      name: 'Pad Thai',
      category: 'Thai',
      price: 11.99,
      description:
        'Rice noodles stir-fried with shrimp, peanuts, and tamarind sauce.',
    },
    {
      id: 7,
      name: 'Chocolate Cake',
      category: 'Dessert',
      price: 6.99,
      description: 'Rich chocolate sponge with velvety frosting.',
    },
    {
      id: 8,
      name: 'Lasagna',
      category: 'Italian',
      price: 12.99,
      description:
        'Layers of pasta, meat sauce, and melted cheese baked to perfection.',
    },
    {
      id: 9,
      name: 'Falafel Wrap',
      category: 'Middle Eastern',
      price: 8.49,
      description: 'Crispy falafels wrapped with hummus, lettuce, and tomato.',
    },
    {
      id: 10,
      name: 'Tacos',
      category: 'Mexican',
      price: 9.49,
      description:
        'Soft corn tortillas filled with spiced meat, salsa, and cheese.',
    },
    {
      id: 11,
      name: 'Ramen',
      category: 'Japanese',
      price: 13.99,
      description: 'Savory noodle soup with broth, pork, egg, and scallions.',
    },
    {
      id: 12,
      name: 'Greek Salad',
      category: 'Salad',
      price: 6.99,
      description:
        'Tomatoes, cucumbers, olives, and feta with olive oil dressing.',
    },
    {
      id: 13,
      name: 'Fried Chicken',
      category: 'American',
      price: 10.49,
      description: 'Crispy fried chicken with a golden, seasoned crust.',
    },
    {
      id: 14,
      name: 'Pho',
      category: 'Vietnamese',
      price: 12.49,
      description: 'Beef noodle soup with fresh herbs and a flavorful broth.',
    },
    {
      id: 15,
      name: 'Apple Pie',
      category: 'Dessert',
      price: 5.99,
      description: 'Classic pie with tender apple filling and flaky crust.',
    },
    {
      id: 16,
      name: 'Butter Chicken',
      category: 'Indian',
      price: 11.99,
      description: 'Creamy tomato-based curry with tender chicken chunks.',
    },
    {
      id: 17,
      name: 'Spring Rolls',
      category: 'Chinese',
      price: 6.49,
      description:
        'Crispy rolls stuffed with vegetables or meat and served with a dipping sauce.',
    },
    {
      id: 18,
      name: 'BBQ Ribs',
      category: 'American',
      price: 14.99,
      description: 'Slow-cooked ribs glazed with a smoky BBQ sauce.',
    },
    {
      id: 19,
      name: 'Poke Bowl',
      category: 'Hawaiian',
      price: 12.99,
      description: 'Raw fish, rice, and vegetables drizzled with tangy sauces.',
    },
    {
      id: 20,
      name: 'Kimchi Fried Rice',
      category: 'Korean',
      price: 9.99,
      description:
        'Spicy fried rice mixed with kimchi and topped with a fried egg.',
    },
    {
      id: 21,
      name: 'Pasta Carbonara',
      category: 'Italian',
      price: 10.99,
      description: 'Creamy pasta with pancetta, Parmesan, and black pepper.',
    },
    {
      id: 22,
      name: 'Croissant',
      category: 'French',
      price: 3.49,
      description: 'Flaky, buttery pastry perfect for breakfast or snacks.',
    },
    {
      id: 23,
      name: 'Churros',
      category: 'Mexican',
      price: 4.99,
      description:
        'Fried dough dusted with cinnamon sugar, served with chocolate dip.',
    },
    {
      id: 24,
      name: 'Seafood Paella',
      category: 'Spanish',
      price: 16.99,
      description: 'Rice cooked with saffron, shrimp, mussels, and chorizo.',
    },
    {
      id: 25,
      name: 'Shawarma',
      category: 'Middle Eastern',
      price: 8.99,
      description: 'Spiced meat wrapped in flatbread with garlic sauce.',
    },
    {
      id: 26,
      name: 'Miso Soup',
      category: 'Japanese',
      price: 3.99,
      description: 'Light soup with tofu, seaweed, and miso paste.',
    },
    {
      id: 27,
      name: 'Tiramisu',
      category: 'Dessert',
      price: 7.99,
      description:
        'Coffee-flavored Italian dessert with layers of mascarpone and cocoa.',
    },
    {
      id: 28,
      name: 'Dim Sum',
      category: 'Chinese',
      price: 10.49,
      description:
        'Steamed dumplings filled with meat or vegetables, served in bamboo baskets.',
    },
    {
      id: 29,
      name: 'Doner Kebab',
      category: 'Turkish',
      price: 9.49,
      description:
        'Grilled meat shaved from a rotisserie, served in flatbread with toppings.',
    },
    {
      id: 30,
      name: 'Fish and Chips',
      category: 'British',
      price: 11.49,
      description:
        'Crispy battered fish served with golden fries and tartar sauce.',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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

      <View style={{marginBottom: 10}}>
        <FlatList
          data={Data} // Pass the data array
          keyExtractor={(item, index) => index.toString()}
          // Unique key for each item
          renderItem={({item}) => <DisplayCard name={item.name} />}
          style={{
            paddingHorizontal: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
        />
      </View>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Satoshi-Bold',
          marginLeft: 20,
        }}>
        Catogery
      </Text>

      <Category navigation={navigation} />
    </ScrollView>
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
    fontFamily: 'Satoshi-Bold',
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
  row: {
    marginBottom: 20,
  },
});

export default HomeScreen;
