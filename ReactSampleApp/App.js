/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('./images/background.png')}>
          <View style={styles.settingView}>
            <TouchableOpacity style={styles.settingButton}>
              <Image source={require('./icons/setting.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.ddayView}>
            <Text style={styles.titleText}>TEST</Text>
            <Text style={styles.ddayText}>IMIN</Text>
            <Text style={styles.dateText}>React Native</Text>
          </View>
          <View style={styles.chatView}>
            <ScrollView style={styles.chatScrollView}></ScrollView>
            <View style={styles.chatControl}>
              <TextInput style={styles.chatInput} />
              <TouchableOpacity style={styles.sendButton}>
                <Text>전송</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingView: {
    flex: 1,
    // flexDirection : 'row',
    justifyContent: 'center',
    marginRight: '1%',
    alignItems: 'flex-end',
  },
  ddayView: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatView: {
    flex: 5,
  },
  titleText: {
    alignSelf: 'flex-end',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginRight: '15%',
  },
  ddayText: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
  dateText: {
    alignSelf: 'flex-start',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginLeft: '15%',
  },
  settingButton: {
    marginRight: '3%',
    marginTop: '5%',
  },
  chatInput: {
    backgroundColor: 'white',
    width: '75%',
    height : 40,
    borderWidth : 1,
    borderColor : '#a5a5a5',
    borderRadius : 10
  },
  sendButton: {
    backgroundColor: 'rgb(97,99,250)',
    marginLeft: 5,
    height : 40,
    width : 50,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
  },
  chatControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '7%',
  },
  chatScrollView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(201,201,201,0.7)',
    margin : 10,
    borderRadius : 5,
    borderWidth : 1,
    borderColor : '#a5a5a5'
  },
});

// export default App;
