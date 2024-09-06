import React from 'react';
import {
  Buttonback,
  ButtonMenu,
  Container,
  FirstContent,
  ImageLogo,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { colors, metrics } from '../../styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  isPortrait: string;
}

const Header: React.FC<HeaderProps> = ({ isPortrait }: any) => {
  const navigation = useNavigation() as any;

  return (
    <Container
      style={
        isPortrait == 'portrait'
          ? { height: metrics.adaptLayout(45), paddingHorizontal: 15 }
          : { height: metrics.adaptLayout(37), paddingHorizontal: 65 }
      }>
      <FirstContent>
        <ButtonMenu onPress={() => navigation.openDrawer()}>
          <IconM name={'menu'} size={28} color={colors.white} />
        </ButtonMenu>
        <ImageLogo
          style={{ tintColor: colors.white }}
          source={require('../../assets/logo.png')}
        />
      </FirstContent>
    </Container>
  );
};

export default Header;
