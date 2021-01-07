
import React, { useEffect, useState } from 'react';
import Container from './Container';
import YelpCard from './YelpCard';
import API from '../utils/API';

function Yelp(props) {
    const [reviews, setReviews] = useState([]);
    const getReviews = () => {
        // make api call, set reviews in state
        API.getReviews()
        .then((res) => {
            console.log(res.data)
            setReviews(res.data.reviews);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getReviews();
    }, []);

    return(
    //     <Container>
    //         <hr />
    //         <h3 className="section-head">Reviews from Yelp</h3> 
    //         {
    //         reviews.map((data) => {
    //         return (
    //         <YelpCard image={data.user.image_url}
    //         name={data.user.name}
    //         stars={data.rating}
    //         text={data.text}
    //         />)
    //     })
    // } 
    //     </Container>
    )
}

export default Yelp;