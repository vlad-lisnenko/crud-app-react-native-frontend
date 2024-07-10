import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Task} from "../type/types";

type TaskItemProps = {
    task: Task;
    onDelete: (taskId: string) => void;
    onToggleStatus: (taskId: string) => void;
    onPress: () => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggleStatus, onPress }) => {
    return (
        <TouchableOpacity style={styles.taskItem} onPress={onPress}>
            <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskStatus}>{task.completed ? 'Выполнено' : 'Не выполнено'}</Text>
            </View>
            <View style={styles.taskActions}>
                <TouchableOpacity onPress={() => onToggleStatus(task.id)}>
                    <Text style={styles.actionText}>{task.completed ? 'Отметить как невыполненное' : 'Отметить как выполненное'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(task.id)}>
                    <Text style={styles.actionText}>Удалить</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    taskItem: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        marginBottom: 8,
        borderRadius: 8,
    },
    taskInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    taskTitle: {
        fontSize: 18,
    },
    taskStatus: {
        fontSize: 14,
        color: 'gray',
    },
    taskActions: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionText: {
        color: 'blue',
    },
});

export default TaskItem;
