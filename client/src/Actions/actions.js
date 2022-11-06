// import axios from 'axios';
// //const { API_URL, API_KEY } = process.env
// export const GET_ALL_GAMES='GET_ALL_GAMES';
// export const GET_ALL_GENRES='GET_ALL_GENRES';
// export const GET_VIDEOGAMES_BY_NAME= 'GET_VIDEOGAMES_BY_NAME';
// export const GET_PLATFORMS= 'GET_PLATFORMS';
// export const GET_VIDEOGAME_DETAILS='GET_VIDEOGAME_DETAILS';
// export const FILTER_GENRE= 'FILTER_GENRE';
// export const FILTER_PLATFORMS= 'FILTER_PLATFORMS';
// export const ORDER_BY_ALFABETIC='ORDER_BY_ALFABETIC';
// export const ORDER_BY_RATING= 'ORDER_BY_RATING';

// //export function getAllGames(){
//   //  return async function(dispatch){
//    //     var json= await axios.get ('/games');
//      //   return dispatch({
//       //      type: GET_ALL_GAMES,
//         //    payload: json.data
//        // })
//     //}
// //}
// //
// export const getAllGames= () =>{
//     return async function (dispatch){
//         try{
//             let response= await axios.get('http://localhost:3001/videogames');
//             return dispatch({
//                 type: GET_ALL_GAMES,
//                 payload:response.data,
//             });
//         }catch (error){}
//     };
// };

// export const getGamesByName= (search) => {
//     return async function (dispatch){
//         try{
//             let response= await axios.get(`http://localhost:3001/videogames?name=${search}`);
//             return dispatch({
//                 type: GET_VIDEOGAMES_BY_NAME,
//                 payload: response.data,
//             });
//         }catch (error){}
//     };
// };

// export const getAllGenres= () => {
//     return async function (dispatch){
//         try{
//             let response= await axios.get('http://localhost:3001/genres');
//             return dispatch({
//                 type: GET_ALL_GENRES,
//                 payload: response.data,
//             });
//         }catch (error){}
//     };
// };

// export const getPlatforms = () => {
//     return async function (dispatch){
//         try{
//             let response= await axios.get('http://localhost:3001/platforms');
//             return dispatch({
//                 type: GET_PLATFORMS,
//                 payload: response.data,
//             });
//         }catch (error){}
//     };
// };

// export const getVideogameDetail= (id) => {
//     return async (dispatch)=> {
//         try {
//             const response= await axios.get(`http://localhost:3001/videogame/${id}`);
//             return dispatch({ 
//                 type: GET_VIDEOGAME_DETAILS,
//                 payload: response.data
//             });
//         }catch (error){}
//     };
// };

// export const filterByGenre= (payload) => {
//     return {
//         type: FILTER_GENRE,
//         payload,
//     };
// };

// export const filterByPLatforms= (payload) => {
//     return {
//         type: FILTER_PLATFORMS,
//         payload,
//     };
// };

// export const orderByAlfabetic= (payload) => {
//     return {
//         type: ORDER_BY_ALFABETIC,
//         payload,
//     };
// };

// export const orderByRating= (payload) => {
//     return {
//         type: ORDER_BY_RATING,
//         payload,
//     };
// };

















