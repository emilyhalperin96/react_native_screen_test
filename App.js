import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { IconButton, DatePicker, TimePicker } from 'react-native-paper';

const ReminderScreen = () => {
  const [fromDate, setFromDate] = useState(null);
  const [fromTime, setFromTime] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [toTime, setToTime] = useState(null);

  return (
    <View style={{ flex: 1, padding: 18, marginTop: 28 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28, alignItems: 'center' }}>
      </View>

      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 18 }}>
        New Reminder
      </Text>
      
      <Text style={{ color: 'grey', marginBottom: 28, marginLeft: 8 }}>
        Add a new event to your calendar
      </Text>

      <TextInput placeholder="Title" style={{ ...styles.input, backgroundColor: '#f0f0f0' }} />
      <TextInput placeholder="Location or URL" style={{ ...styles.input, backgroundColor: '#f0f0f0' }} />

      <Text style={styles.label}>From</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput placeholder="Date" style={{ ...styles.gridInput, backgroundColor: '#f0f0f0' }} />
        <TextInput placeholder="Time" style={{ ...styles.gridInput, backgroundColor: '#f0f0f0' }} />
      </View>

      <Text style={styles.label}>To</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput placeholder="Date" style={{ ...styles.gridInput, backgroundColor: '#f0f0f0' }} />
        <TextInput placeholder="Time" style={{ ...styles.gridInput, backgroundColor: '#f0f0f0' }} />
      </View>

      <TextInput placeholder="Notes" multiline style={{ ...styles.input, backgroundColor: '#f0f0f0', height: 100 }} />
      
      <Text style={styles.label}>Assigned to</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginRight: 4 }}>
          <Text style={{ fontSize: 16 }}>+ </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 14 }}>Assign Contact</Text>
      </View>

      <TouchableOpacity style={{ ...styles.button, marginTop: 'auto' }} onPress={() => console.log('Add Reminder')}>
        <Text style={{ color: 'black', fontSize: 16 }}>Add Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  label: {
    marginBottom: 8,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  gridInput: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
});

export default ReminderScreen;
