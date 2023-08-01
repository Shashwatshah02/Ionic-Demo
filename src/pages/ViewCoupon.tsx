import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";

const ViewCoupon: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="clear" onClick={() => history.back()} slot="start">
            <IonIcon slot="icon-only" icon={arrowBack} />
          </IonButton>
          <IonTitle>View Coupon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <div className='mx-auto'
            style={{
              width: "400px",
              maxWidth: "100%",
              margin:'auto'
              
            }}
          >
      <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
        <IonList className="ion-padding-end">
          <IonItem>
            <IonInput
              type="text"
              label="Name"
              labelPlacement="floating"
              placeholder="Enter your Name here"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="email"
              label="Email Address"
              labelPlacement="floating"
              placeholder="Enter your Email Address here"
            ></IonInput>
          </IonItem>
        </IonList>

        <IonButton className="ion-margin" expand="block" href="/coupons">
          Submit
        </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default ViewCoupon;
