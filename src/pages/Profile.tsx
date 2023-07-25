import Header from "../components/Header";
import { IonAvatar, IonChip, IonContent, IonButton, IonPage } from "@ionic/react";
import FloatingButton from "../components/FloatingButton";
import Placeholder from "../images/Placeholder.jpg";
const Profile: React.FC = () => {
  return (
    <IonPage>
      {/* <Header /> */}

      <IonContent className="ion-padding">
        {/* <FloatingButton></FloatingButton> */}
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
          <IonAvatar style={{height:'100px', width:'100px'}}>
            <img alt="Silhouette of a person's head" src={Placeholder} style={{}}/>
          </IonAvatar> 
          <h4>
            <strong>Your Name Here</strong>
          </h4>
          <div style={{ paddingBottom: "30px" }}>City, Country</div>
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
          <div style={{ textAlign: "left", paddingTop: "30px", paddingBottom:'10px' }}>
            <h6>
              <strong>About yourself</strong>
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              necessitatibus earum libero corrupti minima voluptas quo?
              Aspernatur voluptatum, aut perspiciatis quo aperiam fugiat placeat
              porro officia est labore ratione. Libero.
            </p>
          </div>
          <IonButton expand="block" href="/edit-profile">Edit Profile</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Profile;
