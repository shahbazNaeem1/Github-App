import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import * as navigators from '../constants/navigators';
import AuthScreen from '../screens/AuthScreen';

const Stack = createStackNavigator();

const Navigation = props => {
  const {isLoggedIn} = props;

  authScreens = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={navigators.AUTH_SCREEN}
          component={AuthScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  sessionScreens = () => {
    return <Stack.Navigator></Stack.Navigator>;
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? authScreens() : sessionScreens()}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, null)(Navigation);
