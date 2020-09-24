import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen311125Navigator from '../features/BlankScreen311125/navigator';
import BlankScreen211124Navigator from '../features/BlankScreen211124/navigator';
import BlankScreen011121Navigator from '../features/BlankScreen011121/navigator';
import BlankScreen011115Navigator from '../features/BlankScreen011115/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen311125: { screen: BlankScreen311125Navigator },
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
