import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ SearchInput, onEnd }) => {
  return (
    <View style={styles.textIn}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        placeholder={'Search'}
        style={styles.inputStyle}
        onChangeText={(val) => {
          SearchInput(val);
        }}
        onEndEditing={onEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    //borderColor: 'black',
    //borderWidth: 1,
    flex: 1,
    fontSize: 18,
  },
  textIn: {
    flexDirection: 'row',
    backgroundColor: '#f0ebeb',
    //borderRadius: 5,
    //borderColor: 'red',
    //borderWidth: 3,
    marginHorizontal: 10,
    marginTop: 10,
    height: 50,
    marginBottom: 5,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
});
export default SearchBar;
