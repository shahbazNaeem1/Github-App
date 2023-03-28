import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const NavHeader = props => {
  const {navigation, title} = props;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{width: '15%'}}>
          <TouchableOpacity
            style={styles.headerText}
            onPress={() => navigation.pop()}>
            <Text style={styles.backButton}>&#8592;</Text>
          </TouchableOpacity>
        </View>
        {title && (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  backButton: {
    fontSize: 24,
    color: 'black',
  },
  headerText: {
    textAlign: 'right',
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'black',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    fontWeight: '700',
    alignSelf: 'center',
    left: '-7.5%',
    textAlign: 'center',
  },
  titleContainer: {
    width: '85%',
    padding: 10,
  },
});
