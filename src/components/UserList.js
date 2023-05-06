import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

import AsyncStorage from '@react-native-async-storage/async-storage';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUsers();
    getSelectedUser();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const data = await response.json();
      setUsers(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getSelectedUser = async () => {
    const value = await AsyncStorage.getItem('selectedUser');
    if (value !== null) {
      const user = JSON.parse(value);
      setSelectedUser(user);
    }
  };

  const saveSelectedUser = async user => {
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem('selectedUser', jsonValue);
      setSelectedUser(user);
    } catch (e) {
      console.error(e);
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => saveSelectedUser(item)}
        style={{
          backgroundColor:
            selectedUser && selectedUser.id === item.id ? 'lightblue' : 'white',
        }}>
        <Card
          key={item.id}
          containerStyle={styles.card}
          onPress={() => saveSelectedUser(item)}>
          <View style={styles.cardContent}>
            <Text style={styles.bold}>Name: </Text>
            <Text style={styles.grey}>{item.name}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.bold}>Username:</Text>
            <Text style={styles.grey}>{item.username}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.bold}>Email: </Text>
            <Text style={styles.grey}>{item.email}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.bold}>Address: </Text>
            <Text style={styles.grey}>
              {item.address.street}, {item.address.suite}, {item.address.city}
            </Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.bold}>Phone: </Text>
            <Text style={styles.grey}>{item.phone}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.bold}>Website: </Text>
            <Text style={styles.grey}>{item.website}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.bold}>Company: </Text>
            <Text style={styles.grey}>{item.company.name}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        // extraData={selectedUser}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  grey: {
    color: 'gray',
  },
  bold: {
    fontWeight: 'bold',
  },
  size: {
    fontSize: 17,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginVertical: 10,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});
