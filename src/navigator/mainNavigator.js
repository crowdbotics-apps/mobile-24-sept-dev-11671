import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen311130Navigator from '../features/BlankScreen311130/navigator';
import BlankScreen211129Navigator from '../features/BlankScreen211129/navigator';
import BlankScreen111128Navigator from '../features/BlankScreen111128/navigator';
import BlankScreen011127Navigator from '../features/BlankScreen011127/navigator';
import BlankScreen411126Navigator from '../features/BlankScreen411126/navigator';
import BlankScreen211124Navigator from '../features/BlankScreen211124/navigator';
import BlankScreen011121Navigator from '../features/BlankScreen011121/navigator';
import BlankScreen011115Navigator from '../features/BlankScreen011115/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen311130: { screen: BlankScreen311130Navigator },
BlankScreen211129: { screen: BlankScreen211129Navigator },
BlankScreen111128: { screen: BlankScreen111128Navigator },
BlankScreen011127: { screen: BlankScreen011127Navigator },
BlankScreen411126: { screen: BlankScreen411126Navigator },
BlankScreen211124: { screen: BlankScreen211124Navigator },
BlankScreen011121: { screen: BlankScreen011121Navigator },
BlankScreen011115: { screen: BlankScreen011115Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
