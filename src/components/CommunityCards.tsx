import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
  createAnimation,
} from "@ionic/react";
import { useRef } from "react";
import ViewTweet from "../pages/ViewTweet";

const CommunityCards: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  // const enterAnimation = (baseEl: HTMLElement) => {
  //   const root = baseEl.shadowRoot;

  //   const backdropAnimation = createAnimation()
  //     .addElement(root?.querySelector('ion-backdrop')!)
  //     .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

  //   const wrapperAnimation = createAnimation()
  //     .addElement(root?.querySelector('.modal-wrapper')!)
  //     .keyframes([
  //       { offset: 0, opacity: '0', transform: 'scale(0)' },
  //       { offset: 1, opacity: '0.99', transform: 'scale(1)' },
  //     ]);

  //   return createAnimation()
  //     .addElement(baseEl)
  //     .easing('ease-out')
  //     .duration(500)
  //     .addAnimation([backdropAnimation, wrapperAnimation]);
  // };

  // const leaveAnimation = (baseEl: HTMLElement) => {
  //   return enterAnimation(baseEl).direction('reverse');
  // };
  return (
    <>
      <a href="/view-tweet" style={{ textDecoration: "none" }}>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            {/* <IonCardTitle>Card Title</IonCardTitle> */}
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less. <br />
            <br />
            <IonCardSubtitle># Hashtags</IonCardSubtitle>
            <div style={{ color: "blue" }}>
              #Environment #Nature #SaveEarth #PlantTrees
            </div>
          </IonCardContent>
          <IonItem>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Shashwatshah02</IonLabel>
          </IonItem>
        </IonCard>
      </a>
      {/* <IonModal
          id="example-modal"
          ref={modal}
          trigger="view-tweet-modal"
          // enterAnimation={enterAnimation}
          // leaveAnimation={leaveAnimation}
      >
              <IonContent>
                  <IonToolbar>
                      <IonTitle>View Tweet</IonTitle>
                      <IonButtons slot="end">
                          <IonButton onClick={() => dismiss()}>Close</IonButton>
                      </IonButtons>
                  </IonToolbar>
                  <ViewTweet />
              </IonContent>
          </IonModal>*/}
    </>
  );
};
export default CommunityCards;
