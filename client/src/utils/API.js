import axios from 'axios';


export default {
    // This function is to check if the user is logged in, and to return their info if they are not
    checkUserInfo: () => {
        return axios.get("/api/user_data");
    },
    signup: (signupData) => {
        return axios.post("/api/signup", signupData)
    },
    login: (loginData) => {
        return axios.post("/api/login", loginData)
    },
    logout: () => {
        return axios.get("/logout");
    },
    addFavorite: (item) => {
        return axios.post("/api/favorites", item)
    },
    getFavorites: (email) => {
        return axios.get("/api/favorites/"+email);
    },
    // //here we send the email and item that will be deleted
    deleteFavorite: (info) =>{
        return axios.delete("/api/favorites", {data:info})
    },
    getReviews: () => {
        return axios.get("/api/reviews")
    }
}