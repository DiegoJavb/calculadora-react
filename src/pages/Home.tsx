import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Calculator from '../components/Calculator';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Calculator />
      </IonContent>
    </IonPage>
  );
};

export default Home;
