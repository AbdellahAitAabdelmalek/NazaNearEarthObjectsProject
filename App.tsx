import React, { useState, useEffect } from 'react';
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text,View, TouchableOpacity} from 'react-native';
import axios from 'axios';

const Item = ({ item, onPress, style}:any) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [listNearEarthObjects, setlistNearEarthObjects] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const url="http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw"

  React.useEffect(() => {
    axios
    .get(url)
    .then((res : any) =>{
        console.log(res.data.near_earth_objects);
        setlistNearEarthObjects(res.data.near_earth_objects)
        setisLoading(false);
    })
    .catch((err : any)=> {
      console.log("erreur !!!!");
    })  
  },[]);
  
  
  const renderItem = ({ item }:any) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
  };

  return (
    <View style={styles.container}>
      {isLoading == true ? 
      <Text >"loading ..."</Text>
       : 
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listNearEarthObjects}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    }
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
