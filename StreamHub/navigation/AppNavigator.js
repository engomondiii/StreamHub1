// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';




//HomeScreen and its components
import HomeScreen from '../screens/Home/HomeScreen';
import CreatePost from '../components/Home/CreatePost'
import Favourites from '../components/Home/Favourites';








import LandingScreen from '../screens/Auth/LandingScreen';
import SplashScreen from '../screens/Setup/SplashScreen';
import SetupScreen from '../screens/Setup/SetupScreen';
import WelcomeScreen from '../screens/Setup/WelcomeScreen';

// Import other screens based on your project structure
import UserProfile from '../components/Home/UserProfile';
import GetLive from '../components/Home/GetLive';
import WatchParties from '../components/Home/WatchParties';
import ExploreCategories from '../components/Home/ExploreCategories'
import GroupLivestream from '../components/Home/GroupLivestream';
import UploadContent from '../components/Home/UploadContent';
import VirtualHangouts from '../components/Home/VirtualHangouts';
import Recommended from '../components/Home/Recommended';
import Following from '../components/Home/Following';
import HotLivestream from '../components/Home/HotLivestream';
import Chat from '../components/Home/Chat';
import Friends from '../components/Home/Friends';
import Downloads from '../components/Home/Downloads';
import Search from '../components/Home/Search'
import DigitalAlbum from '../components/Home/DigitalAlbum'
import RaspberryPi from '../components/Home/RaspberryPi'
import Notifications from '../components/Home/Notifications'
import AlbumDetails from '../components/Home/AlbumDetails'
import CreateWatchParty from '../components/Home/CreateWatchParty'; // Import the CreateWatchParty component

import JoinWatchParty from '../components/Home/JoinWatchParty';
import WatchPartyDetails from '../components/Home/WatchPartyDetails';
import ChatScreen from '../components/Home/ChatScreen';

//Settings and its components
import Settings from '../components/Home/Settings'; // Import the Settings component
import FAQScreen from '../components/Home/FAQScreen'
import AboutUs from '../components/Home/AboutUs';
import ContactSupport from '../components/Home/ContactSupport';
import ManageFriendList from '../components/Home/ManageFriendList';
import ManageUploadContent from '../components/Home/ManageUploadContent';
import PrivacyPolicy from '../components/Home/PrivacyPolicy';
import TermsOfService from '../components/Home/TermsOfService';
import VisibilityOptions from '../components/Home/VisibilityOptions';
import UpgradeToPremium from '../components/Home/UpgradeToPremium';






const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setup"
          component={SetupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome" // Add a new screen for WelcomeScreen
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
          title: 'Home',
          headerShown: false,
          headerLeft: () => null, // Add this line to remove the back button
                  }}
        />

        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetLive"
          component={GetLive}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WatchParties"
          component={WatchParties}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="GroupLivestream"
          component={GroupLivestream}
          options={{ title: 'Group Livestream' }}
        />
        <Stack.Screen
          name="UploadContent"
          component={UploadContent}
          options={{ title: 'Upload Content' }}
        />
        <Stack.Screen
          name="VirtualHangouts"
          component={VirtualHangouts}
          options={{ title: 'Virtual Hangouts' }}
        />
        <Stack.Screen
          name="Recommended"
          component={Recommended}
          options={{ title: 'Recommended' }}
        />
        <Stack.Screen
          name="Following"
          component={Following}
          options={{ title: 'Following' }}
        />
        <Stack.Screen
          name="HotLivestream"
          component={HotLivestream}
          options={{ title: 'Hot Livestreams' }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ title: 'Chat' }}
        />
        <Stack.Screen
          name="Friends"
          component={Friends}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Downloads"
          component={Downloads}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="DigitalAlbum"
        component={DigitalAlbum}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: 'Search'}}
        />
        <Stack.Screen
        name="RaspberryPi"
        component={RaspberryPi}
        options={{ headerShown: false }} // Set title to false to hide it
       />

        <Stack.Screen
        name="ExploreCategories"
        component={ExploreCategories}
        options={{ title: 'ExploreCategories'}}
        />

         <Stack.Screen
          name="Notifications"
          component={Notifications}  // Should be component, not components
          options={{ headerShown: false }}
         />

        <Stack.Screen
          name="AlbumDetails"
          component={AlbumDetails}
          options={{ headerShown: false }}
          />
          

          <Stack.Screen
           name="CreateWatchParty"
           component={CreateWatchParty}
           options={{ title: 'Create Watch Party' }}
          />

         <Stack.Screen
          name="JoinWatchParty"
          component={JoinWatchParty}
          options={{ title: 'Join Watch Party' }}
        />
                 <Stack.Screen
          name="WatchPartyDetails"
          component={WatchPartyDetails}
          options={{ title: 'Watch Party Details' }}
        />

        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ title: 'ChatScreen' }}
        />

       <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
        />

<Stack.Screen
        name="FAQScreen"
        component={FAQScreen}
        options={{ headerShown: false }}
        />


<Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ headerShown: false }}
        />


<Stack.Screen
        name="ContactSupport"
        component={ContactSupport}
        options={{ headerShown: false }}
        />


<Stack.Screen
        name="ManageFriendList"
        component={ManageFriendList}
        options={{ headerShown: false }}
        />


<Stack.Screen
        name="ManageUploadContent"
        component={ManageUploadContent}
        options={{ headerShown: false }}
        />

<Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{ headerShown: false }}
        />

<Stack.Screen
        name="TermsOfService"
        component={TermsOfService}
        options={{ headerShown: false }}
        />

<Stack.Screen
        name="VisibilityOptions"
        component={VisibilityOptions}
        options={{ headerShown: false }}
        />

<Stack.Screen
        name="UpgradeToPremium"
        component={UpgradeToPremium}
        options={{ headerShown: false }}
        />

<Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ title: 'Create Post' }}
        />

<Stack.Screen
   name="Favourites"
   component={Favourites}
   options={{ title: 'Favourites' }}
/>





















        {/* ... Other screen definitions ... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
