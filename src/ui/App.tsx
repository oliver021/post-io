import SingalR from "./components/signalr"
import MainLayout from './components/layout/main';
import NavigationService, { InfoRecord } from "../functions/navigationService";
import {useState} from 'react';


export default function App() {
  const [info, setInfo] = useState<InfoRecord>(new Map);
  const navService = new NavigationService();
  navService.bind(setInfo);
  navService.reciveValue(info);
  
  navService.mapPage("welcome", () => <p>hello world!!</p>);

  return <MainLayout nav={navService}>
      <SingalR/>
    </MainLayout>
  
}
