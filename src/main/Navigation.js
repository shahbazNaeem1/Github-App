import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import * as navigators from '../constants/navigators';
import * as screens from '../screens';

const Stack = createStackNavigator();

const Navigation = props => {
  const {isLoggedIn} = props;

  authScreens = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={navigators.AUTH_SCREEN}
          component={screens.AuthScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  sessionScreens = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={navigators.HOME_SCREEN}
          component={screens.HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigators.DATA_SCREEN}
          component={screens.DataScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? sessionScreens() : authScreens()}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, null)(Navigation);
