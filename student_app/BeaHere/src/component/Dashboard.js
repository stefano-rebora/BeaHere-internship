/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, FlatList, Alert } from 'react-native';
import {
  Container, Content, Button, Text,
  ListItem, Radio, Left, Right,
} from 'native-base';


var { width, height } = Dimensions.get('window');


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Room 505 : IP',
        'Room 506 : SET',
        'Room 507 : SAW',
      ],
      selectedItem: -1
    }
  }

  attendanceIsOkay = () => {
    Alert.alert('Your mark is correct!');
    this.props.navigation.navigate('home');
  }

  onPressAttendanceButton = () => {
    Alert.alert('Lesson: ' + this.state.selectedItem + ' ?', '',
      [
        { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => this.attendanceIsOkay() },
      ]
    );
  }

  onPressLogOutButton() {
    this.props.navigation.navigate('home')
  }

  onCheckBoxPress(value) {
    this.setState({
      selectedItem: value
    });
  }

  render() {

    return (
      <Container>
        <Content>

          <Image style={styles.logo}
            source={require('../image/logo.png')}
          />

          <View style={styles.introView}>
            <Text style={styles.introText}>Select your lesson!</Text>
          </View>

          <FlatList
            extraData={this.state}
            keyExtractor={(item, index) => item.toString()}
            data={this.state.items}
            renderItem={({ item }) => {
              return <ListItem onPress={() => this.onCheckBoxPress(item)}>
                <Left>
                  <Text>{item}</Text>
                </Left>
                <Right>
                  <Radio
                    selectedColor={"#3189C8"}
                    selected={this.state.selectedItem == item}
                    onPress={() => this.onCheckBoxPress(item)}
                  />
                </Right>

              </ListItem>
            }}
          />

          <View style={styles.viewButton}>

            <Button rounded style={styles.logoutButton}
              onPress={() => this.onPressLogOutButton()}>
              <Text style={{ color: '#fff' }}>Log Out</Text>
            </Button>

            <Button rounded style={styles.attendanceButton}
              onPress={() => this.onPressAttendanceButton()}>
              <Text style={{ color: '#fff' }}>Attendance</Text>
            </Button>

          </View>

        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  listStyle: {
    paddingTop: 50
  },
  introView: {
    paddingTop: 30
  },
  introText: {
    color: '#3189C8',
    textAlign: 'center'
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.05,
  },
  attendanceButton: {
    marginTop: height * 0.05,
    marginBottom: height * 0.1 /* 100*/,
    alignSelf: 'center',
    width: width * 0.4,
    height: height * 0.08,
    backgroundColor: '#3189C8',
    textAlignVertical: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
  },
  logoutButton: {
    marginTop: height * 0.05,
    marginBottom: height * 0.1 /*100*/,
    alignSelf: 'center',
    width: width * 0.4,
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
    height: height * 0.96
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
  }
});