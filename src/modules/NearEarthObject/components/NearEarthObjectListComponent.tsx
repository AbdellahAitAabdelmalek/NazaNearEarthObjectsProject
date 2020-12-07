import React, { FunctionComponent,useState ,useEffect } from 'react';
import axios from 'axios';
import { NearEarthObjectItem } from './NearEarthObjectItem';
import { NearEarthObject } from '../types/NearEarthObject.type';
import LoadingData  from '../../../core/components/LoadingData';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

const url = 'http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw'

interface NearEarthObjectListProps {
    onItemIsPressed: (NearEarthObject: NearEarthObject) => void;
}

export const NearEarthObjectListComponent : FunctionComponent<NearEarthObjectListProps> = ({ onItemIsPressed }) => {
    
  const [selectedId, setSelectedId] = useState<number>(-1);
  const [listNearEarthObjects, setlistNearEarthObjects] = useState<NearEarthObject []>();
  const [isLoading, setisLoading] = useState <boolean>(true);

  React.useEffect(() => {
    axios
    .get(url)
    .then((res : any) =>{
      const myList:NearEarthObject [] = res.data.near_earth_objects.map( function (near_earth_object: NearEarthObject){ 
        return ({
          id: near_earth_object.id,
          neo_reference_id:near_earth_object.neo_reference_id,
          name:near_earth_object.name,
          name_limited: near_earth_object.name_limited,
          designation: near_earth_object.designation,
          nasa_jpl_url: near_earth_object.nasa_jpl_url,
          absolute_magnitude_h:near_earth_object.absolute_magnitude_h,
          is_potentially_hazardous_asteroid:near_earth_object.is_potentially_hazardous_asteroid,
          is_sentry_object: near_earth_object.is_sentry_object,
          });
      })
      setlistNearEarthObjects(myList);
      setisLoading(false);
    })
    .catch((_err : any)=> {
      console.log('erreur !!!!');
    })
  },[]);

  const FlatListCustom = styled.FlatList`
    width: 90%;
    background-color: white;
  `
  return ( 
      <>
        {isLoading === true ?
            <LoadingData/>
            :
            // pour quoi lorsque on utilise FlateList il y a plus de problème de typage
            <FlatListCustom
              data={listNearEarthObjects}
              renderItem=  {({item}:any)=> <NearEarthObjectItem onItemIsPressed = {onItemIsPressed} {...item}/>}
              keyExtractor={(item:any)=> item.id.toString()}
            />
        }
      </>
    );
}