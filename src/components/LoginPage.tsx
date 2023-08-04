import {
  IonContent,
  IonInput,
  IonList,
  IonItem,
  IonButton,
  IonNavLink,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonModal,
} from "@ionic/react";
import { useRef } from "react";
import ForgotPass from "./ForgotPass";

const LoginPage: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <>
      <IonList className="ion-padding-end">
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
      </IonList>

      <IonButton className="ion-margin" expand="block">
        Sign In
      </IonButton>

      <IonButton fill="clear" expand="block" href="/forgot-password">
        Forgot password ?
      </IonButton>
    </>
  );
};
export default LoginPage;
