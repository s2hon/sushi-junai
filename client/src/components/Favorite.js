import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Favorite(props) {

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    useEffect(() => {

        const variable = {
            
        }


        axios.post('/api/favorite/favoriteNumber', variable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.favoriteNumber)
                    setFavoriteNumber(response.data.favoriteNumber)
                } else {
                    alert('Failed to get favoriteNumber')
                }
            })

        axios.post('/api/favorite/favorited', variable)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.favorited)
                } else {
                    alert('Failed to get Favorite Info')
                }
            })

    }, [])


    return (
        <div>
            <button >{Favorited ? " remove from Favortie " : " Add to Favorite"}{FavoriteNumber}</button>

        </div>
    )
}

export default Favorite;