import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

  export default function NearEarthObjectItem({ item, onPress, style}:any) {
    return (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>);
  }

  const styles = StyleSheet.create({
   item: {
      padding: 19,
      marginVertical: 8,
      marginHorizontal: 16,
    }
  });