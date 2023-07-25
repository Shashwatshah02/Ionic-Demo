import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useRef } from "react";

const FloatingButton: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonFab slot="fixed" vertical="bottom" horizontal="end" style={{marginBottom:"50px"}}>
      <IonFabButton id="open-modal">
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonModal ref={modal} trigger="open-modal">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Cancel
              </IonButton>
            </IonButtons>
            {/* <IonTitle>Welcome</IonTitle> */}
            <IonButtons slot="end">
              <IonButton strong={true} onClick={() => confirm()}>
                Confirm
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList className="ion-padding-end">
            <IonItem>
              <IonInput
                type="text"
                label="Title"
                labelPlacement="floating"
                placeholder="Enter your title here"
              ></IonInput>
            </IonItem>
            
              <IonTextarea className="ion-margin-start ion-padding-end"
                label="Description"
                labelPlacement="floating"
                counter={true}
                maxlength={50}
                counterFormatter={(inputLength, maxLength) =>
                  `${maxLength - inputLength} characters remaining`
                }
              ></IonTextarea>
              <IonItem>
            <IonInput
                type="text"
                label="Tags"
                labelPlacement="floating"
                placeholder="Enter your tags here"
              ></IonInput>
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>
    </IonFab>
  );
};
export default FloatingButton;
