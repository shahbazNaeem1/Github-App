import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {logOut} from '../actions/authActions';

const NavBar = props => {
  const {logOut} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Github App</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={logOut}>
        <Text style={styles.logoutContent}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = {
  logOut,
};

export default connect(null, mapDispatchToProps)(NavBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  header: {
    fontSize: 28,
    fontWeight: '500',
    alignSelf: 'center',
  },
  logoutButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    marginLeft: '25%',
    padding: '2%',
  },
  logoutContent: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
