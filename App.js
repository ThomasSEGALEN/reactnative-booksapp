import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from './routes';

import BookListScreen from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import Header from './components/Header';

const Stack = createStackNavigator();

function BookStack() {
    return (
        <Stack.Navigator
            screenOptions={{
            }}
        >
            <Stack.Screen name={routes.Book} options={{ headerShown: false }} component={BookListScreen} />
            <Stack.Screen name={routes.BookDetails} options={({ route }) => ({ title: route.params.name, headerStyle: { backgroundColor: '#6200EE' }, headerTintColor: '#FFFFFF' })} component={BookDetailsScreen} />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={routes.BookList}
                screenOptions={({ route }) => ({
                    header: (props) => <Header {...props} />,
                    headerStatusBarHeight: 22,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'BookList':
                                iconName = 'book-open-variant'
                                break;
                            case 'Login':
                                iconName = 'account-circle-outline'
                                break;
                        }
                        return iconName
                            ? <MaterialCommunityIcons name={iconName} color={color} size={size} />
                            : null;
                    }, tabBarStyle: { backgroundColor: '#6200EE' },
                    tabBarLabelStyle: { color: '#FFFFFF' },
                    tabBarIconStyle: { color: '#FFFFFF' }
                })}
            >
                <Tab.Screen name={routes.BookList} options={{ title: 'Books', headerShown: false, tabBarActiveTintColor: '#FFFFFF', tabBarInactiveTintColor: '#FFFFFF' }} component={BookStack} />
                <Tab.Screen name={routes.Login} options={{ title: 'User', headerShown: false, tabBarActiveTintColor: '#FFFFFF', tabBarInactiveTintColor: '#FFFFFF' }} component={LoginScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}