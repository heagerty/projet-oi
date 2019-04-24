import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Header from './components/header'

class AgendaScreen extends React.Component {
  render() {
    const { textStyle, titleStyle, bodyStyle, agendaStyle, agendaDayStyle } = styles;
    return (
      <View>
      <Header></Header>
      <View style={titleStyle}>
        <Text >Agenda</Text>
      </View>
      <View style={bodyStyle}>
        < Text style={textStyle}>Mercredi 15 mai 2019</Text>
        < Text style={agendaStyle}>9h - Techexpo Orleans{"\n"}
        {'\t'}Salle des Expositions</Text>
        < Text style={agendaStyle}>14h - Découvrir Laravel{"\n"}
        {'\t'}Salle des Etoiles</Text>
      </View>
      <View style={agendaDayStyle}>
        < Text style={textStyle}>Jeudi 16 mai 2019</Text>
        < Text style={agendaStyle}>9h30 - PHP dans 5 ans{"\n"}
        {'\t'}Salle Médiéval</Text>
        < Text style={agendaStyle}>14h00 - Atelier JavaScript{"\n"}
        {'\t'}Salle Informatique</Text>
      </View>
      <View style={agendaDayStyle}>
        < Text style={textStyle}>Vendredi 17 mai 2019</Text>
        < Text >9h - Evaluer son code{"\n"}
        {'\t'}Salle d'Espoir</Text>
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
          < Text style={textStyle}>Contact</Text>
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
          < Text style={listTextStyle}>John Devos{'\t'}{'\t'}{'\t'}john@company.com</Text>
          < Text style={listTextStyle}>Mélissa Araoune{'\t'}melissa@company.com</Text>
          < Text style={listTextStyle}>Baptiste Meftahi{'\t'}baptiste@company.com</Text>
          < Text style={listTextStyle}>Casey Heagerty{'\t'}{'\t'}casey@company.com</Text>
          < Text style={listTextStyle}>Michael Jordan{'\t'}{'\t'}michael@company.com</Text>
          < Text style={listTextStyle}>John Wayne{'\t'}{'\t'}{'\t'}johnwayne@company.com</Text>
          < Text style={listTextStyle}>Bill Murray{'\t'}{'\t'}{'\t'}bmurray@company.com</Text>
          < Text style={listTextStyle}>Biz Markie{'\t'}{'\t'}{'\t'}bmarkie@company.com</Text>
          < Text style={listTextStyle}>Stevie Wonder{'\t'}{'\t'}stevie@company.com</Text>
          < Text style={listTextStyle}>Rosa Parks{'\t'}{'\t'}{'\t'}rparks@company.com</Text>
          < Text style={listTextStyle}>Leonardo da Vinci{'\t'}leonardo@company.com</Text>
          < Text style={listTextStyle}>Amelia Earhart{'\t'}{'\t'}amelia@company.com</Text>
          < Text style={listTextStyle}>Aretha Franklin{'\t'}{'\t'}afranklin@company.com</Text>
          < Text style={listTextStyle}>James Joyce{'\t'}{'\t'}jjoyce@company.com</Text>
          < Text style={listTextStyle}>Steve Martin{'\t'}{'\t'}smartin@company.com</Text>
          < Text style={listTextStyle}>Winston Churchill{'\t'}wchurch@company.com</Text>
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
          <ScrollView>
          <Image
              source={
                __DEV__
                  ? require('./assets/images/hotelLayout.gif')
                  : require('./assets/images/hotelLayout.gif')
              }
              style={styles.mapImage}
              maximumZoomScale={200}
              minimumZoomScale={100}
            />
            </ScrollView>

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
  agendaStyle: {
    fontSize: 14,
    paddingTop: 2,
    paddingBottom: 8
},
  bodyStyle: {
    justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50
  },
  agendaDayStyle: {
    justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 40
  },
  listStyle: {
    justifyContent: 'center',
      alignItems: 'left',
      paddingTop: 50,
      paddingLeft: 30,
      fontSize: 15,
  },
  listTextStyle: {
      paddingTop: 5,
      fontSize: 15,
  },
  mapImage: {
    width: 340,
    height: 470,
    resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 10,
  },
};

const TabNavigator = createBottomTabNavigator({
  Informations: InformationScreen,
  Liste: ListScreen,
  Agenda: AgendaScreen,
  Plan: MapScreen,
});

export default createAppContainer(TabNavigator);