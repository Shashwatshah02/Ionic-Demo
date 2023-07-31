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
  import Auth from "../pages/Auth";
  import Profile from "../pages/Profile";
  import EditProfile from "../pages/EditProfile";
const Modal: React.FC = (props)=>{
    const [isOpenTitle, setIsOpenTitle] = useState(false);
    const [page, setPage] = useState("complete-profile");
    interface Modal {
      title: string
    }
    return (
        <IonModal
                className="auto-height"
                trigger="open-modal-home-title"
                isOpen={isOpenTitle}
                initialBreakpoint={1}
                breakpoints={[0, 0.8]}
              >
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Modal</IonTitle>
                    <IonButtons slot="end">
                      <IonButton onClick={() => setIsOpenTitle(true)}>
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
    );
}
export default Modal;