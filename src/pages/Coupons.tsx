import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";
import FloatingButton from "../components/FloatingButton";

const Coupons: React.FC = () => {
  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent>Heyy from coupons
      <FloatingButton></FloatingButton>
      </IonContent>
    </IonPage>
  );
};
export default Coupons;
