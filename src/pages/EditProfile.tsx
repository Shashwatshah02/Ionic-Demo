import {
  IonAvatar,
  IonButton,
  IonChip,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTextarea,
} from "@ionic/react";
import FloatingButton from "../components/FloatingButton";
import Placeholder from "../images/Placeholder.jpg";

const EditProfile: React.FC = () => {
  return (
    // <IonPage>
    // <IonContent className="ion-padding">
    /* <FloatingButton></FloatingButton> */
    <>
      <div
        className="mx-auto"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          flexDirection: "column",
          alignItems: "center",
          width: "400px",
          maxWidth: "100%",
          margin: "auto",
        }}
      >
        <IonAvatar style={{ height: "100px", width: "100px" }}>
          <img alt="Silhouette of a person's head" src={Placeholder} />
        </IonAvatar>
        {/* <input type="file"
        id="avatar" name="avatar"
        accept="image/png, image/jpeg" style={{alignContent:'center'}}></input> */}
        <div style={{ display: "flex", paddingTop: "20px" }}>
          {/* <IonList> */}
          <IonItem>
            <IonInput
              label="First Name"
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Last Name"
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>
          {/* </IonList> */}
        </div>
        <div
          style={{ display: "flex", padding: "10px", paddingBottom: "50px" }}
        >
          {/* <IonList> */}
          <IonItem>
            <IonInput
              label="City"
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Country"
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>
          {/* </IonList> */}
        </div>

        <div style={{ textAlign: "center" }}>
          <IonChip>Default</IonChip>
          <IonChip color="primary">Primary</IonChip>
          <IonChip color="secondary">Secondary</IonChip>
          <IonChip color="medium">Me</IonChip>
          <IonChip color="tertiary">Tertiary</IonChip>
          <IonChip color="success">Success</IonChip>
          <IonChip color="warning">Warning</IonChip>
          <IonChip color="danger">Danger</IonChip>
          <IonChip color="medium">Medium</IonChip>
        </div>
        <div
          style={{
            paddingTop: "30px",
            paddingBottom: "10px",
            width: "100%",
          }}
        >
          <IonList>
            <IonTextarea
              label="About Yourself"
              labelPlacement="floating"
              counter={true}
              maxlength={50}
              counterFormatter={(inputLength, maxLength) =>
                `${maxLength - inputLength} characters remaining`
              }
            ></IonTextarea>
          </IonList>
        </div>
        <IonButton expand="block" href="/profile">
          Submit
        </IonButton>
      </div>
    </>
    // </IonContent>
    // </IonPage>
  );
};
export default EditProfile;
