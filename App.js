import * as React from 'react';
import { Text, View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
// Import Data 
import data from './bands.js'
console.log(data)

function Item({title, year, origin, fans}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{year}</Text>
      <Text style={styles.text}>{origin}</Text>
      <Text style={styles.text}>{fans}</Text>
    </View>
  );
}


function Stats() {
  const count = data.length
  const fans = 0
  const countries = 0
  const active = 0 //filter
  const split = 0 //filter
  
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{count}</Text>
      <Text style={styles.text}>{fans}</Text>
      <Text style={styles.text}>{countries}</Text>
      <Text style={styles.text}>{active}</Text>
      <Text style={styles.text}>{split}</Text>
    </View>
  );
}

function BandsScreen() {
  return (
    <View style={styles.tabs}>
         <Text style={styles.bandsTitle}>🎸🥁BANDS 🥁🎸</Text>
        {/* Bands */}
        <FlatList
        data = {data}
       	renderItem={({ item}) => {
          return <Item title={`${item.band_name}`} year={`Year Formed: ${item.formed}`} origin={`Origin: ${item.origin}`} fans={`Fans: ${item.fans * 1000}`} />
        
        }}
        // Key Extractor 
        keyExtractor={item => item.band_name}
        />  
    </View>
  );
}

function StatsScreen() {
  return (
    <SafeAreaView style={styles.statsView}>
      <View style={styles.statsView}>
        <Text style={styles.statsTitle}>🤘METAL🤘</Text>
          <Text style={styles.statsDetails}>
            <Stats/>
          </Text>
       
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === 'Bands') {
              iconName = focused ? 'guitar' : 'guitar';
            } else if (route.name === 'Stats') {
              iconName = focused ? 'chart-bar' : 'chart-bar';
            }

            return <Icon name={iconName} size={size} color='#e03c26' />;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black'
        }}
      
      >
        <Tab.Screen name="Bands" component={BandsScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  // tabs: {
  //   flex:1, 
  //   justifyContent:'center',
  //   alignItems:'center',
  //   backgroundColor:'#303030',
  // }, 
  nav: {
    backgroundColor:'black',
  }, 
  item: {
		backgroundColor: '#303030',
		width: '100%',
		padding: 18,
		borderBottomColor: 'white',
		borderBottomWidth: 2
	},
	title: {
    fontSize: 20,
    fontWeight:'bold',
    color: '#e03c26',
    textTransform:'uppercase',
    marginBottom:5,
  },
  flatlist: {
		flex: 1,
		width: '100%'
  },
  text: {
    color: 'white',
  
  }, 
  statsTitle:{
    fontSize:40,
    fontWeight:'bold', 
    textAlign:'center',
    marginTop:50,
    color:'white',
  }, 

  statsDetails:{
    color:'white',

  },
  bandsTitle:{
    fontSize:40,
    fontWeight:'bold', 
    textAlign:'center',
    marginTop:50,
    color:'#e03c26',
    padding:10,
  }, 
  statsView:{
    backgroundColor:'#303030',
    height:'100%'
  }
})