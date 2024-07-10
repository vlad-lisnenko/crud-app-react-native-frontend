import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Task} from "../type/types";
import {createTask} from "../api/api";

interface AddTaskScreenProps {
}

const AddTaskScreen: React.FC<AddTaskScreenProps> = ({}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigation = useNavigation();

    const handleAddTask = () => {
        const newTask: Task = {
            id: Date.now().toString(),
            title,
            description,
            completed: false,
        };
        createTask(newTask).then(() => navigation.goBack());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Добавить новую задачу</Text>
            <TextInput
                style={styles.input}
                placeholder="Название задачи"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Описание задачи"
                value={description}
                onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                <Text style={styles.addButtonText}>Добавить задачу</Text>
            </TouchableOpacity>
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
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
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

export default AddTaskScreen;
