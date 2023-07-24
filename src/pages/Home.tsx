import { IonContent, IonFab, IonFabButton, IonIcon, IonPage } from "@ionic/react";
import Header from "../components/Header";
import { add } from "ionicons/icons";
import FloatingButton from "../components/FloatingButton";

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent>Heyy from home
      <FloatingButton></FloatingButton>
      </IonContent>
    </IonPage>
  );
};
export default Home;
