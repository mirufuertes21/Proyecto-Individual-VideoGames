import { GET_ALL_GAMES, 
   GET_ALL_GENRES,
   GET_PLATFORMS,
   GET_VIDEOGAME_DETAILS,
   GET_VIDEOGAMES_BY_NAME,
   FILTER_GENRE,
   FILTER_PLATFORMS,
   ORDER_BY_ALFABETIC,
   ORDER_BY_RATING } from '..Actions/action';

const initialState= {
   games:[],
   allGames: [],
   gameDetail:{},
   genres:[],
   platforms: [],
   };

// function rootReducer(state= initialState, action){
//    switch(action.type){
//       case GET_ALL_GAMES:
//          return{
//             ...state,
//                games: action.payload,
//                allGames: action.payload,
//             };
//       case 
//    }

const rootReducer=(state = initialState, action) => {
    switch (action.type){
        case GET_ALL_GAMES:
            return {
                ...state,
                games: action.payload,
                allGames: action.payload,
            };
        
        case GET_VIDEOGAMES_BY_NAME:
            return{
                ...state,
                videogames: action.payload,
            };
        
        case GET_ALL_GENRES:
            return {
                ...state,
                genres: action.payload,
            };
        
        case GET_PLATFORMS:
            return{
                ...state,
                platforms: action.payload,
            };

        case GET_VIDEOGAME_DETAILS:
            return {
                ...state,
                videogameDetails: action.payload,
            };

        case FILTER_PLATFORMS:
            const gamesPlatforms= state.allGames;
            const filterGamesPlatforms= gamesPlatforms.filter((el)=>
            el.platforms.includes(action.payload)
            );
            return {
                ...state,
                games: filterGamesPlatforms,
            };

        case FILTER_GENRE:
            const allGames = state.allGames;
            const filterGenres = allGames.filter((el) =>
            el.genres.includes(action.payload)
             );
             return {
                ...state,
                games: filterGenres,
             };



             
         default:    
            return state;     
    }
 };
export default rootReducer;