import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRow,
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
import CouponCards from "../components/CouponCards";
import "./Coupons.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
        <div
          className="mx-auto"
          id="container-coupons"
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
          <Masonry columnsCount={2} >
            <IonCard className="ion-no-margin" style={{margin:'5px'}}>
              <img
                alt="Silhouette of mountains"
                src="https://images.unsplash.com/photo-1595875197145-a0d6828b58e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              />

              <IonCardContent className="ion-no-padding">
                <p style={{ padding: "7px", textAlign: "center" }}>
                  15% for you and 15% for 🌳
                </p>
              </IonCardContent>
            </IonCard>
            <IonCard className="ion-no-margin" style={{margin:'5px'}}>
              <img
                alt="Silhouette of mountains"
                src="https://images.unsplash.com/photo-1533577254044-3c2b4b31183c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                height={200}
              />

              <IonCardContent className="ion-no-padding">
                <p style={{ padding: "7px", textAlign: "center" }}>
                  15% for you and 15% for 🌳
                </p>
              </IonCardContent>
            </IonCard>
            <IonCard className="ion-no-margin" style={{margin:'5px'}}>
              <img
                alt="Silhouette of mountains"
                src="https://images.unsplash.com/photo-1614028901211-995c6c474d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                height={200}
              />

              <IonCardContent className="ion-no-padding">
                <p style={{ padding: "7px", textAlign: "center" }}>
                  15% for you and 15% for 🌳
                </p>
              </IonCardContent>
            </IonCard>
            <IonCard className="ion-no-margin" style={{margin:'5px'}}>
              <img
                alt="Silhouette of mountains"
                src="https://images.unsplash.com/photo-1560787139-bcec5864f0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                height={200}
              />

              <IonCardContent className="ion-no-padding">
                <p style={{ padding: "7px", textAlign: "center" }}>
                  15% for you and 15% for 🌳
                </p>
              </IonCardContent>
            </IonCard>
            <IonCard className="ion-no-margin" style={{margin:'5px'}}>
              <img
                alt="Silhouette of mountains"
                src="https://images.unsplash.com/photo-1533577254044-3c2b4b31183c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                height={200}
              />

              <IonCardContent className="ion-no-padding">
                <p style={{ padding: "7px", textAlign: "center" }}>
                  15% for you and 15% for 🌳
                </p>
              </IonCardContent>
            </IonCard>
            <IonCard className="ion-no-margin" style={{margin:'5px'}}>
              <img
                alt="Silhouette of mountains"
                src="https://images.unsplash.com/photo-1595875197145-a0d6828b58e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              />

              <IonCardContent className="ion-no-padding">
                <p style={{ padding: "7px", textAlign: "center" }}>
                  15% for you and 15% for 🌳
                </p>
              </IonCardContent>
            </IonCard>
            
          </Masonry>

          {/* <IonGrid>
            <IonRow>
              <IonCol size="6">
                <CouponCards></CouponCards>
              </IonCol>
              <IonCol size="6">
                <CouponCards></CouponCards>
              </IonCol>
              <IonCol size="6">
                <CouponCards></CouponCards>
              </IonCol>
              <IonCol size="6">
                <CouponCards></CouponCards>
              </IonCol>
            </IonRow>
          </IonGrid> */}
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Coupons;
