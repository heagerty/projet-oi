import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Header from './components/header'

class AgendaScreen extends React.Component {
  render() {
    const { textStyle, titleStyle, bodyStyle } = styles;
    return (
      <View>
      <Header></Header>
      <View style={titleStyle}>
        <Text >Informations</Text>
      </View>
      <View style={bodyStyle}>
        < Text style={textStyle}>Hier</Text>
        < Text >Meetings</Text>
      </View>
      <View style={bodyStyle}>
        < Text style={textStyle}>Aujourd'hui</Text>
        < Text >Meetings</Text>
      </View>
      <View style={bodyStyle}>
        < Text style={textStyle}>Demain</Text>
        < Text >Meetings</Text>
      </View>
    
    </View>
    );
  }
}

class InformationScreen extends React.Component {
  render() {
    const { textStyle, titleStyle, bodyStyle } = styles;
    return (
      <View>
        <Header></Header>
        <View style={titleStyle}>
          <Text >Informations</Text>
        </View>
        <View style={bodyStyle}>
          < Text style={textStyle}>Adresse</Text>
          < Text >423 rue des Essais</Text>
          < Text >41600 Lamotte-Beuvron</Text>
          < Text >France</Text>
        </View>
        <View style={bodyStyle}>
          < Text style={textStyle}>Wifi</Text>
          < Text >reseau wifi: GrandHotel</Text>
          < Text >mot de passe: password</Text>
        </View>
        <View style={bodyStyle}>
          < Text style={textStyle}>Contacte</Text>
          <Button onPress={() => Linking.openURL('mailto:support@grandhotel.com') }
      title="support@grandhotel.com" />
        </View>
      
      </View>
    );
  }
}

class ListScreen extends React.Component {
  render() {
    const { textStyle, titleStyle, bodyStyle, listStyle, listTextStyle } = styles;
    return (
      <View>
        <Header></Header>
        <View style={titleStyle}>
          <Text >Liste des participants</Text>
        </View>
        <View style={listStyle}>
          < Text style={listTextStyle}>John Devos</Text>
          < Text style={listTextStyle}>Mélissa Araoune</Text>
          < Text style={listTextStyle}>Baptiste Meftahi</Text>
          < Text style={listTextStyle}>Casey Heagerty</Text>
          < Text style={listTextStyle}>Michael Jordan</Text>
          < Text style={listTextStyle}>John Wayne</Text>
          < Text style={listTextStyle}>Bill Murray</Text>
          < Text style={listTextStyle}>Biz Markie</Text>
          < Text style={listTextStyle}>John Devos</Text>
          < Text style={listTextStyle}>Mélissa Araoune</Text>
          < Text style={listTextStyle}>Baptiste Meftahi</Text>
          < Text style={listTextStyle}>Casey Heagerty</Text>
          < Text style={listTextStyle}>Michael Jordan</Text>
          < Text style={listTextStyle}>John Wayne</Text>
          < Text style={listTextStyle}>Bill Murray</Text>
          < Text style={listTextStyle}>Biz Markie</Text>
        </View>
      </View>
    );
  }
}

class MapScreen extends React.Component {
    render() {
      const { textStyle, titleStyle, bodyStyle, mapImage } = styles;
      return (
        <View>
          <Header></Header>
          <View style={titleStyle}>
            <Text >Plan</Text>
          </View>
          <View>
          <Image
              source={
                __DEV__
                  ? require('./assets/images/grandhotel.png')
                  : require('./assets/images/grandhotel.png')
              }
              style={styles.mapImage}
            />
            </View>

        </View>
      );
    }
  }

const styles = {
  titleStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
  },
  textStyle: {
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10
  },
  bodyStyle: {
    justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50
  },
  listStyle: {
    justifyContent: 'center',
      alignItems: 'left',
      paddingTop: 50,
      paddingLeft: 50,
      fontSize: 15,
  },
  listTextStyle: {
      paddingTop: 5,
      fontSize: 15,
  },
  mapImage: {
    width: 350,
    height: 500,
    resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 10,
  },
};

const TabNavigator = createBottomTabNavigator({
  Information: InformationScreen,
  Liste: ListScreen,
  Agenda: AgendaScreen,
  Plan: MapScreen,
});

export default createAppContainer(TabNavigator);