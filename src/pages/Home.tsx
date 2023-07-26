import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../components/Header";
import { add, personOutline } from "ionicons/icons";
import FloatingButton from "../components/FloatingButton";
import { useRef, useState } from "react";
import Auth from "./Auth";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [page, setPage] = useState("complete-profile");
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  // const handleChange = () => {
  //   if (page == "") {
  //     setPage("login");
  //   } else if (page == "login") {
  //     setPage("complete-profile");
  //   } else if (page == "complete-profile") {
  //     setPage("view-profile");
  //   }
  // };
  return (
    <IonPage>
      {/* <Header /> */}
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton
              id="open-modal-home-header"
              onClick={() => setIsOpenHeader(true)}
            >
              <IonIcon icon={personOutline} />
            </IonButton>
            <IonModal
              className="auto-height"
              trigger="open-modal-home-header"
              isOpen={isOpenHeader}
              initialBreakpoint={0.8}
              breakpoints={[0, 1]}
            >
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Modal</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => setIsOpenHeader(false)}>
                      Close
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding" overflow-y="scroll">
                <div className="block" style={{ padding: "5px" }}>
                  {page === "" ? <Auth></Auth> : null}
                  {page === "login" ? <EditProfile></EditProfile> : null}
                  {page === "complete-profile" ? <Profile></Profile> : null}
                </div>
              </IonContent>
            </IonModal>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
            <IonButtons collapse={true} slot="end">
              <IonButton
                id="open-modal-home-title"
                onClick={() => setIsOpenTitle(true)}
              >
                <IonIcon icon={personOutline} />
              </IonButton>
              <IonModal
                className="auto-height"
                trigger="open-modal-home-title"
                isOpen={isOpenTitle}
                initialBreakpoint={0.8}
                breakpoints={[0, 1]}
              >
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Modal</IonTitle>
                    <IonButtons slot="end">
                      <IonButton onClick={() => setIsOpenTitle(false)}>
                        Close
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding" overflow-y="scroll">
                  <div className="block" style={{ padding: "5px" }}>
                    {page === "" ? <Auth></Auth> : null}
                    {page === "login" ? <EditProfile></EditProfile> : null}
                    {page === "complete-profile" ? <Profile></Profile> : null}
                  </div>
                </IonContent>
              </IonModal>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>Item 1</IonItem>
          <IonItem>Item 2</IonItem>
          <IonItem>Item 3</IonItem>
          <IonItem>Item 4</IonItem>
          <IonItem>Item 5</IonItem>
          <IonItem>Item 6</IonItem>
          <IonItem>Item 7</IonItem>
          <IonItem>Item 8</IonItem>
          <IonItem>Item 9</IonItem>
          <IonItem>Item 10</IonItem>
          <IonItem>Item 11</IonItem>
          <IonItem>Item 12</IonItem>
          <IonItem>Item 13</IonItem>
          <IonItem>Item 14</IonItem>
          <IonItem>Item 15</IonItem>
          <IonItem>Item 16</IonItem>
          <IonItem>Item 17</IonItem>
          <IonItem>Item 18</IonItem>
          <IonItem>Item 19</IonItem>
          <IonItem>Item 20</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Home;
