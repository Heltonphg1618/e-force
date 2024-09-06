import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
`;

export const Content = styled.View`
  background: ${colors.white};
  justify-content: space-between;
`;

export const ProgressContainer = styled.View`
  flex: 0.4;
`;

export const ActionsProgress = styled.View`
  flex: 0.23;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 5px;
`;
export const BarProgress = styled.View`
  flex: 0.77;
`;

export const Kg = styled.Text``;

export const Time = styled.View`
  flex: 0.3;
`;

export const RegressiveTime = styled.View`
  flex: 0.4;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const TimeText = styled.Text`
  font-size: 17px;
  color: ${colors.silver_black};
  margin-left: 5px;
`;

export const SelectExerciseContainer = styled.View`
  flex: 0.6;
  justify-content: center;
  align-items: center;
`;

export const SelectExercise = styled.View`
  width: 100%;
  background: transparent;
  border-width: 1px;
  border-color: ${colors.silver};
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  border-radius: 20px;
  flex-direction: row;
`;

export const ExerciseText = styled.Text`
  color: ${colors.silver_black};
  text-align: center;
`;

export const Actions = styled.View`
  flex: 0.3;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 48%;
  height: 40px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${colors.primary};
  margin-bottom: 15px;
  flex-direction: row;
`;

export const ActionText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
`;
