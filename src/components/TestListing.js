//import _ from 'lodash'
import React, { Component } from 'react';
import { ListView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { fetchItems  } from '../actions';

class TestListing extends Component {

  componentWillMount() {

    this.props.fetchItems()

    this.createDataSource(this.props);

  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource( {items} ) {

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(items);
  }

  renderRow(item) {
    return <Text>{item.title}</Text>
  }

  render() {
    return (
      <View>
        <View>
          <Text>Test Listing</Text>
        </View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
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
