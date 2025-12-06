import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Alert,
  Modal,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TabNavigator from './TabNavigator';

export default function SimpleNavigator({ route }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const userName = route?.params?.userName || 'Étudiant';

  const handleLogout = () => {
    Alert.alert(
      'Déconnexion',
      'Êtes-vous sûr de vouloir vous déconnecter ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Déconnexion',
          style: 'destructive',
          onPress: () => {
            // Navigate back to login - you'd implement this with navigation ref
            console.log('Logout pressed');
          },
        },
      ]
    );
  };

  const MenuOverlay = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isMenuVisible}
      onRequestClose={() => setIsMenuVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.menuContainer}>
          <View style={styles.header}>
            <View style={styles.profileSection}>
              <View style={styles.profileImage}>
                <Text style={styles.profileInitial}>
                  {userName.charAt(0).toUpperCase()}
                </Text>
              </View>
              <Text style={styles.greeting}>Bonjour</Text>
              <Text style={styles.userName}>{userName}</Text>
            </View>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setIsMenuVisible(false)}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.menuSection}>
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                setIsMenuVisible(false);
              }}
            >
              <Ionicons name="home-outline" size={24} color="#666" />
              <Text style={styles.menuText}>Accueil</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                setIsMenuVisible(false);
              }}
            >
              <Ionicons name="book-outline" size={24} color="#666" />
              <Text style={styles.menuText}>Mes Cours</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                setIsMenuVisible(false);
              }}
            >
              <Ionicons name="person-outline" size={24} color="#666" />
              <Text style={styles.menuText}>Mon Profil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="settings-outline" size={24} color="#666" />
              <Text style={styles.menuText}>Réglages</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Ionicons name="log-out-outline" size={24} color="#FF5252" />
              <Text style={styles.logoutText}>Déconnexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => setIsMenuVisible(true)}
        >
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Campus App</Text>
        <View style={styles.headerRight} />
      </View>
      
      <TabNavigator route={{ params: { userName } }} />
      <MenuOverlay />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerBar: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  headerRight: {
    width: 34, // Same width as menu button for centering
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  menuContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '80%',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  closeButton: {
    padding: 5,
    marginTop: 10,
  },
  profileSection: {
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  profileInitial: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  greeting: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 2,
  },
  menuSection: {
    flex: 1,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF5252',
    marginLeft: 15,
    fontWeight: '500',
  },
});