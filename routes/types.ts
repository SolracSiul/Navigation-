import { NavigatorScreenParams } from '@react-navigation/native';

// Tipos para a navegação em Stack
export type RootStackParamList = {
  Drawer: undefined;  // Drawer não recebe parâmetros
  ProductDetails: { productId: string };  // ProductDetails espera um parâmetro productId
};

// Tipos para a navegação em Drawer
export type DrawerParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;  // Tabs referenciando o Navigator do Tab
  Settings: undefined;
};

// Tipos para a navegação em Tabs
export type TabParamList = {
  Feed: undefined;
  Profile: undefined;
  Notifications: undefined;
  Messages: undefined;
};
