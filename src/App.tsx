import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonIcon,
  IonLabel,
  IonModal,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Auth from "./pages/Auth";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import ForgotPass from "./components/ForgotPass";
import {
  library,
  homeOutline,
  radio,
  search,
  personCircleOutline,
  calendarOutline,
  discOutline,
  cardSharp,
} from "ionicons/icons";
import Home from "./pages/Home";
import Coupons from "./pages/Coupons";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import { useRef } from "react";

setupIonicReact();

const App: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/auth">
              <Auth />
            </Route>
            <Route exact path="/">
              <Redirect to="/auth" />
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPass />
            </Route>
            <Route path="/home" render={() => <Home />} exact={true} />
            <Route path="/coupons" render={() => <Coupons />} exact={true} />
            <Route
              path="/community-forum"
              render={() => <Community />}
              exact={true}
            />
            <Route path="/profile" render={() => <Profile />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              {/* <IonLabel>Listen now</IonLabel> */}
            </IonTabButton>

            <IonTabButton tab="Coupons" href="/coupons">
              <IonIcon icon={cardSharp} />
              {/* <IonLabel>Radio</IonLabel> */}
            </IonTabButton>

            <IonTabButton tab="Community" href="/community-forum">
              <IonIcon icon={calendarOutline} />
              {/* <IonLabel>Library</IonLabel> */}
            </IonTabButton>

            <IonTabButton tab="Profile" href="/profile">
                <IonIcon icon={personCircleOutline} />
              {/* <IonLabel>Search</IonLabel> */}
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
