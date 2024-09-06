import React from 'react';
import {
  Container,
  ContainerItem,
  FlatItems,
  Items,
  TextTitle,
  TextValue,
} from './styles';
import { colors, metrics } from '../../../styles';
import { Item } from '../../../Interfaces/interfaces';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions, Image} from 'react-native';
import {useSelector} from "react-redux";

interface InfoProps {
  isPortrait: string;
}


const Infos: React.FC<InfoProps> = ({ isPortrait }) => {
	const values = useSelector((state: any) => state.excersices.values);
	const repeat = useSelector((state: any) => state.excersices.repeat);
	const maxForce = Math.max(...values);

	const infos: Item[] = [

		{
			id: 2,
			icon: 'refresh',
			title: 'REPETIÇÔES',
			value: repeat,
			medida: 3,
		},
		{
			id: 3,
			icon: 'edge',
			title: 'PESO',
			image:
				'https://images.tcdn.com.br/img/img_prod/775128/categoria_img_13_20200415174959.png',
			value: values.length > 0 ? values[values.length - 1] : 0.0,
			medida: 'Kg',
		},
		{
			id: 4,
			icon: 'edge',
			title: 'MÁXIMO',
			image: 'https://svgsilh.com/png-1024/1085672.png',
			value: values.length > 0 ? maxForce : 0,
			medida: 'Kg',
		},
	];

	function _renderItem(item: Item, index: number) {
    return (
      <ContainerItem
        style={[
          !!isPortrait
            ? {
                height: metrics.adaptLayout(88),
              }
            : { marginTop: 10 },
        ]}>
        {item.title === 'PESO' || item.title === 'MÁXIMO' ? (
          <Image
            resizeMode={'contain'}
            style={[
              { tintColor: colors.primary },
              !!isPortrait
                ? { width: 31, height: 31 }
                : { width: 24, height: 24 },
            ]}
            source={{
              uri: item.image,
            }}
          />
        ) : (
          <Icon
            name={item.icon}
            size={!!isPortrait ? 25 : 21}
            color={colors.primary}
          />
        )}

        <TextTitle style={!!isPortrait == false && { fontSize: 10 }}>
          {item.title}
        </TextTitle>
        <TextValue style={!!isPortrait == false && { fontSize: 11 }}>
          {item.value}
          {typeof item.medida == 'number'
            ? `/${item.medida}`
            : ` ${item.medida}`}
        </TextValue>
      </ContainerItem>
    );
  }

  return (
    <Container
      style={
        !!isPortrait == true
          ? {
              borderBottomWidth: 1,
              borderBottomColor: colors.silver,
              marginLeft: 20,
              marginHorizontal: 5,
              marginTop: metrics.screenHeight * 0.03,
            }
          : {
              borderRightWidth: 1,
              borderRightColor: colors.silver,
              marginLeft: metrics.screenWidth * 0.072,
            }
      }>
      <Items>
        <FlatItems
          horizontal={!!isPortrait}
          contentContainerStyle={
            !!isPortrait == true
              ? {
                  width: '100%',
                  justifyContent: 'center',
                  marginLeft: 10,
                  marginTop: 10,
                }
              : {
                  alignItems: 'flex-end',
                }
          }
          data={infos}
          keyExtractor={(info: any) => info.title}
          renderItem={({ item, index }) => _renderItem(item, index)}
        />
      </Items>
    </Container>
  );
};

export default Infos;
