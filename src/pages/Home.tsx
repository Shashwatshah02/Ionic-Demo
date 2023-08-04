import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonAccordion,
  IonAccordionGroup,
  IonLabel,
} from "@ionic/react";
import Header from "../components/Header";
import { add, filter, personOutline, star, timeOutline } from "ionicons/icons";
import FloatingButton from "../components/FloatingButton";
import { useRef, useState } from "react";
import Auth from "./Auth";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import Modal from "../components/Modal";
import insta from "../images/insta_icon.png";

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [page, setPage] = useState("complete-profile");
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  // const handleChange = () => {
  //   if (page == "") {
  //     setPage("login");
  //   } else if (page == "login") {
  //     setPage("complete-profile");
  //   } else if (page == "complete-profile") {
  //     setPage("view-profile");
  //   }
  // };
  return (
    <IonPage>
      {/* <Header /> */}
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          {/* <IonButtons collapse={true} slot="end">
            <IonButton
              id="open-modal-home-header"
              onClick={() => setIsOpenHeader(true)}
            >
              <IonIcon icon={personOutline} />
            </IonButton>
            <IonModal
              className="auto-height"
              trigger="open-modal-home-header"
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
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle
              className="ion-no-padding ion-padding-horizontal"
              size="large"
            >
              Home
            </IonTitle>
            {/* <IonButtons collapse={true} slot="end">
              <IonButton
                id="open-modal-home-title"
                onClick={() => setIsOpenTitle(true)}
              >
                <IonIcon icon={personOutline} />
              </IonButton> */}
            {/* <Modal title = 'Shashwat' mode={isOpenTitle} handleClick = {() => setIsOpenTitle(false)}/> */}
            {/* <IonModal
                className="auto-height"
                trigger="open-modal-home-title"
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
            </IonButtons> */}
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
          <iframe
            width="100%"
            height="650px"
            src="https://www.youtube.com/embed/PXr21AW6f_A"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            style={{ borderRadius: "10px" }}
          ></iframe>
          <IonText>
            <h3>
              <strong>Subscribe</strong>
            </h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            vel error vitae saepe ad.
          </IonText>
          <div
            style={{
              display: "flex",
              paddingTop: "10px",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <IonItem className="ion-no-padding">
              <IonInput
                type="email"
                label="Enter your e-mail address"
                labelPlacement="floating"
                placeholder="info@gmail.com"
                // style={{width:'400px', maxwidth:'100%'}}
              ></IonInput>
            </IonItem>
            <IonButton
              className="ion-no-margin ion-margin-vertical text-left"
              size="default"
            >
              Subscribe
            </IonButton>
          </div>
          <IonButton className="item-left" expand="block">
            <img
              src={insta}
              alt="instagram logo"
              style={{ height: "20px", padding: "0 5px" }}
            />
            Follow us on Instagram
          </IonButton>
          {/* <div
            style={{
              display: "flex",
              margin: "10px",
              padding: "20px 20px 0 20px",
              justifyContent: "space-around",
              width: "400px",
              maxWidth: "100%",
            }}
          >
            <a href="https://www.instagram.com/earthtag.ooo/">
              <img
                src={insta}
                alt="instagram logo"
                style={{ height: "20px" }}
              />
            </a>
          </div> */}
          <IonText style={{ textAlign: "justify" }}>
            <h3>
              <strong>About us</strong>
            </h3>

            <h6>
              <strong>Our Story </strong>
            </h6>
            <p>
              EarthTag is on a mission to raise people&apos;s awareness and give
              them a means to fight climate change. An affiliate network that
              connects conscious brands to customers and plants trees for every
              order. 100% of EarthTag&apos;s affiliate fee goes toward planting
              trees with 100% transparency.
            </p>
            <br />
            <h6 style={{ lineHeight: "1.5" }}>
              <strong>
                Climate change isn&apos;t a future possibility but an urgent
                reality
              </strong>
            </h6>
            <p>
              Did you know that scientists first warned us about the
              heat-trapping effects of burning coal, gas, and oil 150 years ago?
              Fast forward to 2023, and the consequences of our inaction are
              apparent. The magnitude and frequency of forest fires, flooding,
              droughts, heatwaves, hurricanes and storms keeps increasing. Data
              suggests that the number of extreme weather events has doubled in
              the last 40 years.{" "}
            </p>
            <p>
              The melting of polar ice caps and glaciers has accelerated, posing
              a threat to coastal communities and giving rise to more supersized
              hurricanes, typhoons, and cyclones fueled by a warming ocean. Our
              vital ecosystems are reaching their limits, resulting in the loss
              of biodiversity and irreversible damage to habitats. We are in the
              midst of the sixth mass extinction, with up to 200 species going
              extinct every single day. These changes have far-reaching
              consequences for agriculture, as shifts in rainfall patterns and
              temperature extremes disrupt crop production.{" "}
            </p>
            <p>
              Our planet is undergoing unprecedented transformations. It&apos;s
              crucial to recognize the climate crisis is not a future
              possibility but an urgent reality that demands our immediate
              attention and action. Climate change is no longer just an
              environmental issue, but a threat to global health, food security,
              economic stability, and social justice.
            </p>
            <IonAccordionGroup className="ion-padding-bottom">
              <IonAccordion
                value="first"
                style={{
                  border: "0.1px solid",
                  borderRadius: "10px",
                  backgroundColor: "#F4F5F8",
                }}
              >
                <IonItem slot="header" color={'dark'}>
                  <IonLabel>About the founder</IonLabel>
                </IonItem>

                <div className="ion-padding" slot="content">
                  Hi, I&apos;m Rom, a social entrepreneur and the founder of
                  EarthTag. I believe that our passion leads us to our cosmic
                  destiny, and everything we need for our journey is gifted to
                  us through people, beliefs, skills, situations, and
                  experiences. Growing up in a Jain household, I learned the
                  value of respecting all life forms and resources from a young
                  age. After over a decade of working with startups, I noticed a
                  common thread in the projects that truly brought me alive was
                  impact. Now, in 2023, I&apos;ve discovered what feels like my
                  Ikigai; to build and support ventures that make impact
                  accessible to everyone. For this journey, I decided to
                  reinvent myself from Romil Meghani to rom, and I invite you to
                  join me in leaving the world better than we got it.
                  <br />I love nature and the changes I have myself witnessed in
                  my lifetime are undeniable. I went for my first trek in the
                  mountains 20 years ago and just over the last two decades
                  landslides, forest fires, and erratic weather patterns have
                  disrupted my plans numerous times and reduced my trips.
                  Wherever I go people have the same narrative about how climate
                  change is affecting their lives. In just 50 years, a large
                  lake in my father&apos;s hometown, where he used to swim
                  regularly, has completely dried up. Mumbai, where I live, has
                  recorded its highest temperature this year, soaring six
                  degrees above normal. These changes are not unique; they are
                  happening all around the world and as time passes it will only
                  accelerate. What troubles me more is how climate change
                  intensifies existing problems. It acts as a &quot;threat
                  multiplier,&quot; worsening poverty, hunger, diseases, and
                  political crises. Vulnerable communities bear the brunt,
                  making these challenges even more severe. “
                </div>
              </IonAccordion>
            </IonAccordionGroup>
            <h3>
              <strong>Come Together</strong>
            </h3>

            <p>
              Thank you for taking the first step. This affiliate program is
              just the beginning. EarthTag mission is to build a community,
              raise awareness and give people a means to take action. We hope
              you embark with us on this journey to leave our planet better than
              we got it.
            </p>
            <h3>
              <strong>Talk about it</strong>
            </h3>

            <p>
              While there is a lot one can do, the simplest and most effective
              thing is to talk about it and encourage sustainable choices.
            </p>
          </IonText>
          <IonAccordionGroup className="ion-padding-bottom">
            <IonAccordion
              value="first"
              style={{ border: "0.1px solid", borderRadius: "10px" }}
            >
              <IonItem slot="header" color="dark">
                <IonLabel>Talk about climate change</IonLabel>
              </IonItem>
              <div
                className="ion-padding"
                slot="content"
                style={{ backgroundColor: "#F4F5F8" }}
              >
                So much is happening but no one talks about it. There are no
                emergency meetings, no headlines, no breaking news. No one is
                acting as if we were in a crisis. Scientists and advocates are
                trying their best but it just won&apos;t make mainstream media.
                <br />
                <br />
                People continue to do what they do because the vast majority
                doesn&apos;t have a clue about the actual consequences on our
                everyday life, and they don&apos;t know that rapid change is
                required. Talking about climate change is the best way to fix
                it. It serves as a starting point for acknowledging the issue
                and making it a part of people&apos;s day to day awareness.
                Fighting climate change is a complex problem that requires
                collective effort. By engaging in conversations about climate
                change, people can educate themselves, share knowledge and
                inspire action.
              </div>
            </IonAccordion>
          </IonAccordionGroup>
          <IonAccordionGroup className="ion-padding-bottom">
            <IonAccordion
              value="first"
              style={{ border: "0.1px solid", borderRadius: "10px" }}
            >
              <IonItem slot="header" color="dark">
                <IonLabel>Encourage Sustainable Choices</IonLabel>
              </IonItem>
              <div
                className="ion-padding"
                slot="content"
                style={{ backgroundColor: "#F4F5F8" }}
              >
                María Fernanda Espinosa Garcés, the President of the General
                Assembly said in 2019 at the UN headquarters in New York that we
                are the last generation that can prevent irreparable damage to
                the planet and we have 11 years to do so. It&apos;s 2023 and the
                small window of hope may be diminishing but it&apos;s still
                there. If we act together quickly, we can still control or even
                reverse the course of this crisis. <br />
                <br />
                We don&apos;t need people to get afraid because fear makes us
                run away from the bear. Rather build rational hope, optimism and
                encourage action that motivates us for long-term, sustained
                change. Every time we feel hot, experience erratic weather or
                hear about a catastrophe it should motivate us to act. If the
                crisis is a result of our actions then it is our actions alone
                that can and will fix it. It&apos;s just 1 straw said 8 billion
                people, no more. Every action counts and adds up! <br />
                <br />
                &apos;Small acts, when multiplied by millions of people, can
                transform the world.&apos; - Howard Zinn.
              </div>
            </IonAccordion>
          </IonAccordionGroup>
          <IonAccordionGroup className="ion-padding-bottom">
            <IonAccordion
              value="first"
              style={{ border: "0.1px solid", borderRadius: "10px" }}
            >
              <IonItem slot="header" color="dark">
                <IonLabel>Be a conscious consumer</IonLabel>
              </IonItem>
              <div
                className="ion-padding"
                slot="content"
                style={{ backgroundColor: "#F4F5F8" }}
              >
                Considering the impact of our purchases on the environment is
                called conscious consumerism. Everytime we buy something the
                Earth pays too. For every cotton t-shirt you buy, the Earth has
                already paid for 2700 litres of fresh water! It takes 165 pounds
                or 75 kilograms of raw materials, including metals, minerals,
                and fossil fuels to make one smartphone. The resources required
                for most products are almost as shocking. <br />
                <br />
                Unfortunately, most companies don&apos;t care and most people
                don&apos;t know. The performance of CEOs of McDonalds or Shein
                is measured by the revenue and profits their companies make, not
                the health of their customers or environmental damage. Realising
                this and acting accordingly is how we can bring change. If we
                start making sustainable choices, the companies will be forced
                to change too. Remember, every time we pay we cast a vote for
                the world we want to create. Vote for a healthier future for our
                planet and us.
              </div>
            </IonAccordion>
          </IonAccordionGroup>
          <IonButton expand="block" className="ion-margin-bottom">
            <IonIcon slot="start" icon={star}></IonIcon>
            Give ideas for our community
          </IonButton>
          <IonButton className="text-left" slot="start" expand="block">
            <IonIcon slot="start" icon={timeOutline}></IonIcon>
            Contribute with your time
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Home;
