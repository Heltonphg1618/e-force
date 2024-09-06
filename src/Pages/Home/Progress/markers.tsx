import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Kg } from '../styles';
import { colors, metrics } from '../../../styles';
import {useSelector} from "react-redux";

export default function Markers({ isPortrait, step }: any) {
	const maxForce = useSelector((state: any) => state.excersices.maxForce);

  return (
    <>
      <View
        style={[
          styles.lineLeft,
          !!isPortrait
            ? { height: metrics.screenHeight * 0.18, top: 50, left: 40 }
            : {
                height: metrics.screenHeight * 0.09,
                top: 30,
                left: 40,
              },
        ]}
      />
      <Kg
        style={[
          { position: 'absolute' },
          !!isPortrait ? { bottom: 0, left: 23 } : { bottom: -1, left: 20 },
        ]}>
        3.00 Kg
      </Kg>
      <View
        style={[
          styles.lineRight,
          !!isPortrait
            ? { height: metrics.screenHeight * 0.18, top: 50, right: 60 }
            : {
                height: metrics.screenHeight * 0.09,
                top: 30,
                right: 70,
              },
        ]}
      />
      <Kg
        style={[
          { position: 'absolute' },
          !!isPortrait ? { bottom: 0, right: 30 } : { bottom: -1, right: 33 },
        ]}>
				{parseFloat(maxForce).toFixed(2)} Kg
      </Kg>
    </>
  );
}

const styles = StyleSheet.create({
  lineLeft: {
    width: 1.3,
    backgroundColor: colors.silver,
    position: 'absolute',
    top: 50,
    left: 40,
  },
  lineRight: {
    width: 1.3,
    backgroundColor: colors.silver,
    position: 'absolute',
    top: 50,
    right: 40,
  },
});
