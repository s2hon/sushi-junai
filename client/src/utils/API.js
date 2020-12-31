import axios from 'axios';


export default {
    // This function is to check if the user is logged in, and to return their info if they are not
    getReviews: () => {
        return axios.get("/api/reviews")
    }
}