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
import Home from "../pages/Home";
const ForgotPass: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonButton fill='clear' onClick={()=> history.back()} slot="start" >
              <IonIcon slot="icon-only" icon={arrowBack} />
            </IonButton>
            <IonTitle >Forgot Password</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent className="ion-padding">
        
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
        <IonButton className='ion-margin' expand="block">Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};
export default ForgotPass;
