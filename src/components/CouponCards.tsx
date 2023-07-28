import { IonCard, IonCardContent } from "@ionic/react";

const CouponCards: React.FC = ()=>{
    return (
        <a href="/view-tweet" style={{ textDecoration: "none" }}>
                  <IonCard className = 'ion-no-margin'>
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                    />

                    <IonCardContent className="ion-no-padding">
                      <p style={{ padding: "7px", textAlign: "center" }}>
                        15% for you and 15% for 🌳
                      </p>
                    </IonCardContent>
                  </IonCard>
                </a>
    );
}
export default CouponCards;