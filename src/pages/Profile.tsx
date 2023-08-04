import Header from "../components/Header";
import {
  IonAvatar,
  IonChip,
  IonContent,
  IonButton,
  IonPage,
} from "@ionic/react";
import FloatingButton from "../components/FloatingButton";
import Placeholder from "../images/Placeholder.jpg";
import Auth from "./Auth";
import { useState } from "react";
import EditProfile from "./EditProfile";
import YourProfile from "../components/YourProfile";
const Profile: React.FC = () => {
  const [page, setPage] = useState("");
  // const handleChange = () => {
  //     if (page == "") {
  //       setPage("login");
  //     } else if (page == "login") {
  //       setPage("complete-profile");
  //     } else if (page == "complete-profile") {
  //       setPage("view-profile");
  //     }
  //   };
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
          {page === "" ? <Auth></Auth> : null}
          {page === "login" ? <EditProfile></EditProfile> : null}
          {page === "complete-profile" ? <YourProfile></YourProfile> : null}

          
        </div>
        <IonButton className="ion-margin-bottom" expand="block" onClick={()=> setPage('login')}>
              Edit - Profile
          </IonButton>
          <IonButton className="ion-margin-bottom" expand="block" onClick={()=> setPage('complete-profile')}>
              Profile
          </IonButton>
          <IonButton className="ion-margin-bottom" expand="block" onClick={()=> setPage('')}>
              Login
          </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Profile;
