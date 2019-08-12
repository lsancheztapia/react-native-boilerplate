//import _ from 'lodash'
import React, { Component } from 'react';
import { FlatList, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { fetchItems  } from '../actions';

class TestListing extends Component {

  componentDidMount() {

    this.props.fetchItems()

  }

  render() {
    return (
      <View>
        <View>
          <Text>Test Listing</Text>
        </View>
        <FlatList
          data = {this.props.items}
          renderItem={ ({item}) => <Text >{item.title}</Text> }
          keyExtractor = { (item, index) => index.toString() }
        />
      </View>
    )
  }

}

const mapStateToProps =  state  => {

  const { items } = state.testItems

  return  { items }
}

export default connect(mapStateToProps, {
  fetchItems
})(TestListing)
