import { NearEarthObjectListProps } from './NearEarthObjectDetailsReview.interface';
import React, { FunctionComponent,useState ,useEffect } from 'react';
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
import NearEarthObjectItem from '../../modules/NearEarthObject/components/NearEarthObjectItem';
import { useNearEarthObjectListNavigation } from './NearEarthObjectDetailsReview.hooks';
import { NearEarthObject } from '../../modules/NearEarthObject/types/NearEarthObject.type';

const url = 'http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw'

export const NearEarthObjectListReview : FunctionComponent<NearEarthObjectListProps> = ({ navigation }) => {
    
  const [selectedId, setSelectedId] = useState(null);
  const [listNearEarthObjects, setlistNearEarthObjects] = useState(null);
  const [isLoading, setisLoading] = useState(true);

 
  const localItem = ({item}:any)=> {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return (
      <TouchableOpacity onPress={()=>onPressItemHandler({item})} style={[styles.item, {backgroundColor}]} >
        <NearEarthObjectItem  item={item}/>
      </TouchableOpacity>);
    };

  const onPressItemHandler = ({item} : any) => {
        // navigate to to details of the Item
        console.log(item)
        setSelectedId(item.id);
        const { openPlayNearEarthObjectDetailsScreen } = useNearEarthObjectListNavigation(
          navigation
        );
        
        const NearEarthObject: NearEarthObject = {
          id: item.id,
          neo_reference_id:item.neo_reference_id,
          name:item.name,
          name_limited: item.name_limited,
          designation: item.designation,
          nasa_jpl_url: item.nasa_jpl_url,
          absolute_magnitude_h:item.absolute_magnitude_h,
          is_potentially_hazardous_asteroid:item.is_potentially_hazardous_asteroid,
          is_sentry_object: item.is_sentry_object,
        };
        openPlayNearEarthObjectDetailsScreen(NearEarthObject);

    }

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
            renderItem={localItem}
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
  },
  item: {
    padding: 19,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});