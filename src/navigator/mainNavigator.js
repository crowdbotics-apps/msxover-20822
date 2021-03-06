import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList115555Navigator from '../features/ArticleList115555/navigator';
import ArticleList115554Navigator from '../features/ArticleList115554/navigator';
import ArticleList115553Navigator from '../features/ArticleList115553/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList115555: { screen: ArticleList115555Navigator },
ArticleList115554: { screen: ArticleList115554Navigator },
ArticleList115553: { screen: ArticleList115553Navigator },

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
