import React from 'react';
import Modal from 'react-native-modal';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { colors, metrics } from '../../styles';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppActions } from '../../store/ducks/app';

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: colors.white,
  color: (opacity = 1) => `rgb(0, 0, 0)`,
};

export default function ChartModal() {
	const dispatch = useDispatch();

  const visible = useSelector((state: any) => state.app.visible);
	const values = useSelector((state: any) => state.excersices.values);

	const times:any[] = useSelector((state: any) => state.excersices.times);
  const screenWidth = Dimensions.get('window').width;

	const maxForce = Math.max(...values);
	const mediaForce = values.reduce((acc, value) => parseFloat(acc)+ parseFloat(value), 0) / values.length;
	const times2 = times.map(time => parseInt(time)).filter((time, index, self) => self.indexOf(time) === index).map((time) => String(time.toFixed(0)));

const data = {
		labels: [...times2],
		datasets: [
			{
				data: [...values],
				color: (opacity = 1) => `rgb(2, 5, 0)`, // optional
				strokeWidth: 2,
			},
		],
		legend: ['Tempo de Contração'],

	};

const charConfig = {
	backgroundGradientFrom: "#fb8c00",
	backgroundGradientTo: "#26ffde",
	decimalPlaces: 0,
	color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
	propsForDots: {
		r: ".1",
		strokeWidth: "1",
		stroke: "red"
	},

}

  return (
    <Modal style={{ alignItems: 'center' }} isVisible={visible}>
      <View style={styles.container}>
        <Text style={styles.title}>Série concluída com sucesso!</Text>
        <LineChart
          data={data}
          width={screenWidth * 0.8}
          height={250}
					xAxisLabel={'s'}
					yAxisSuffix={' Kg'}
					chartConfig={charConfig}
					style={{
						marginVertical: 8,
						borderRadius: 16,
						elevation: 10,
					}}

        />
        <Text style={{ textAlign: 'center' }}>Tempo (s)</Text>
        <View style={{ marginTop: 15, width: '100%', paddingHorizontal: 10 }}>
          <Text style={styles.force}>
            Força Máxima: <Text style={styles.force2}>{maxForce.toFixed(2)} Kg</Text>
          </Text>
          <Text style={styles.force}>
            Força Média: <Text style={styles.force2}>{mediaForce.toFixed(2)} Kg</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(AppActions.closeModal())}>
          <Icon name={'check'} size={20} color={colors.white} />
          <Text
            style={{
              marginLeft: 5,
              color: colors.white,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: metrics.screenHeight * 0.7,
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 22,
    color: colors.silver_black,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  force: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.silver_black,
  },
  force2: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.silver_black,
  },
  button: {
    width: '90%',
    height: 45,
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
