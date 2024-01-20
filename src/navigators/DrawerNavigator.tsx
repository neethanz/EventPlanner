import {createDrawerNavigator} from '@react-navigation/drawer';
import AppDrawer from '../screens/AppDrawer';
import HomeStackNavigator from './HomeStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={_ => <AppDrawer />}>
      <Drawer.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
