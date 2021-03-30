import {createDrawerNavigator} from 'react-navigation-drawer';
import AskLandfills from '../screens/AskLandfills';
import MyProfileScreen from '../screens/MyProfileScreen';
import DonateLandfills from "../screens/DonateLandfills";
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    AskLandfills : {
        screen : AskLandfills
    },
    MyProfileScreen : {
        screen : MyProfileScreen
    },
    DonateLandfills : {
        screen : DonateLandfills
    }
},
{
    contentComponent : CustomSideBarMenu
},
{
    initialRouteName : 'MyProfileScreen'
})