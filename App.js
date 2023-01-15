import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import FavContextProvider from './store/context/favorites-context';
import Categories from './screens/Categories';
import MealsOverview from './screens/MealsOverview';
import Colors from './utils/Colors';
import MealDetails from './screens/MealDetails';
import Favorites from './screens/Favorites';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: Colors.darkBlue },
        sceneContainerStyle: { backgroundColor: Colors.lightBlue },
        drawerContentStyle: { backgroundColor: Colors.darkBlue },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: Colors.darkOrange,
        drawerActiveBackgroundColor: 'white',
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={Categories}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={Favorites}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.darkBlue },
              contentStyle: { backgroundColor: Colors.lightBlue },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverview}
              options={{
                title: 'Meal Options',
              }}
            />
            <Stack.Screen
              name='MealDetails'
              component={MealDetails}
              options={{
                title: 'Meal Details'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavContextProvider>
    </>
  );
}