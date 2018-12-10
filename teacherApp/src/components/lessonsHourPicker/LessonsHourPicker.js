import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Text, Picker} from 'native-base';

var {width, height} = Dimensions.get('window'); //how to get them from login?

export default class LessonsHourPicker extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      lessonCode: 'LessonCode1',
      firstLessonCode: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>     
      <Text style={styles.title}>Orario di inizio:</Text>
      <Picker
        headerBackButtonText = 'Indietro'
        iosHeader = ' '
        style={styles.onePicker} 
        itemStyle={styles.onePickerItem}
        selectedValue={this.state.firstLessonCode}
        onValueChange={(itemValue) => this.setState({firstLessonCode: itemValue})}
      >
        <Picker.Item label="09:00" value="09:00" />
        <Picker.Item label="11:00" value="11:00" />
        <Picker.Item label="13:00" value="13:00" />
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