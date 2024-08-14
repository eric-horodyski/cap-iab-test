import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  InAppBrowser,
  iOSAnimation,
  iOSViewStyle,
  ToolbarPosition,
} from "@capacitor/inappbrowser";
import "./Home.css";

const launchInAppBrowser = async () => {
  await InAppBrowser.openInWebView({
    url: "https://google.com",
    options: {
      showURL: false,
      showToolbar: false,
      clearCache: false,
      clearSessionCache: false,
      mediaPlaybackRequiresUserAction: false,
      closeButtonText: "Done",
      toolbarPosition: ToolbarPosition.TOP,
      showNavigationButtons: false,
      leftToRight: true,
      android: {
        allowZoom: false,
        hardwareBack: true,
        pauseMedia: true,
      },
      iOS: {
        allowOverScroll: false,
        enableViewportScale: false,
        allowInLineMediaPlayback: false,
        surpressIncrementalRendering: true,
        viewStyle: iOSViewStyle.FULL_SCREEN,
        animationEffect: iOSAnimation.CROSS_DISSOLVE,
      },
    },
  });
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton
          style={{ marginTop: "150px" }}
          expand="block"
          onClick={launchInAppBrowser}
        >
          Link to terms and conditions
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
