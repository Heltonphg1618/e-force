import React from 'react';
import Modal from 'react-native-modal';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ExcerciseActions } from '../../store/ducks/exercises';
import { AppActions } from '../../store/ducks/app';

export default function SelectExercise() {
  const visible = useSelector(
    (state: any) => state.app.select_exercise_visible,
  );
  const excersices = useSelector((state: any) => state.excersices.excersices);

  const dispatch = useDispatch();

  function handleSelectExcersice(item: any) {
    dispatch(AppActions.closeSelectExercise());
    dispatch(ExcerciseActions.set_current_excercise(item));
  }

  function _renderItem(item: any, index: number) {
    return (
      <TouchableOpacity
        onPress={() => handleSelectExcersice(item)}
        style={{
          width: '100%',
          height: 35,
          borderWidth: 2,
          borderRadius: 5,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: colors.silver_black,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <Modal
      animationIn={'bounceInUp'}
      style={{ alignItems: 'center' }}
      isVisible={visible}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione o exercício</Text>
        <View style={{ flex: 0.8 }}>
          <FlatList
            horizontal={false}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ marginTop: 5, paddingBottom: 20 }}
            data={excersices}
            keyExtractor={(ex: any) => ex.id.toString()}
            renderItem={({ item, index }) => _renderItem(item, index)}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            dispatch(
              ExcerciseActions.set_current_excercise({
                id: 1,
                title: 'Abdominal',
              }),
            );
            dispatch(AppActions.closeSelectExercise());
          }}
          style={{
            position: 'absolute',
            left: 20,
            bottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name={'arrow-left'} size={21} color={colors.silver_black} />
          <Text style={{ marginLeft: 4, color: colors.silver_black }}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 0.5,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
