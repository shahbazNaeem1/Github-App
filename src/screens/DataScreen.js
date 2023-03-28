import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getRepoCommits} from '../api/githubAPI';
import CommitCard from '../components/CommitCard';
import NavHeader from '../components/NavHeader';
import {formatResponse} from '../helpers/responseFormatter';

const DataScreen = props => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [commits, setCommits] = useState([]);
  const [listEnd, setListEnd] = useState(false);

  const {
    navigation,
    route: {params},
  } = props;

  useEffect(() => {
    getCommitsData();
  }, []);

  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) =>
    layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;

  getCommitsData = async () => {
    setLoading(true);

    await (params && params.query
      ? getRepoCommits(params.query, page)
          .then(response => {
            if (response.data.length > 0) {
              setPage(page + 1);
              setCommits([...commits, ...formatResponse(response.data)]);
            } else {
              setListEnd(true);
            }
          })
          .catch(() => {
            alert('Invalid Repo Link...!!!');
            navigation.pop();
          })
      : null);

    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavHeader navigation={navigation} title={'Commits'} />
      <ScrollView
        style={styles.scrollContainer}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent) && !loading && !listEnd) {
            getCommitsData();
          }
        }}
        scrollEventThrottle={1000}>
        {commits.length === 0 ? (
          <Text style={styles.PrimaryText}>No Commits in this Repo</Text>
        ) : (
          <View>
            {commits.map((item, index) => (
              <CommitCard data={item} key={index} />
            ))}
          </View>
        )}
        {loading ? (
          <Spinner
            visible={loading}
            textContent={'Processing...'}
            textStyle={{color: '#FFF'}}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  scrollContainer: {
    height: '90%',
  },
  PrimaryText: {
    color: 'black',
    textAlign: 'center',
    marginTop: '50%',
    fontSize: 24,
    fontWeight: '700',
  },
  loader: {
    margin: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
