import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';


  export default function NearEarthObjectItem({item}:any) {
    const [selectedId, setSelectedId] = useState(null);
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return (
      <>
          <Text style={styles.item}>{item.name}</Text>
      </>
      );
  }

  const styles = StyleSheet.create({
   item: {
      padding: 19,
      marginVertical: 8,
      marginHorizontal: 16,
    }
  });