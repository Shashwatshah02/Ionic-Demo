import {
  IonContent,
  IonInput,
  IonList,
  IonItem,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

const SignUp: React.FC = () => {
  return (
    <IonContent className="ion-padding">
      <IonCard color={"dark"}>
        <IonCardHeader>
          <IonCardTitle>Welcome</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonList>
            <IonItem>
              <IonInput
                type="text"
                label="Full Name"
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
            <IonItem>
              <IonInput
                type="password"
                label="Password"
                labelPlacement="floating"
                placeholder="Enter your Password here"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type="password"
                label="Confirm Password"
                labelPlacement="floating"
                placeholder="Enter your Password here"
              ></IonInput>
            </IonItem>
          </IonList>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              padding: "10px",
            }}
          >
            <IonButton>Sign Up</IonButton>
            <IonButton>Reset</IonButton>
          </div>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};
export default SignUp;
