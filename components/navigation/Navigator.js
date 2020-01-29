import React from 'react'
import { TouchableOpacity, Text, BackHandler } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'

import Lesson1 from '../screens/Lesson1'
import Lesson2 from '../screens/Lesson2'

const AppContainer = createStackNavigator(
    
    {
        L1: {
            screen: Lesson1,
            navigationOptions: {
                title: <Text style={{ color: '#d35400', fontSize: 20, }}>AVAST <Text style={{ color: '#fff', fontWeight: 'bold' }}>PASSWORDS</Text></Text>,
                headerRight: () => (
                    <TouchableOpacity onPress={() => BackHandler.exitApp()}>
                        <Icon
                            name="md-exit"
                            size={30}
                            color={'#fff'}
                            style={{ paddingRight: 10 }}
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {
                    backgroundColor: '#2E364E',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.8,
                    shadowRadius: 5,
                    elevation: 8,
                }
            }
        },
        L2: {
            screen: Lesson2,
            navigationOptions: {
                title: 'Lesson 2',
            }
        },
    },
    {
        initialRouteName: 'L1'
    }
)

export default createAppContainer(AppContainer)

