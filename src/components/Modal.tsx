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

  type ModalProps = {
    title: string,
    mode: boolean,
    handleClick: ()=> void
    
  }
    
function Modal(props: ModalProps) {
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  const [page, setPage] = useState("complete-profile");

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
          <IonTitle>{props.title}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={props.handleClick}>
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