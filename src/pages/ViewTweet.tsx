import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack, imageOutline, imageSharp } from "ionicons/icons";
import { useState } from "react";
import ImageGallery from "react-image-gallery";

const ViewTweet: React.FC = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  const [gallery, setGallery] = useState("show less");
  const handleClick = () => {
    if (gallery == "show more") {
      setGallery("show less");
    } else {
      setGallery("show more");
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="clear" onClick={() => history.back()} slot="start">
            <IonIcon slot="icon-only" icon={arrowBack} />
          </IonButton>
          <IonTitle>View Tweet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div
          className="mx-auto"
          style={{
            width: "400px",
            maxWidth: "100%",
            margin: "auto",
          }}
        >
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <div style={{ textAlign: "right" }}>
            <IonButton
              color={"dark"}
              size="small"
              id="view-all-images"
              onClick={handleClick}
            >
              View More +{/* <IonIcon name={imageOutline}></IonIcon> */}
            </IonButton>
            {gallery == "show more" ? (
              <>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ea sit
          quo fugiat maxime pariatur vero nam earum, exercitationem consectetur
          excepturi illo quidem nisi harum amet aliquam nulla ipsa culpa.
          <br />
          <br />
          <IonCardSubtitle># Hashtags</IonCardSubtitle>
          <div style={{ color: "blue" }}>
            #Environment #Nature #SaveEarth #PlantTrees
          </div>
          <br />
          <IonItem className="ion-padding-bottom ion-margin-end">
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Shashwatshah02</IonLabel>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default ViewTweet;
