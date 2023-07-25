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
import { useRef } from "react";
import { personOutline } from "ionicons/icons";

const Coupons: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
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
              <div className="block">Block of Content</div>
            </IonModal>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Coupons</IonTitle>
            <IonButtons collapse={true} slot="end" id="open-modal-coupons-title">
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
                  Block of Content
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
