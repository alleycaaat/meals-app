import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './screens/Categories';
import MealsOverview from './screens/MealsOverview';
import Colors from './utils/Colors';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.darkBlue },
          contentStyle: { backgroundColor: Colors.lightBlue },
          headerTintColor: 'white',
        }}>
          <Stack.Screen
            name='MealsCategories'
            options={{
              title: 'Categories',
            }} component={Categories}
          />
          <Stack.Screen
            name='MealsOverview'
            options={{
              title: 'Meal Options',
            }}
            component={MealsOverview}
          />
          <Stack.Screen
            name='MealDetails'
            options={{
              title: 'Meal Details'
            }}
            component={MealDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
  }
});
