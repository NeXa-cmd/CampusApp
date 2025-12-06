import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function CourseDetailScreen({ route }) {
  const { course } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.courseName}>{course.name}</Text>
        <Text style={styles.courseCode}>{course.code}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.sectionContent}>
          Cette matière couvre les concepts fondamentaux et avancés de {course.name.toLowerCase()}. 
          Les étudiants développeront une compréhension approfondie des principes théoriques 
          et pratiques essentiels à la maîtrise de cette discipline.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objectifs d'apprentissage</Text>
        <Text style={styles.sectionContent}>
          • Comprendre les concepts fondamentaux{'\n'}
          • Développer les compétences pratiques{'\n'}
          • Appliquer les connaissances théoriques{'\n'}
          • Analyser et résoudre des problèmes complexes
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Modalités d'évaluation</Text>
        <Text style={styles.sectionContent}>
          • Contrôle continu : 40%{'\n'}
          • Examen partiel : 30%{'\n'}
          • Examen final : 30%
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Horaires</Text>
        <Text style={styles.sectionContent}>
          Lundi : 14h00 - 16h00{'\n'}
          Mercredi : 10h00 - 12h00{'\n'}
          Vendredi : 08h00 - 10h00
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 30,
    alignItems: 'center',
  },
  courseName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  courseCode: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  section: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 8,
  },
  sectionContent: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
});