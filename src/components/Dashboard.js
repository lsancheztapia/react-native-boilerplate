import React, { Component } from 'react';
import { Text, ListView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import ListItem from './ListItem';

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchData('https://jsonplaceholder.typicode.com/posts');
  }

  render() {
    return(
            
      <FlatList
        data={ this.props.items }
        renderItem={
          ({item}) => <Text>{item.title}</Text>
        }
      />
            
    )

  }

}


const mapStateToProps = (state) => {
  return { items : state.dashboard};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);