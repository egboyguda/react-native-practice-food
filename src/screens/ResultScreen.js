import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);
  const getResult = async (id) => {
    let res = await yelp.get(`/${id}`);
    setResult(res.data);
  };
  console.log(id);
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View>
      <FlatList
        horizontal={false}
        data={result.photos}
        keyExtractor={(result) => result}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.img}
              source={{
                uri: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 250,
    borderRadius: 4,
    marginBottom: 10,
  },
});
export default ResultScreen;
