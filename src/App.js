import React, { Component } from 'react';
import { View } from 'react-native';

import firebase from 'firebase';

import Header from './Components';
import LoginForm from './Components/LoginForm';

class App extends Component{
componentWillMount(){

firebase.initializeApp({ 

    apiKey: "AIzaSyDDlrPUE1aSFYvaoO2IpMyG2j8T5NTUXn4",
    authDomain: "rnapp-nav.firebaseapp.com",
    databaseURL: "https://rnapp-nav.firebaseio.com",
    projectId: "rnapp-nav",
    storageBucket: "rnapp-nav.appspot.com",
    messagingSenderId: "522150093230"

});

}
 
render(){
    return(
    
        <View>
        <Header headerText="Authentication" />
        <LoginForm />
        </View>

    );

}
}

export default App;