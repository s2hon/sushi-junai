import React, { useEffect, useState } from 'react';
import Container from './Container';
import API from '../utils/API';

function Yelp(props) {
    const [reviews, setReviews] = useState([]);
    const getReviews = () => {
        // make api call, set reviews in state
        API.getReviews()
        .then((res) => {
            setReviews(res.data.reviews);
            console.log(res.data.reviews);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getReviews();
    }, []);

    return(
        <Container>

        </Container>
    )
}

export default Yelp;