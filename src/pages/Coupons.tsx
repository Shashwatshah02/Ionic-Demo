import {
  IonAccordion,
  IonAccordionGroup,
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
import { bulb, filter, personOutline } from "ionicons/icons";
import Auth from "./Auth";
import EditProfile from "./EditProfile";
import Profile from "./Profile";
import CouponCards from "../components/CouponCards";
import one from "../images/number-1.png";
import two from "../images/number-2.png";
import three from "../images/number-3.png";
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
          <IonTitle>Save $ & the 🌎</IonTitle>
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
            <IonTitle
              className="ion-no-padding ion-padding-horizontal"
              size="large"
            >
              Save $ & the 🌎
            </IonTitle>
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
          style={{
            width: "400px",
            maxWidth: "100%",
            margin: "auto",
            padding: "15px 10px 0 10px",
          }}
        >
          <IonAccordionGroup className="ion-padding-bottom">
            <IonAccordion value="first">
              <IonItem slot="header" color="dark">
                <IonLabel>How it works</IonLabel>
              </IonItem>
              <div
                style={{ padding: "0 20px" }}
                className="ion-padding"
                slot="content"
              >
                <br />
                <div style={{ padding: "5px 0", display: "flex" }}>
                  <img
                    src={one}
                    alt=""
                    height={30}
                    style={{ padding: "0 15px 0 0" }}
                  />
                  <div style={{ margin: "auto 0" }}>
                    Use our coupon on the brand’s website
                  </div>
                </div>
                <div style={{ padding: "5px 0", display: "flex" }}>
                  <img
                    src={two}
                    alt=""
                    height={30}
                    style={{ padding: "0 15px 0 0" }}
                  />
                  <div style={{ margin: "auto 0" }}>Get upfront discounts</div>
                </div>
                <div style={{ padding: "5px 0", display: "flex" }}>
                  <img
                    src={three}
                    alt=""
                    height={30}
                    style={{ padding: "0 15px 0 0" }}
                  />
                  <div style={{ margin: "auto 0" }}>
                    We’ll plant 🌳 with our entire affiliate fee
                  </div>
                </div>
                <br />
                <p>
                  EarthTag is an affiliate network that lists coupons from
                  conscious brands on its website. When you use a coupon, you
                  receive an upfront discount, and EarthTag earns a referral
                  fee. 100% of our affiliate fee goes towards planting 🌳. We
                  keep absolutely nothing, and to demonstrate our authenticity,
                  we have made our ledger public. On our website, you can track
                  all the orders, the amount of affiliate fee it generated and
                  the 🌳 planted. By using EarthTag&apos;s coupons, you save
                  money, support conscious brands, and support our environment.
                </p>
                <h5>
                  <strong>100% to 🌳 with 100% transparency</strong>
                </h5>
                <p>
                  When you use our coupon you get an upfront discount. 30-45
                  days after your order the brand gives us an affiliate fee,
                  provided you do not cancel or return the order. We donate our
                  entire share to our 🌳 planting NGOs. All the details
                  Including tree planting photos, location and other details are
                  shared with you on and also displayed here.
                </p>
                We started on <strong> June 18 2023 </strong>and since then we
                have received <strong> 0 </strong> orders, earned INR{" "}
                <strong>0</strong> affiliate fee, planted <strong>0</strong>
                🌳s.
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </div>
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
            padding: "15px 10px 0 10px",
          }}
        >
          <div
            style={{
              width: "400px",
              maxWidth: "100%",
              display: "flex",
              padding: "0 0 0 5px ",
            }}
          >
            <IonSearchbar
              onIonInput={(ev) => handleInput(ev)}
              className="ion-no-padding ion-padding-end"
            ></IonSearchbar>
            <IonButtons slot="primary">
              <IonButton
                fill="outline"
                id="open-modal-filter"
                onClick={() => setIsOpenFilter(true)}
              >
                <IonIcon icon={filter}></IonIcon>
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
        <div
          style={{
            width: "400px",
            maxWidth: "100%",
            margin: "auto",
            padding: "10px",
          }}
        >
          <IonButton expand="block">
            <IonIcon slot="start" icon={bulb}></IonIcon>
            Contribute with your time
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Coupons;
