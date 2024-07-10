import React from 'react';
import MainScreen from "../screens/MainScreen";
import TaskDetailsScreen from "../screens/TaskDetailsScreen";
import AddTaskScreen from "../screens/AddTaskScreen";
import InfoScreen from "../screens/InfoScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                    options={{title: 'Crud-app'}}
                />
                <Stack.Screen
                    name="TaskDetailsScreen"
                    component={TaskDetailsScreen}
                    options={{title: 'Детали задачи'}}
                />
                <Stack.Screen
                    name="AddTaskScreen"
                    component={AddTaskScreen}
                    options={{title: 'Добавить задачу'}}
                />
                <Stack.Screen
                    name={"InfoScreen"}
                    component={InfoScreen}
                    options={{title: "Инфо"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;