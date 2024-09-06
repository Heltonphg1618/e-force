import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Item } from '../../../Interfaces/interfaces';
import { metrics } from '../../../styles';

export const Container = styled.View`
  flex: 0.2;
`;

export const Items = styled.View`
  flex: 1;
`;

export const ContainerItem = styled.View`
  width: ${metrics.adaptLayout(70)}px;
  height: ${metrics.adaptLayout(51)}px;
  align-items: center;
  justify-content: center;
`;

export const FlatItems = styled(FlatList as new () => FlatList<Item>).attrs({
  showsHorizontalScrollIndicator: false,
  maxToRenderPerBatch: 10,
  initialNumToRender: 10,
})``;

export const TextTitle = styled.Text`
  font-size: 13px;
  margin-top: 5px;
  text-align: center;
`;

export const TextValue = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-top: 3px;
  text-align: center;
`;
