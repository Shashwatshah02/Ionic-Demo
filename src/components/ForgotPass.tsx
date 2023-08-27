import {
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonPage,
  IonIcon,
} from "@ionic/react";
  import { arrowBack, caretBack } from "ionicons/icons";
import Home from "../pages/Auth";
const ForgotPass: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="clear" onClick={() => history.back()} slot="start">
            <IonIcon slot="icon-only" icon={arrowBack} color={"light"}/>
          </IonButton>
          <IonTitle>Forgot Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div
          style={{
            width: "400px",
            maxWidth: "100%",
            height: "100%",
            margin: "auto",
          }}
        >
          <IonList className="ion-padding-end">
            <IonItem>
              <IonInput
                type="email"
                label="Email Address"
                labelPlacement="floating"
                placeholder="Enter your Email Address here"
              ></IonInput>
            </IonItem>
          </IonList>
          <IonButton className="ion-margin" expand="block">
            Submit
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default ForgotPass;
