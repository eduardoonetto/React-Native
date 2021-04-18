import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';




export default function App() {

  return (
    <View style={styles.container}>
      <SectionList
        sections= {[
          {
            title: 'Grupo 1', 
            data: [
            { key : '1', name: 'Eduardo' },
            { key : '2', name: 'Maria' },
            { key : '3', name: 'Isabel' },
            { key : '4', name: 'Noemi' },
            { key : '5', name: 'Alfredo' },
          ]
          },
          {
            title: 'Grupo 2', 
            data: [
            { key : '6', name: 'Eduardo' },
            { key : '7', name: 'Maria' },
            { key : '8', name: 'Isabel' },
            { key : '9', name: 'Noemi' },
            { key : '10', name: 'Alfredo' },
            ]
          },
          {
            title: 'Grupo 3', 
            data: [
            { key : '11', name: 'Eduardo' },
            { key : '12', name: 'Maria' },
            { key : '13', name: 'Isabel' },
            { key : '14', name: 'Noemi' },
            { key : '15', name: 'Alfredo' },
            ]
          }
        ]}
        renderItem = { ({ item }) => <Text style={styles.item}>{item.name}</Text> }
        renderSectionHeader = { ({ section }) => <Text style={styles.section}>{section.title}</Text> }
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },
  section:{
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2, 
  },
});
