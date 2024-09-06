import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  width: 100%;
  background-color: ${colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
		
`;

export const ButtonMenu = styled.TouchableOpacity``;
export const Buttonback = styled.TouchableOpacity`
  margin-right: 5px;
`;

export const ImageLogo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 125px;
  height: 125px;
  margin-left: ${metrics.adaptLayout(25)}px;
`;

export const FirstContent = styled.View`
  width: ${metrics.screenWidth / 1.8}px;
  height: 100%;
  align-items: center;
  flex-direction: row;
`;
