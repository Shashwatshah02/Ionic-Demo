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
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useRef } from "react";
import { Form } from "react-bootstrap";

const FloatingButton: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonFab
      slot="fixed"
      vertical="bottom"
      horizontal="end"
      style={{ marginBottom: "50px" }}
    >
      <IonFabButton id="open-modal">
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonModal ref={modal} trigger="open-modal">
        <IonHeader>
          <IonToolbar>
            <IonTitle></IonTitle>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Cancel
              </IonButton>
            </IonButtons>
            {/* <IonTitle>Welcome</IonTitle> */}
            <IonButtons slot="end">
              <IonButton strong={true} onClick={() => confirm()}>
                Post
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList className="ion-padding-end">
            {/* <IonItem>
              <IonInput
                type="text"
                label="Title"
                labelPlacement="floating"
                placeholder="Enter your title here"
              ></IonInput>
            </IonItem> */}
            <IonItem>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </IonItem>
            <IonTextarea
              className="ion-margin-start ion-padding-end"
              label="Title"
              labelPlacement="floating"
              counter={true}
              maxlength={200}
              counterFormatter={(inputLength, maxLength) =>
                `${maxLength - inputLength} characters remaining`
              }
            ></IonTextarea>

              <IonItem>
                <IonSelect
                  aria-label="Category"
                  placeholder="Select a category that best suits "
                  multiple={true}
                >
                  <IonSelectOption value="apples">Apples</IonSelectOption>
                  <IonSelectOption value="oranges">Oranges</IonSelectOption>
                  <IonSelectOption value="bananas">Bananas</IonSelectOption>
                </IonSelect>
              </IonItem>

          </IonList>
        </IonContent>
      </IonModal>
    </IonFab>
  );
};
export default FloatingButton;
