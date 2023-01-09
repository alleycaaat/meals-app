import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
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
            component={Categories}
            options={{
              title: 'Categories',
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
