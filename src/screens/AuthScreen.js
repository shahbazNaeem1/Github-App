import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';

import {logIn} from '../actions/authActions';
import {AUTH0_CLIENT} from '../constants/auth0';

const AuthScreen = props => {
  const {logIn} = props;

  authenticate = () => {
    AUTH0_CLIENT.webAuth
      .authorize({scope: 'openid profile email'})
      .then(credentials => logIn(credentials.accessToken))
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Github App</Text>
      <TouchableOpacity onPress={authenticate} style={styles.loginButton}>
        <Text style={styles.loginContent}>Authenticate with Auth0</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapDispatchToProps = {
  logIn,
};

export default connect(null, mapDispatchToProps)(AuthScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignSelf: 'center',
    fontSize: 48,
    fontWeight: '600',
    marginTop: '30%',
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: '30%',
    padding: '5%',
  },
  loginContent: {
    color: 'white',
    fontSize: 22,
  },
});
