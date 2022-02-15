import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
//import ResultScreen from '../ResultScreen';
import Card from './card';
import { withNavigation } from 'react-navigation';
const ResultsList = ({ title, results, navigation }) => {
  console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.FlatList}
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Result', { id: item.id })}
            >
              {item.imageUrl != '' ? (
                <Card
                  name={item.name}
                  rating={item.rating}
                  imageUrl={item.image_url}
                  review={item.review_count}
                />
              ) : null}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 10,
  },
  container: {
    marginBottom: 20,
  },
});
export default withNavigation(ResultsList);
