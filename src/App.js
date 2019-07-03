import React, { Component } from 'react';

import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { chomps: 0 };

  chomp = () => {
    this.setState({ chomps: this.state.chomps + 1 });
  }

  unchomp = () => {
    if (this.state.chomps > 0) {
      this.setState({ chomps: this.state.chomps - 1 });
    }
  }

  render() {
    return(
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Alligator</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent>
          <IonCard>
            <img src="https://images.unsplash.com/photo-1549240923-93a2e080e653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2165&q=80" />
            <IonCardHeader>
              <IonCardSubtitle>Crocco</IonCardSubtitle>
              <IonCardTitle>
                You've been chomped {this.state.chomps} times!
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton onClick={this.chomp}>Chomp</IonButton>
              <IonButton onClick={this.unchomp}>UnChomp</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>      
    );
  }
}

export default App;
