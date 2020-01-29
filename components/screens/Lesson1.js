import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class Lesson1 extends Component {
  render() {
    return (
      <View>
        <Button
          title="Go to Lesson 2"
          onPress={() => this.props.navigation.navigate('L2')}
        />
      </View>
    );
  }
}
