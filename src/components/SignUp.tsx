import {
  IonContent,
  IonInput,
  IonList,
  IonItem,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

const SignUp: React.FC = () => {
  return (
    <IonContent>
      <IonList className="ion-padding-end">
        <IonItem>
          <IonInput
            type="text"
            label="Full Name"
            labelPlacement="floating"
            placeholder="Enter your Name here"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            type="email"
            label="Email Address"
            labelPlacement="floating"
            placeholder="Enter your Email Address here"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            type="password"
            label="Password"
            labelPlacement="floating"
            placeholder="Enter your Password here"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            type="password"
            label="Confirm Password"
            labelPlacement="floating"
            placeholder="Enter your Password here"
          ></IonInput>
        </IonItem>
      </IonList>

      <IonButton className='ion-margin' expand="block">Sign Up</IonButton>
    </IonContent>
  );
};
export default SignUp;
