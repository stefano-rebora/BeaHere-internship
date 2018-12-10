import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Container, Item, Content, Input, Thumbnail, Footer, FooterTab, Button, Icon, Text} from 'native-base';

import LessonsDatePicker from "../lessonsDatePicker/LessonsDatePicker";
import LessonsHourPicker from '../lessonsHourPicker/LessonsHourPicker';

var {width, height} = Dimensions.get('window'); //how to get them from login?

export default class AddPresence extends Component {

  render() {
    return (
      <Container>
        <Content>

        <Thumbnail large source={require('../../../img/attendance-mark.png')} style={[styles.thumbnail]}/>

        <LessonsDatePicker>

        </LessonsDatePicker>

        <LessonsHourPicker>

        </LessonsHourPicker>

        <Item rounded style={styles.textInputName}>
            <Input placeholder='Matricola studente' textAlign='center'/>
          </Item>

        <Button iconLeft rounded light style={styles.addPresenceButton}>
            <Icon type="Entypo" name="add-user" style={{color: 'white'}} />  
            <Text style={{color: 'white'}}>Aggiungi presenza</Text>
        </Button>
        </Content>

        <Footer style={{ backgroundColor: '#F8F8F8' }}>
          <FooterTab style={{ backgroundColor: '#F8F8F8' }}>
            <Button full style={styles.logoutButton} onPress={() => this.props.navigation.navigate('Dashboard')}>             
              <Text style={{ color: '#3189C8', fontSize:18}}>Indietro</Text>
            </Button>
          </FooterTab>
        </Footer>
    
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textInputName: {
    alignSelf: 'center',
    marginTop: height * 0.05,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    width: width * 0.8,
    height: height * 0.08,
  },

  addPresenceButton: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.8,
    height: height * 0.08,
    backgroundColor: '#3189C8',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },

  thumbnail: {
    alignSelf: 'center',
    marginTop: height * 0.15,
  },

}); 