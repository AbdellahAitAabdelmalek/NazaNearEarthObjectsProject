// import React, {useState} from 'react';
// import axios from 'axios';


// export const fetchNearEarthObjectList = () => {
//     const [listNearEarthObjects, setlistNearEarthObjects] = useState(null);
//     const [isLoading, setisLoading] = useState(true);
//     const url = 'http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw'
//     React.useEffect(() => {
//         axios
//         .get(url)
//         .then((res : any) =>{
//             console.log(res.data.near_earth_objects);
//             setlistNearEarthObjects(res.data.near_earth_objects)
//             setisLoading(false);
//         })
//         .catch((_err : any)=> {
//           console.log('erreur !!!!');
//         })
//       },[]);
//     return ([isLoading,listNearEarthObjects]);
// };


// // function useLocalStorageState (key: any, defaultValue:any){
// //     const [state, setState] = React.useState( 
// //       () => window.localStorage.getItem(key) || defaultValue
// //       )
  
// //     React.useEffect(()=>{
// //         console.log("useEffect of "+key+" used");
// //         window.localStorage.setItem(key, state)
// //         return ()=> { console.log("cleanup useEffect of "+key); }
// //     }, [state]);

// //     return [state, setState];
// // }