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
  return (
    <IonPage>
      {/* <Header /> */}
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Coupons</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton id="open-modal-coupons-header">
              <IonIcon icon={personOutline} />
            </IonButton>
            <IonModal
              ref={modal}
              trigger="open-modal-coupons-header"
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
            <IonTitle size="large">Coupons</IonTitle>
            <IonButtons
              collapse={true}
              slot="end"
              id="open-modal-coupons-title"
            >
              <IonButton>
                <IonIcon icon={personOutline} />
              </IonButton>
              <IonModal
                ref={modal}
                trigger="open-modal-coupons-title"
                initialBreakpoint={0.5}
                breakpoints={[0, 1]}
              >
                <div className="block" style={{ padding: "5px" }}>
                {page === "" ? <Auth></Auth> : null}
                  {page === "login" ? <EditProfile></EditProfile> : null}
                  {page === 'complete-profile' ? <Profile></Profile> : null}
                </div>
              </IonModal>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};
export default Coupons;
