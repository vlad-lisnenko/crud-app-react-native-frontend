import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TaskItem from '../components/TaskItem';
import Svg, {Path} from "react-native-svg";
import {Task} from "../type/types";
import {NavigationProp, useFocusEffect} from "@react-navigation/native";
import {deleteTask, getTasks, updateCompleted} from "../api/api";

interface MainScreenProps {
    navigation: NavigationProp<any>;
}

const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
        const [tasks, setTasks] = useState<Task[] | []>([]);

        useFocusEffect(
            useCallback(() => {
                getTasks()
                    .then(data => setTasks(data))
                    .catch(error => alert(error));
            }, [])
        );

        useEffect(() => {

        }, []);

        const handleAddTask = () => {
            navigation.navigate('AddTaskScreen', {setTasks});
        };

        const handleDeleteTask = (taskId: string) => {
            deleteTask(taskId)
                .then(() => getTasks()
                    .then(data => setTasks(data)));
        };

        const handleToggleTaskStatus = (taskId: string) => {
            updateCompleted(taskId)
                .then(() => getTasks()
                    .then(data => setTasks(data)));
        };

        const renderTask = ({item}: { item: Task }) => (
            <TaskItem
                task={item}
                onDelete={handleDeleteTask}
                onToggleStatus={handleToggleTaskStatus}
                onPress={() => navigation.navigate('TaskDetailsScreen', {task: item})}
            />
        );

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Список задач</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('InfoScreen')}>
                        <Svg
                            width={40}
                            height={40}
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <Path
                                fill="#1C274C"
                                fillRule="evenodd"
                                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75ZM12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                                clipRule="evenodd"
                            />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={tasks}
                    renderItem={renderTask}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                    <Text style={styles.addButtonText}>Добавить задачу</Text>
                </TouchableOpacity>
            </View>
        );
    }
;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    addButton: {
        backgroundColor: 'blue',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default MainScreen;
