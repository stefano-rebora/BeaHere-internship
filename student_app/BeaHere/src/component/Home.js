/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import {
  Container, Content, Button, Text, Input, Footer,
  FooterTab, Item
} from 'native-base';


var { width, height } = Dimensions.get('window');

export default class Home extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Image style={styles.logo}
            source={require('../image/logo.png')}
          />

          <View style={styles.textInputView}>
            <Item rounded style={styles.textInput}>
              <Input placeholder='Username'
                textAlign='center'
                fontStyle='italic' />
            </Item>

            <Item rounded style={styles.textInput} >
              <Input placeholder='Password'
                secureTextEntry={true}
                textAlign='center'
                fontStyle='italic' />
            </Item>
          </View>

          <View style={styles.viewButton}>

            <Button rounded style={styles.signinButton}
              onPress={() => this.props.navigation.navigate('signin')}>
              <Text style={styles.textSignin}>Sign Up</Text>
            </Button>

            <Button rounded style={styles.loginButton}
              onPress={() => this.props.navigation.navigate('dashboard')}>
              <Text>Log In</Text>
            </Button>
          </View>
        </Content>

        <Footer>
          <FooterTab style={{ backgroundColor: "#3189C8", borderWidth: 0.5, borderColor: '#000' }}>
            <Button full >
              <Text style={styles.textSignin}>Password Dimenticata?</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingLeft: 40,
    paddingRight: 40
  },
  textInputView: {
    paddingTop: 50
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.3,
    height: height * 0.08,
    backgroundColor: '#3189C8',
    borderWidth: 0.5,
    borderColor: '#000',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  textSignin: {
    color: '#fff',
  },
  signinButton: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.3,
    height: height * 0.08,
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: '#3189C8',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.6,
    height: height * 0.2,
    alignSelf: 'center',
    //paddingTop: height * 0.2,
    bottom: -20,
    right: 0
  },
  ImageBackGround: {
    flex: 1,
    width: width,
    height: height
  },
  textInput: {
    //paddingTop: height * 0.1,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
    marginTop: height * 0.05,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    width: width * 0.8,
    height: height * 0.08,
    backgroundColor: 'rgba(255 ,255 ,255 , 0.6)',
  },
  ImageBackGround: {
    flex: 1,
    width: width,
    height: height * 0.88
  },
});
