import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const Card = ({ imageUrl, rating, name, review }) => {
  //console.log(imageUrl);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={styles.title}>{name}</Text>
      <Text>
        {rating} Stars, {review} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  img: {
    borderRadius: 4,
    height: 150,
    width: 250,
    marginBottom: 5,
  },
  review: {
    color: 'grey',
  },
});
export default Card;
