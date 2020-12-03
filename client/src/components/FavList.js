import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteFavorite, addFavorite } from '../actions/api';
import { addFavoriteAction } from '../actions/index';

export class FavoriteContainer extends Component {

  handleFavorite = async (item) => {
    this.props.activeUser ? this.toggleFavorite(item) : this.props.history.push('login')
  }

  toggleFavorite = async (item) => {
    const { favoriteArray, activeUser } = this.props
    const user_id = activeUser.id
    const match = favoriteArray.filter(favItem => favItem.name === item.name)

    movie.user_id = user_id;

    if (match.length > 0) {
      const remaining = favoriteArray.filter(favItem => favItem.name !== item.name)
      deleteFavorite(user_id, item.name ) 
      this.props.sendFavorite(remaining)
    } else {
      addFavorite(movie)
    }
  }

  cardsArray () {
    return this.props.favoriteArray.map(item =>
      <Card
        name={item}
        key={item.id}
        handleFavorite={this.handleFavorite}
      />
    )
  }

  render () {
    return (
      <section className="FavoriteContainer">
        {this.cardsArray()}
      </section>
    )
  }
}

const mapState = (state) => ({
  favoriteArray: state.favoriteArray,
})

const mapDispatch = (dispatch) => ({
  sendFavorite: (favoriteData) => dispatch(addFavoriteAction(favoriteData)),
})

export default withRouter(connect(mapState, mapDispatch)(FavoriteContainer));
