import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsItem, Home} from '../screens';
import {routes} from '../constants/routesNames';
import {theme} from '../constants/theme';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={routes.HOME}>
        <>
          <Stack.Screen name={routes.HOME} component={Home} />
          <Stack.Screen
            name={routes.DETAILS}
            component={DetailsItem}
            options={({route}) => ({
              title: route?.params?.item?.title,
            })}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
