import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import { useState } from "react";
import SignUp from "../components/SignUp";

const Auth: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('LOGIN_PAGE')
  const handleChange = ()=>{
    if (currentSection === 'LOGIN_PAGE'){
      setCurrentSection('SIGNUP_PAGE')
      
    }
    else{
      setCurrentSection('LOGIN_PAGE')
    }
  }
  return (
    <>
      <IonPage>
        {/* <Header /> */}
        <IonContent className="ion-padding mx-auto no-scroll" fullscreen>
        <div style={{width:'400px', maxWidth:'100%', height:'100vh', margin:'auto'}}>
        <IonSegment value={currentSection} onIonChange={handleChange}>
        <IonSegmentButton value="LOGIN_PAGE">
          <IonLabel>Login</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="SIGNUP_PAGE">
          <IonLabel>Sign Up</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {currentSection === "LOGIN_PAGE" ? <LoginPage/>:<SignUp/>}
        </div> 
        </IonContent>
      </IonPage>
    </>
  );
};

export default Auth;
