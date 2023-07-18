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
  IonModal,
} from "@ionic/react";
import { useRef } from "react";

const LoginPage: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonContent className="ion-padding">
      <IonCard color={"dark"}>
        <IonCardHeader>
          <IonCardTitle>Welcome Back</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonList>
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
          <IonButton id="open-modal" expand="block" fill="clear" >
          Forgot password ? 
        </IonButton>
        <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.4} breakpoints={[0, 1]}>
          <div className="block">
          <IonCard>
        <IonCardHeader>
          <IonCardTitle>Forgot Password</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonList>
            
            <IonItem>
              <IonInput
                type="email"
                label="Email Address"
                labelPlacement="floating"
                placeholder="Enter your Email Address here"
              ></IonInput>
            </IonItem>
            
          </IonList>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              padding: "10px",
            }}
          >
            <IonButton>Send OTP</IonButton>
          </div>
        </IonCardContent>
      </IonCard>
          </div>
        </IonModal>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              padding: "10px",
            }}
          >
            <IonButton>Login</IonButton>
            <IonButton>Reset</IonButton>
          </div>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};
export default LoginPage;
