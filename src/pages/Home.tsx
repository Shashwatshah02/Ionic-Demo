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
import { useRef } from "react";

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonPage>
      {/* <Header /> */}
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton id="open-modal-home-header"><IonIcon icon={personOutline} /></IonButton>
            <IonModal ref={modal} trigger="open-modal-home-header" initialBreakpoint={0.5} breakpoints={[0, 1]}>
          <div className="block">Block of Content</div>
        </IonModal>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
            <IonButtons collapse={true} slot="end" id="open-modal-home-title">
              <IonButton><IonIcon icon={personOutline} /></IonButton>
              <IonModal ref={modal} trigger="open-modal-home-title" initialBreakpoint={0.5} breakpoints={[0, 1]}>
          <div className="block" style={{padding:'5px'}}>Block of Content</div>
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
