import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import {DATA_SCREEN} from '../constants/navigators';

const HomeScreen = props => {
  const [query, setQuery] = useState('');
  const {navigation} = props;

  submit = () => {
    navigation.navigate(DATA_SCREEN, {
      query: query.length > 0 ? query : 'facebook/react-native',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <NavBar />
        <TextInput
          placeholderTextColor="grey"
          placeholder="facebook/react-native"
          keyboardType={'url'}
          value={query}
          onChangeText={data => setQuery(data)}
          style={styles.inputField}
          returnKeyType="next"
          enablesReturnKeyAutomatically={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.submitButton} onPress={submit}>
          <Text style={styles.submitContent}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  inputField: {
    marginTop: '50%',
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '2%',
    paddingVertical: '5%',
  },
  submitButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    alignSelf: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    marginTop: '3%',
  },
  submitContent: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
