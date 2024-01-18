import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { IconButton, DatePicker, TimePicker } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReminderScreen = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [fromTime, setFromTime] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [toTime, setToTime] = useState(null);
  
  const showDatePicker = (mode) => {
    // Implement logic to show date picker
  };

  const showTimePicker = (mode) => {
    // Implement logic to show time picker
  };

  return (
    <View style={{ flex: 1, padding: 18, marginTop: 28 }}>
      <TouchableOpacity style={styles.cancelButton} onPress={() => console.log('Cancel Reminder')}>
        <Text style={{ color: 'red', fontSize: 16 }}>Cancel</Text>
      </TouchableOpacity>
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
      {/* Use a parent View with flexDirection: 'row' for the grid layout */}
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        {/* Separate Views for Date and Time with individual TouchableOpacity */}
        <View style={{ flex: 1, marginRight: 8 }}>
          <TouchableOpacity onPress={() => showDatePicker('from')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8, height: 40}}>
            <IconButton icon="calendar" size={20} color="#666666" style={{ marginRight: 2 }}/>
              <Text style={{ ...styles.gridLabel, color: '#666666', marginLeft: 2 }}>Date</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginLeft: 14}}>
          <TouchableOpacity onPress={() => showTimePicker('from')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8, height: 40}}>
            <IconButton icon="clock" size={20} color="#666666" style={{ marginRight: 2 }} />
              <Text style={{ ...styles.gridLabel, color: '#666666', marginLeft: 2 }}>Time</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.label}>To</Text>
      {/* Similar structure for the "To" section */}
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <View style={{ flex: 1, marginRight: 8 }}>
          <TouchableOpacity onPress={() => showDatePicker('to')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8, height: 40}}>
            <IconButton icon="calendar" size={20} color="#666666" style={{ marginRight: 2 }} />
              <Text style={{ ...styles.gridLabel, color: '#666666', marginLeft: 2 }}>Date</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginLeft: 14}}>
          <TouchableOpacity onPress={() => showTimePicker('to')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8, height: 40}}>
            <IconButton icon="clock" size={20} color="#666666" style={{ marginRight: 2 }} />
              <Text style={{ ...styles.gridLabel, color: '#666666', marginLeft: 2 }}>Time</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Add an additional View for Notes with paddingTop */}
      <View style={{ paddingTop: 12 }}>
        <TextInput placeholder="Notes" multiline style={{ ...styles.input, backgroundColor: '#f0f0f0', height: 100 }} />
      </View>

      <Text style={styles.label}>Assigned to</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8}}>
        <TouchableOpacity style={{ marginRight: 4 }}>
          <Text style={{ fontSize: 16 }}>+ </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 14 }}>Assign Contact</Text>
      </View>

      <TouchableOpacity style={{ ...styles.button, marginTop: 'auto', width: '80%',  marginBottom: 26}} onPress={() => console.log('Add Reminder')}>
        <Text style={{ color: 'black', fontSize: 16 }}>Add Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    padding: 10,
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
    alignSelf: 'center',
  },
  
  cancelButton: {
    position: 'absolute',
    left: 0,
    top: 30,
    padding: 20,
    alignItems: 'center',
  },
});

export default ReminderScreen;
