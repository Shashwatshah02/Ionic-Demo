import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../components/Header";
import FloatingButton from "../components/FloatingButton";
import { filter, personOutline } from "ionicons/icons";
import { useRef, useState } from "react";
import Auth from "./Auth";
import EditProfile from "./EditProfile";
import Profile from "./Profile";
import CommunityCards from "../components/CommunityCards";
import "../theme/variables.css"

const Community: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [page, setPage] = useState("");
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  return (
    <IonPage>
      {/* <Header /> */}
      <FloatingButton></FloatingButton>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Community</IonTitle>
          {/* <IonButtons collapse={true} slot="end">
            <IonButton
              id="open-modal-community-header"
              onClick={() => setIsOpenHeader(true)}
            >
              <IonIcon icon={personOutline} />
            </IonButton>
            <IonModal
              className="auto-height"
              trigger="open-modal-community-header"
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
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="ion-no-padding ion-padding-horizontal">Community</IonTitle>
            {/* <IonButtons collapse={true} slot="end">
              <IonButton
                id="open-modal-community-title"
                onClick={() => setIsOpenTitle(true)}
              >
                <IonIcon icon={personOutline} />
              </IonButton>
              <IonModal
                className="auto-height"
                trigger="open-modal-community-title"
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
            </IonButtons> */}
          </IonToolbar>
        </IonHeader>
        
        <div
          className="mx-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "400px",
            maxWidth: "100%",
            margin: "auto",
          }}
        >
          <div
            style={{
              width: "400px",
              maxWidth: "100%",
              display: "flex",
              padding: "0 8px 0 10px ",
            }}
          >
            <IonSearchbar className="ion-no-padding"></IonSearchbar>
            <div>
               &nbsp;
            </div>
            <IonButtons slot="primary">
              <IonButton fill="outline" >
              <IonIcon icon={filter}></IonIcon>
              </IonButton>
            </IonButtons>
          </div>
          <div
            style={{
              width: "400px",
              maxWidth: "100%",
              padding: "0 10px 0 10px ",
            }}
          >
          <CommunityCards />
          
      </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Community;
