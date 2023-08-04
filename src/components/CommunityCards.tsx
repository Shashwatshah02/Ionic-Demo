import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonChip,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
  createAnimation,
} from "@ionic/react";
import { useRef, useState } from "react";
import mountains from "../images/mountains.jpg";
import ViewTweet from "../pages/ViewTweet";
import Placeholder from "../images/Placeholder.jpg";

const CommunityCards: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

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
      <IonCard className="ion-no-margin">
        <a href="/view-tweet" style={{ textDecoration: "none" }}>
          <img id="refactor" alt="Silhouette of mountains" src={mountains} />
        </a>

        <IonCardContent>
          <a href="/view-tweet" style={{ textDecoration: "none", color:'black'}}>
            Here's a small text description for the card content. Nothing more,
            nothing less. <br />
          </a>
            <div style={{ color: "blue", paddingBottom:'8px' }}>
              #Environment #Nature #SaveEarth #PlantTrees
            </div>
          <IonItem className="ion-no-padding" id="open-modal" onClick={() => setIsOpenProfile(true)} lines="none">
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Shashwatshah02</IonLabel>
          </IonItem>
          <IonModal
            className="auto-height"
            trigger="open-modal"
            isOpen={isOpenProfile}
            initialBreakpoint={1}
            breakpoints={[0, 1]}
          >
            <IonHeader>
              <IonToolbar>
                <IonTitle>Modal</IonTitle>
                <IonButtons slot="end">
                    <IonButton onClick={() => setIsOpenProfile(false)}>
                      Close
                    </IonButton>
                  </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent
              className="ion-padding"
              overflow-y="scroll"
            >
              User Profile here
            </IonContent>
          </IonModal>
        </IonCardContent>
      </IonCard>
        <IonCard className='ion-no-margin ion-margin-top'>
          {/* <img id="refactor" alt="Silhouette of mountains" src={} /> */}

          <IonCardContent>
      <a href="/view-tweet" style={{ textDecoration: "none", color:'black' }}>
            Here's a small text description for the card content. Nothing more,
            nothing less. <br />
            <div style={{ color: "blue", paddingBottom:'8px' }}>
              #Environment #Nature #SaveEarth #PlantTrees
            </div>
                </a>
                <IonItem className="ion-no-padding" id="open-modal" onClick={() => setIsOpenProfile(true)} lines="none">
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Shashwatshah02</IonLabel>
          </IonItem>
          <IonModal
            className="auto-height"
            trigger="open-modal"
            isOpen={isOpenProfile}
            initialBreakpoint={1}
            breakpoints={[0, 1]}
          >
            <IonHeader>
              <IonToolbar>
                <IonTitle>Modal</IonTitle>
                <IonButtons slot="end">
                    <IonButton onClick={() => setIsOpenProfile(false)}>
                      Close
                    </IonButton>
                  </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent
              className="ion-padding"
              overflow-y="scroll"
            >
              <div
          className="mx-auto"
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
          <IonAvatar style={{height:'100px', width:'100px'}}>
            <img alt="Silhouette of a person's head" src={Placeholder} style={{}}/>
          </IonAvatar> 
          <h4>
            <strong>Your Name Here</strong>
          </h4>
          <div style={{ paddingBottom: "30px" }}>City, Country</div>
          <div style={{ textAlign: "center" }}>
            <IonChip>Default</IonChip>
            <IonChip color="primary">Primary</IonChip>
            <IonChip color="secondary">Secondary</IonChip>
            <IonChip color="medium">Me</IonChip>
            <IonChip color="tertiary">Tertiary</IonChip>
            <IonChip color="success">Success</IonChip>
            <IonChip color="warning">Warning</IonChip>
            <IonChip color="danger">Danger</IonChip>
            <IonChip color="medium">Medium</IonChip>
          </div>
          <div style={{ textAlign: "left", paddingTop: "30px", paddingBottom:'10px' }}>
            <h6>
              <strong>About yourself</strong>
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              necessitatibus earum libero corrupti minima voluptas quo?
              Aspernatur voluptatum, aut perspiciatis quo aperiam fugiat placeat
              porro officia est labore ratione. Libero.
            </p>
          </div>
          </div>
            </IonContent>
          </IonModal>
          </IonCardContent>
        </IonCard>
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
