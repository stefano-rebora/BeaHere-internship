import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Footer, Thumbnail, FooterTab, Button, Text } from 'native-base';

var {width, height} = Dimensions.get('window'); //how to get them from login?

import AccordionCoursesHeader from '../accordionCoursesHeader/AccordionCoursesHeader';
 
export default class CoursesList extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const state = this.state;
    return (
      <Container>
      <Content>
      <Thumbnail large source={require('../../../img/list.png')} style={[styles.thumbnail]}/>
      <Text style={styles.text}>In questa pagina è possibile l'elenco dei propri corsi attualmente attivi.</Text>
      <Text style={{marginTop: height*0.02, marginLeft: width * 0.1, marginRight: width * 0.1,}}>Per aggiungere un nuovo corso o per la gestione dei propri, effettuare l'accesso dall'applicazione Web.</Text>
      <AccordionCoursesHeader>
        
      </AccordionCoursesHeader>

     </Content>
     <Footer style={{ backgroundColor: '#F8F8F8' }}>
          <FooterTab style={{ backgroundColor: '#F8F8F8' }}>
            <Button full style={styles.logoutButton} onPress={() => this.props.navigation.navigate('Dashboard')}>             
              <Text style={{ color: '#3189C8', fontSize:20}}>Indietro</Text>
            </Button>
          </FooterTab>
      </Footer>
     </Container>
    )
  }
}
 
const styles = StyleSheet.create({
  table: {
    marginTop: height * 0.07,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    borderColor: 'black'
  },
  head: { 
    height: height * 0.025, 
    backgroundColor: '#3189C8' },
  text: { 
    marginTop: height * 0.07,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,},
  headerText: {
    
  },
  rowText: {

  },
  thumbnail: {
    alignSelf: 'center',
    marginTop: height * 0.15,
  },
});