import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { NotificationClickEvent, OneSignal } from 'react-native-onesignal';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';
import { tagUserInfoCreate } from './src/notifications/notificationsTag';
import { useEffect } from 'react';

OneSignal.initialize('b86b0deb-45f9-4595-915d-07f982c08da5');
OneSignal.Notifications.requestPermission(true);

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  useEffect(() => {
    const handleNotificationClick = (event: NotificationClickEvent) => {
      const { actionId } = event.result;

      switch (actionId) {
        case '1':
          console.log('Ver todos')
          break;
        case '2':
          console.log('Ver Pedido')
          break;
        default:
          console.log('Nenhum botãod e ação selecionado')
      }
    }

    OneSignal.Notifications.addEventListener("click", handleNotificationClick)

    return () =>
      OneSignal.Notifications.removeEventListener("click", handleNotificationClick)
  }, [])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}