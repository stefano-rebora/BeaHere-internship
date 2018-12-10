import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

import DateTimePicker from 'react-native-modal-datetime-picker';

var {width, height} = Dimensions.get('window'); //how to get them from login?

export default class EndTimePicker extends Component {

  state = {
    isDateTimePickerVisible: false,
    currentDate: 'Orario di fine',
  };

  updateDate = (date) => {
    this.setState({currentDate: date.toString().substr(16,5)})
 }
 
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    this.updateDate(date);
    this._hideDateTimePicker();  
  };
 
  render () {
    return (
      <View style={styles.container} onPress={this._showDateTimePicker}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text> {this.state.currentDate} </Text>
        </TouchableOpacity>
        <DateTimePicker
          is24Hour = 'true'
          cancelTextIOS = 'Indietro'
          confirmTextIOS = 'Conferma'
          locale = 'it'
          titleIOS = 'Scegli un orario'
          mode = 'time'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  
    container: {
      justifyContent: 'center',
      marginTop: height * 0.02,
      alignSelf: 'center',
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 40,
      borderWidth: 1,
      width: width * 0.8,
      height: height * 0.08,
    },
  
  }); 