import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      {/* Left Icon */}
      <TouchableOpacity>
        <Icon name="search" size={24} color="gray" />
      </TouchableOpacity>

      {/* TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Search food here..."
        placeholderTextColor="gray"
      />

      {/* Right Icon */}

      <TouchableOpacity
        style={{backgroundColor: '#FF6726', borderRadius: 50, padding: 4}}>
        <Icon name="options-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderWidth: 1,
    marginHorizontal: 20,
    borderColor: '#ccc',
    marginTop: -30,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
});

export default SearchBar;
