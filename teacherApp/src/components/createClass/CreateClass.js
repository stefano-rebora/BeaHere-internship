import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { Container, Content, Thumbnail, Footer, FooterTab, Button, Text, Textarea} from 'native-base';

import ChosenDatePicker from "../chosenDataPicker/ChosenDataPicker";
import StartTimePicker from "../startTimePicker/StartTimePicker";
import EndTimePicker from "../endTimePicker/EndTimePicker";

var {width, height} = Dimensions.get('window'); //how to get them from login?

export default class CreateClass extends Component {

  render() {
    return (
      <Container>
        <Content>

        <Thumbnail large source={require('../../../img/lesson.png')} style={[styles.thumbnail]}/>

        <ChosenDatePicker>
        </ChosenDatePicker>

        <StartTimePicker>
        </StartTimePicker>

        <EndTimePicker>
        </EndTimePicker>

        <Text style={styles.text}>Aggiungi eventuali note alla lezione:</Text>

        <Textarea style={styles.textArea} textAlign='center' textAlignVertical= 'center' placeholder="Textarea" />
        
        <Button rounded light style={styles.createClassButton}>
            <Text style={{color: 'white'}}>Genera codice lezione</Text>
        </Button> 
        </Content>
        <Footer style={{ backgroundColor: '#F8F8F8' }}>
          <FooterTab style={{ backgroundColor: '#F8F8F8' }}>
            <Button full style={styles.logoutButton} onPress={() => this.props.navigation.navigate('DetectBeacons')}>             
              <Text style={{ color: '#3189C8', fontSize:18}}>Indietro</Text>
            </Button>
          </FooterTab>
        </Footer>
    
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  createClassButton: {
    marginTop: height * 0.02,
    alignSelf: 'center',
    width: width * 0.8,
    height: height * 0.08,
    backgroundColor: '#3189C8',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },

  text: { 
    alignSelf: 'center',
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,},

  textArea: {
    borderRadius: 30,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    height: height * 0.08,
    borderWidth: 1,
    textAlignVertical: 'center',
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
  },

  thumbnail: {
    alignSelf: 'center',
    marginTop: height * 0.15,
  },

}); 