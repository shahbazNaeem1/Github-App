import moment from 'moment';
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const CommitCard = props => {
  const {data} = props;

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={{uri: data.avatarUrl}} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.message}>{data.message}</Text>
          <Text style={styles.date}>
            {moment(data.date).format('MMMM DD, YYYY')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CommitCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: '2%',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  contentContainer: {
    width: '75%',
    marginLeft: '2%',
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
  },
  message: {
    fontSize: 12,
    fontWeight: '400',
  },
  date: {
    alignSelf: 'flex-end',
    fontSize: 10,
    marginRight: '5%',
  },
});
