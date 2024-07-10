import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp, useRoute} from "@react-navigation/native";
import {Task} from "../type/types";

type TaskDetailsScreenRouteProp = RouteProp<{ TaskDetailsScreen: { task: Task } }, 'TaskDetailsScreen'>;

const TaskDetailsScreen: React.FC = () => {
    const route = useRoute<TaskDetailsScreenRouteProp>()
    const {task} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.description}>{task.description}</Text>
            <Text style={styles.status}>{task.completed ? 'Выполнено' : 'Не выполнено'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
    },
    status: {
        fontSize: 14,
        color: 'gray',
    },
});

export default TaskDetailsScreen;
