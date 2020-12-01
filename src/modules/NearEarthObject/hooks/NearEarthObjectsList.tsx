/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
import React, {useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';

import axios from 'axios';
import styled from 'styled-components';
import NearEarthObjectItem from '../components/NearEarthObjectItem';
//import {fetchNearEarthObjectList} from './hooks/fetchNearEarthObjectList';

const StyledTouchableOpacity = styled(TouchableOpacity)`
width: 50%;
`;

const url = 'http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw'

export default function NearEarthObjectsList() {
  const [selectedId, setSelectedId] = useState(null);
  const [listNearEarthObjects, setlistNearEarthObjects] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  //const [isLoading2, listNearEarthObjects2] = fetchNearEarthObjectList;

  React.useEffect(() => {
    axios
    .get(url)
    .then((res : any) =>{
        console.log(res.data.near_earth_objects);
        setlistNearEarthObjects(res.data.near_earth_objects)
        setisLoading(false);
    })
    .catch((_err : any)=> {
      console.log('erreur !!!!');
    })
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading === true ?
          <Text >"loading ..."</Text>
       :
          <FlatList
            data={listNearEarthObjects}
            renderItem={({item}) => {return (<NearEarthObjectItem  item={item}/>)}}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
      }
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  }
});