import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Text, Picker} from 'native-base';

var {width, height} = Dimensions.get('window'); //how to get them from login?

export default class BeaconPicker extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      beaconId: 'LessonCode1',
      firstBeaconId: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>     
      <Text style={styles.title}>Seleziona il beacon:</Text>
      <Picker
        style={styles.onePicker} 
        itemStyle={styles.onePickerItem}
        selectedValue={this.state.firstBeaconId}
        onValueChange={(itemValue) => this.setState({firstBeaconId: itemValue})}
        headerBackButtonText = 'Indietro'
        iosHeader = 'Rilevati:'
      >
        <Picker.Item label="Beacon aula 505" value="Beacon aula 505" />
        <Picker.Item label="Beacon aula 506" value="Beacon aula 506" />
        <Picker.Item label="Beacon aula 710" value="Beacon aula 710" />
      </Picker>   
    </View>
    );
  }
}

const styles = StyleSheet.create({
  
    container: {
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: height * 0.02,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      //padding: 20,
      backgroundColor: 'white',
    },
  
    title: {
      fontSize: 16,
      marginBottom: height * 0.01,
    },
  
    onePicker: {
      width: width * 0.8,
      height: height * 0.08,
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 40,
      borderWidth: 1,
      overflow: 'hidden',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    onePickerItem: {
      height: 44,
      color: 'red',
    },
  }); 