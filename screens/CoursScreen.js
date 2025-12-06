import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const courses = [
  { id: '1', name: 'Mathématiques', code: 'MATH101' },
  { id: '2', name: 'Physique', code: 'PHYS101' },
  { id: '3', name: 'Informatique', code: 'INFO101' },
  { id: '4', name: 'Chimie', code: 'CHEM101' },
  { id: '5', name: 'Anglais', code: 'ENG101' },
  { id: '6', name: 'Histoire', code: 'HIST101' },
];

export default function CoursScreen({ navigation }) {
  const renderCourse = ({ item }) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() => navigation.navigate('CourseDetail', { course: item })}
    >
      <View style={styles.courseHeader}>
        <Text style={styles.courseName}>{item.name}</Text>
        <Text style={styles.courseCode}>{item.code}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Matières</Text>
      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  courseCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  courseCode: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: '500',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  teacherName: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});