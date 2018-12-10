
import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';

var { width, height } = Dimensions.get('window'); //how to get them from login?

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
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

          <Text style={{ alignSelf: 'center', marginTop: height * 0.02 }}> {this.props.username} </Text>

          <Button rounded style={styles.createClassButton}>
            <Text style={{ color: 'white', fontSize: 19 }} onPress={() => this.props.navigation.navigate('DetectBeacons')}>Genera lezione</Text>
          </Button>

          <Button rounded style={styles.addPresenceButton}>
            <Text style={{ color: 'white', fontSize: 19 }} onPress={() => this.props.navigation.navigate('AddPresence')}>Aggiungi presenza</Text>
          </Button>

          <Button rounded style={styles.myCoursesButton}>
            <Text style={{ color: 'white', fontSize: 19 }} onPress={() => this.props.navigation.navigate('CoursesList')}>I miei corsi</Text>
          </Button>

        </Content>

        <Footer style={{ backgroundColor: '#F8F8F8' }}>
          <FooterTab style={{ backgroundColor: '#F8F8F8' }}>
            <Button full style={styles.logoutButton} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{ color: 'red', fontSize: 16 }}>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>

    )
  }
}

const styles = StyleSheet.create({

  logo: {
    width: width * 0.2,
    height: height * 0.15,
    alignSelf: 'center',
    marginTop: height * 0.13,
    minWidth: width * 0.5,
    maxWidth: width * 0.23,
    minHeight: height * 0.18,
    maxHeight: height * 0.18,
  },

  createClassButton: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.7,
    height: height * 0.08,
    textAlignVertical: 'center',
    justifyContent: 'center',
    backgroundColor: '#3189C8',
  },

  addPresenceButton: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.7,
    height: height * 0.08,
    //backgroundColor: '#3189C8',
    textAlignVertical: 'center',
    justifyContent: 'center',
    //backgroundColor: '#f9ab3d',
    backgroundColor: '#3189C8',
  },

  myCoursesButton: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    width: width * 0.7,
    height: height * 0.08,
    textAlignVertical: 'center',
    justifyContent: 'center',
    backgroundColor: '#3189C8',
  },

}); 