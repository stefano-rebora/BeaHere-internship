import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Container, Content, Thumbnail, Footer, FooterTab, Button, Text} from 'native-base';

import BeaconPicker from '../beaconPicker/BeaconPicker';

var {width, height} = Dimensions.get('window'); //how to get them from login?


export default class DetectBeacons extends Component {
  render() {
    return (
    <Container>
    <Content>

        <Thumbnail large source={require('../../../img/detection4.gif')} style={[styles.thumbnail]}/>

        <BeaconPicker>
        </BeaconPicker>
        <Button iconLeft rounded light style={styles.createClassButton} onPress={() => this.props.navigation.navigate('CreateClass')}>
            <Text style={{color: 'white'}}>Conferma</Text>
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
    textInput: {
      alignSelf: 'center',
      marginTop: height * 0.05,
      marginLeft: width * 0.1,
      marginRight: width * 0.1,
      width: width * 0.8,
      height: height * 0.08,
    },
  
    textInputName: {
      alignSelf: 'center',
      marginTop: height * 0.01,
      marginLeft: width * 0.1,
      marginRight: width * 0.1,
      width: width * 0.8,
      height: height * 0.08,
    },
  
    createClassButton: {
      marginTop: height * 0.05,
      alignSelf: 'center',
      width: width * 0.8,
      height: height * 0.08,
      backgroundColor: '#3189C8',
      textAlignVertical: 'center',
      justifyContent: 'center',
    },
  
    title: {
      fontSize: 16,
      marginBottom: height * 0.01,
    },
  
    onePicker: {
      width: width * 0.8,
      height: height * 0.08,
      backgroundColor: 'white',
      overflow: 'hidden'
    },
  
    thumbnail: {
      alignSelf: 'center',
      marginTop: height * 0.15,
    },
  
    container: {
      justifyContent: 'center',
      marginTop: height * 0.05,
      alignSelf: 'center',
      flex: 1,
      //flexDirection: 'column',
      alignItems: 'center',
      //padding: height * 0.008,
      backgroundColor: 'white',
      borderColor: '#3189C8',
      borderRadius: 40,
      borderWidth: 1,
      width: width * 0.8,
      height: height * 0.08,
    },
  
    thumbnail: {
      alignSelf: 'center',
      marginTop: height * 0.15,
    },
  
    onePickerItem: {
      height: 44,
      color: 'red',
    },
  
  }); 