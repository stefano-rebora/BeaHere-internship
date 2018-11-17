/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, Alert, ImageBackground } from 'react-native';
import {
  Container, Header, Content, Button, Text, Input, Item
} from 'native-base';
import DeviceInfo from 'react-native-device-info';


var { width, height } = Dimensions.get('window');
heightScreen = height * 1.1;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      surname: "",
      email: "",
      device_id: "",
      last_imei_change: "",
      password: "",
      r_password: "",
    }
  }

  onPressSignUpButton() {
    let msg = {};
    msg.req_type = "studentSignup";
    this.state.device_id = DeviceInfo.getUniqueID();
    msg.data = this.state;
    //172.20.10.7
    fetch('http://192.168.1.249:8000/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg),
    }).catch((err) => {
      Alert.alert("Error");
    });
    //Alert.alert("SignUp OK!")
    //this.props.navigation.navigate('home')
  }

  onPressBackButton() {
    this.props.navigation.navigate('home')
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>

          <Image style={styles.logo}
            source={require('../image/logo.png')}
              /*resizeMode='cover'*/ />

          <Item rounded style={styles.textInput}>
            <Input placeholder='Name'
              textAlign='center'
              fontStyle='italic'
              onChangeText={(text) => this.setState({ name: text })}
            />
          </Item>

          <Item rounded style={styles.textInput}>
            <Input placeholder='Surname'
              textAlign='center'
              fontStyle='italic'
              onChangeText={(text) => this.setState({ surname: text })}
            />
          </Item>

          <Item rounded style={styles.textInput}>
            <Input placeholder='ID'
              textAlign='center'
              fontStyle='italic'
              onChangeText={(text) => this.setState({ id: text })}
            />
          </Item>

          <Item rounded style={styles.textInput}>
            <Input placeholder='Email'
              textAlign='center'
              fontStyle='italic'
              onChangeText={(text) => this.setState({ email: text })}
            />
          </Item>

          <Item rounded style={styles.textInput} >
            <Input placeholder='Password'
              secureTextEntry={true}
              textAlign='center'
              fontStyle='italic'
              onChangeText={(text) => this.setState({ password: text })}
            />
          </Item>

          <Item rounded style={styles.textInput}>
            <Input placeholder='Repeat Password'
              secureTextEntry={true}
              textAlign='center'
              fontStyle='italic'
              onChangeText={(text) => this.setState({ r_password: text })}
            />
          </Item>

          <View style={styles.viewButton}>

            <Button rounded style={styles.backButton}
              onPress={() => this.onPressBackButton()}>
              <Text style={{ color: '#fff' }}>Back</Text>
            </Button>

            <Button rounded style={styles.signinButton}
              onPress={() => this.onPressSignUpButton()}>
              <Text style={{ color: '#fff' }}>Sign Up</Text>
            </Button>

          </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 40,
    paddingRight: 40
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.3,
    height: height * 0.08,
    backgroundColor: '#3189C8',
    textAlignVertical: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
  },
  ImageBackGround: {
    flex: 1,
    width: width,
    height: height * 1.10 //0.96
  },
  signinButton: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.3,
    height: height * 0.08,
    backgroundColor: '#3189C8',
    textAlignVertical: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
  },
  logo: {
    width: width * 0.6,
    height: height * 0.2,
    alignSelf: 'center',
    bottom: -20,
    right: 0
  },
  textInput: {
    alignSelf: 'center',
    marginTop: height * 0.05,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    width: width * 0.8,
    height: height * 0.08,
    backgroundColor: 'rgba(255 ,255 ,255 , 0.6)',
    borderWidth: 0.5,
    borderColor: '#000',
  }
});
