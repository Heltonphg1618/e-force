import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import ChartModal from './src/Components/Modals/chart_modal';
import { Provider } from 'react-redux';
import store from './src/store';
import SelectExercise from './src/Components/Modals/select_exercise';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import {StatusBar} from "expo-status-bar";

export default function App() {
	return (
		<SafeAreaProvider style={{
			flex:1,backgroundColor: '#249d8c'
		}}>
			<StatusBar
				style={"light"}
			/>
			<SafeAreaView style={{ flex: 1 }}>
		<GestureHandlerRootView>
			<Provider store={store}>
				<NavigationContainer>
					<Routes />
					<ChartModal />
					<SelectExercise />
				</NavigationContainer>
			</Provider>

		</GestureHandlerRootView>
			</SafeAreaView>
		</SafeAreaProvider>

	);
}

