import { IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import Header from "../components/Header";
import { add } from "ionicons/icons";
import FloatingButton from "../components/FloatingButton";

const Home: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <IonContent>Heyy from home
      <FloatingButton></FloatingButton>
      </IonContent>
    </>
  );
};
export default Home;
