import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../components/Header";
import FloatingButton from "../components/FloatingButton";
import { useEffect, useRef, useState } from "react";
import { filter, personOutline } from "ionicons/icons";
import Auth from "./Auth";
import EditProfile from "./EditProfile";
import Profile from "./Profile";
import CouponCards from "../components/CouponCards";
import "./Coupons.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Coupons: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [page, setPage] = useState("login");
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filters, setFilters] = useState("");
  const [search, setSearch] = useState("");

  let products = [
    {
      id: 1,
      type: "environment",
      title: "Our savior.",
      description: "15% for you and 15% for 🌳",
      img: "https://images.unsplash.com/photo-1595875197145-a0d6828b58e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Silhoutte of Mountains",
    },

    {
      id: 3,
      type: "water",
      title: "Closer to nature.",
      description: "15% for you and 15% for 🌳",
      img: "https://images.unsplash.com/photo-1533577254044-3c2b4b31183c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Silhoutte of Mountains",
    },
    {
      id: 4,
      type: "environment",
      title: "Protect and preserve",
      description: "15% for you and 15% for 🌳",
      img: "https://images.unsplash.com/photo-1614028901211-995c6c474d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      alt: "Silhoutte of Mountains",
    },
    {
      id: 5,
      type: "water",
      title: "Nature is the nurturer.",
      description: "15% for you and 15% for 🌳",
      img: "https://images.unsplash.com/photo-1560787139-bcec5864f0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      alt: "Silhoutte of Mountains",
    },
    {
      id: 6,
      type: "environment",
      title: "Feel it close to you.",
      description: "15% for you and 15% for 🌳",
      img: "https://images.unsplash.com/photo-1533577254044-3c2b4b31183c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Silhoutte of Mountains",
    },
    {
      id: 2,
      type: "environment",
      title: "Know nature closely.",
      description: "15% for you and 15% for 🌳",
      img: "https://images.unsplash.com/photo-1595875197145-a0d6828b58e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Silhoutte of Mountains",
    },
  ];
  const handleInput = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    setSearch(query);
  };
  let filteredData = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  useEffect(() => {
    filteredData = products.filter((product) =>
      product.type.toLowerCase().includes(filters)
    );
  }, []);

  return (
    <IonPage>
      {/* <Header /> */}
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Coupons</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton
              id="open-modal-coupons-header"
              onClick={() => setIsOpenHeader(true)}
            >
              <IonIcon icon={personOutline} />
            </IonButton>
            <IonModal
              className="auto-height"
              trigger="open-modal-coupons-header"
              isOpen={isOpenHeader}
              initialBreakpoint={1}
              breakpoints={[0, 0.8]}
            >
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Modal</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => setIsOpenHeader(false)}>
                      Close
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding" overflow-y="scroll">
                <div className="block" style={{ padding: "5px" }}>
                  {page === "" ? <Auth></Auth> : null}
                  {page === "login" ? <EditProfile></EditProfile> : null}
                  {page === "complete-profile" ? <Profile></Profile> : null}
                </div>
              </IonContent>
            </IonModal>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Coupons</IonTitle>
            <IonButtons collapse={true} slot="end">
              <IonButton
                id="open-modal-coupons-title"
                onClick={() => setIsOpenTitle(true)}
              >
                <IonIcon icon={personOutline} />
              </IonButton>
              <IonModal
                className="auto-height"
                trigger="open-modal-coupons-title"
                isOpen={isOpenTitle}
                initialBreakpoint={1}
                breakpoints={[0, 0.8]}
              >
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Modal</IonTitle>
                    <IonButtons slot="end">
                      <IonButton onClick={() => setIsOpenTitle(false)}>
                        Close
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding" overflow-y="scroll">
                  <div className="block" style={{ padding: "5px" }}>
                    {page === "" ? <Auth></Auth> : null}
                    {page === "login" ? <EditProfile></EditProfile> : null}
                    {page === "complete-profile" ? <Profile></Profile> : null}
                  </div>
                </IonContent>
              </IonModal>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div
          className="mx-auto"
          id="container-coupons"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "400px",
            maxWidth: "100%",
            margin: "auto",
          }}
        >
          <div
            style={{
              width: "400px",
              maxWidth: "100%",
              display: "flex",
              padding: "0 5px 0 0 ",
            }}
          >
            <IonSearchbar onIonInput={(ev) => handleInput(ev)}></IonSearchbar>
            <IonButtons slot="primary">
              <IonButton
                fill="outline"
                id="open-modal-filter"
                onClick={() => setIsOpenFilter(true)}
              >
                filter
                <IonIcon slot="end" icon={filter}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonModal
              className="auto-height"
              trigger="open-modal-filter"
              isOpen={isOpenFilter}
              initialBreakpoint={0.4}
              breakpoints={[0, 0.8]}
            >
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Modal</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => setIsOpenFilter(false)}>
                      Close
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding" overflow-y="scroll">
                <IonList>
                  <IonItem>
                    <IonButton
                      fill="clear"
                      color={"light"}
                      onClick={() => {
                        setFilters("all");
                      }}
                    >
                      All
                    </IonButton>
                  </IonItem>
                  <IonItem>
                    <IonButton
                      fill="clear"
                      color={"light"}
                      onClick={() => {
                        setFilters("env");
                      }}
                    >
                      Environment
                    </IonButton>
                  </IonItem>
                  <IonItem>
                    <IonButton
                      fill="clear"
                      color={"light"}
                      onClick={() => {
                        setFilters("nat");
                      }}
                    >
                      Nature
                    </IonButton>
                  </IonItem>
                </IonList>
              </IonContent>
            </IonModal>
          </div>
          <Masonry columnsCount={2}>
            {filteredData.map((product) => {
              return (
                <a href="/view-coupon" style={{ textDecoration: "none" }}>
                <IonCard className="ion-no-margin" style={{ margin: "5px" }}>
                  <img alt={product.alt} src={product.img} />

                  <IonCardContent className="ion-no-padding">
                    <p style={{ padding: "7px", textAlign: "center" }}>
                      {product.title}
                    </p>
                  </IonCardContent>
                </IonCard>
                </a>
              );
            })}
          </Masonry>

          {/* <IonGrid>
            <IonRow>
              <IonCol size="6">
                <CouponCards></CouponCards>
              </IonCol>
              <IonCol size="6">
                <CouponCards></CouponCards>
              </IonCol>
              <IonCol size="6">
                <CouponCards></CouponCards>
              </IonCol>
              <IonCol size="6">
                <CouponCards></CouponCards>
              </IonCol>
            </IonRow>
          </IonGrid> */}
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Coupons;
