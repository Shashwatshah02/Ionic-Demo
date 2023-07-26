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
import { useRef, useState } from "react";
import { personOutline } from "ionicons/icons";
import Auth from "./Auth";
import EditProfile from "./EditProfile";
import Profile from "./Profile";

const Coupons: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [page, setPage] = useState("login");
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  return (
    <IonPage>
      {/* <Header /> */}
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Coupons</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton
              id="open-modal-coupons-header"
              onClick={() => setIsOpenHeader(true)}
            >
              <IonIcon icon={personOutline} />
            </IonButton>
            <IonModal
              className="auto-height"
              trigger="open-modal-coupons-header"
              isOpen={isOpenHeader}
              initialBreakpoint={0.85}
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
            <IonTitle size="large">Coupons</IonTitle>
            <IonButtons collapse={true} slot="end">
              <IonButton
                id="open-modal-coupons-title"
                onClick={() => setIsOpenTitle(true)}
              >
                <IonIcon icon={personOutline} />
              </IonButton>
              <IonModal
                className="auto-height"
                trigger="open-modal-coupons-title"
                isOpen={isOpenTitle}
                initialBreakpoint={0.85}
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
      </IonContent>
    </IonPage>
  );
};
export default Coupons;
