// export const GET_ALL_GAMES='GET_ALL_GAMES';
// export const GET_ALL_GENRES='GET_ALL_GENRES';
// export const GET_VIDEOGAMES_BY_NAME= 'GET_VIDEOGAMES_BY_NAME';
// export const GET_PLATFORMS= 'GET_PLATFORMS';
// export const GET_VIDEOGAME_DETAILS='GET_VIDEOGAME_DETAILS';
// export const FILTER_GENRE= 'FILTER_GENRE';
// export const FILTER_PLATFORMS= 'FILTER_PLATFORMS';
// export const ORDER_BY_ALFABETIC='ORDER_BY_ALFABETIC';
// export const ORDER_BY_RATING= 'ORDER_BY_RATING';

// const initialState= {
//     games:[],
//     allGames: [],
//     gameDetail:{},
//     genres:[],
//     platforms: [],
//     };

//function rootReducer(state= initialState, action){
 // switch(action.type){
     //  case GET_ALL_GAMES:
        //   return{
           //   ...state,
          //      games: action.payload,
        //        allGames: action.payload,
        //    };
        //case 
   // }
//}
//export default rootReducer;

// const rootReducer=(state = initialState, action) => {
//     switch (action.type){
//         case GET_ALL_GAMES:
//             return {
//                 ...state,
//                 games: action.payload,
//                 allGames: action.payload,
//             };
        
//         case GET_VIDEOGAMES_BY_NAME:
//             return{
//                 ...state,
//                 videogames: action.payload,
//             };
        
//         case GET_ALL_GENRES:
//             return {
//                 ...state,
//                 genres: action.payload,
//             };
        
//         case GET_PLATFORMS:
//             return{
//                 ...state,
//                 platforms: action.payload,
//             };

//         case GET_VIDEOGAME_DETAILS:
//             return {
//                 ...state,
//                 videogameDetails: action.payload,
//             };

//         case FILTER_PLATFORMS:
//             const gamesPlatforms= state.allGames;
//             const filterGamesPlatforms= gamesPlatforms.filter((el)=>
//             el.platforms.includes(action.payload)
//             );
//             return {
//                 ...state,
//                 games: filterGamesPlatforms,
//             };

//         case FILTER_GENRE:
//             const allGames = state.allGames;
//             const filterGenres = allGames.filter((el) =>
//             el.genres.includes(action.payload)
//             );
//             return {
//                 ...state,
//                 games: filterGenres,
//             };



//             default:
//                 return state;
        
//     }
// }
// export default rootReducer;