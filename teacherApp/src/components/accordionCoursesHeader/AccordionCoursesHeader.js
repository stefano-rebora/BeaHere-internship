import React, { Component } from "react";
import { Container, Header, Content, Accordion, View, Text, Icon } from "native-base";
import {StyleSheet, Dimensions} from 'react-native';

var {width, height} = Dimensions.get('window'); //how to get them from login?

const dataArray = [
  { title: "10011", content: "Ubiquitous Computing" },
  { title: "10310", content: "Programmazione Concorrente e Algoritmi Distribuiti" },
];

export default class AccordionCoursesHeader extends Component {
    
  render() {
    return (
          <Accordion 
          dataArray={dataArray} 
          headerStyle={{ backgroundColor: "white" }}
          contentStyle={{ backgroundColor: "white" }}
          style={styles.accordion} 
          />
    );
  }
}

const styles = StyleSheet.create({
    accordion: {
        marginLeft: width * 0.1,
        marginRight: width * 0.1,
        marginTop: height * 0.05,
    }
  
  }); 