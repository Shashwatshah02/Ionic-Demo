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
import FloatingButton from "../components/FloatingButton";
import { personOutline } from "ionicons/icons";
import { useRef, useState } from "react";
import Auth from "./Auth";
import EditProfile from "./EditProfile";
import Profile from "./Profile";

const Community: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [page, setPage] = useState("");
  return (
    <IonPage>
      {/* <Header /> */}
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Community</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton id="open-modal-comm-header">
              <IonIcon icon={personOutline} />
            </IonButton>
            <IonModal
              ref={modal}
              trigger="open-modal-comm-header"
              initialBreakpoint={0.5}
              breakpoints={[0, 1]}
            >
              <div className="block">
                {page === "" ? <Auth></Auth> : null}
                {page === "login" ? <EditProfile></EditProfile> : null}
                {page === "complete-profile" ? <Profile></Profile> : null}
              </div>
            </IonModal>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Community</IonTitle>
            <IonButtons collapse={true} slot="end" id="open-modal-com-title">
              <IonButton>
                <IonIcon icon={personOutline} />
              </IonButton>
              <IonModal
                ref={modal}
                trigger="open-modal-com-title"
                initialBreakpoint={0.5}
                breakpoints={[0, 1]}
              >
                <div className="block" style={{ padding: "5px" }}>
                  {page === "" ? <Auth></Auth> : null}
                  {page === "login" ? <EditProfile></EditProfile> : null}
                  {page === "complete-profile" ? <Profile></Profile> : null}
                </div>
              </IonModal>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};
export default Community;
