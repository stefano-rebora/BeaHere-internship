import React from 'react';
import { StyleSheet, Image, Dimensions, Alert, TextInput } from 'react-native';
import { Container, Item, Content, Input, Footer, FooterTab, Button, View, Text, Switch, Icon } from 'native-base';
import DeviceInfo from 'react-native-device-info'


var { width, height } = Dimensions.get('window');

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
    }
  }

  /*  onPressInfoButton() {
     Alert.alert(DeviceInfo.getUniqueID())
   }
  */


  onPressLoginButton() {
    let msg = {};
    msg.req_type = "professorLogin";
    msg.data = this.state;
    //172.20.10.7
    fetch('http://130.251.209.22:8000', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg),
    }).catch((err) => {
      Alert.alert("Error");
    })
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Content>

          <Image
            resizeMode='cover'
            source={require('../../../img/login-logo.png')}
            style={[styles.logo, { overflow: 'visible' }]}
          />

          <Item rounded style={styles.textInput}>
            <Input placeholder='Id' textAlign='center' onChangeText={(text) => this.setState({ id: text })} />
          </Item>


          <Item rounded style={styles.textInput}>
            <Input placeholder='Password' secureTextEntry={true} textAlign='center' onChangeText={(text) => this.setState({ password: text })} />
          </Item>
          <Icon type="Entypo" name="add-user" style={{color: 'white'}} />
          

          <Button rounded style={styles.loginButton} onPress={() => this.props.navigation.navigate('Dashboard')}>
          {/* <Button rounded style={styles.loginButton} onPress={() => this.onPressLoginButton()}> */}
            <Text style={{ color: 'white', fontSize: 18 }}>Login</Text>
          </Button>

          <Image
            resizeMode='cover'
            source={require('../../../img/unige-logo.png')}
            style={[styles.unigeLogo, { overflow: 'visible' }]}
          />

        </Content>
        <Footer style={{ backgroundColor: '#F8F8F8' }}>
          <FooterTab style={{ backgroundColor: '#F8F8F8' }}>
            <Button full style={styles.forgotPasswordButton}>
              <Text>Password dimenticata?</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    )
  }
}

const styles = StyleSheet.create({

  textInput: {
    alignSelf: 'center',
    marginTop: height * 0.05,
    width: width * 0.7,
    height: height * 0.08,
  },

  loginButton: {
    marginTop: height * 0.02,
    alignSelf: 'center',
    width: width * 0.7,
    height: height * 0.08,
    backgroundColor: '#3189C8',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },

  forgotPasswordButton: {
  },

  logo: {
    width: width * 0.23,
    height: height * 0.18,
    alignSelf: 'center',
    marginTop: height * 0.1,
    minWidth: width * 0.5,
    maxWidth: width * 0.23,
    minHeight: height * 0.18,
    maxHeight: height * 0.18,
  },

  unigeLogo: {
    width: width * 0.15,
    height: height * 0.11,
    alignSelf: 'center',
    marginTop: width * 0.10
  }

});
