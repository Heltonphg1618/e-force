import { Dimensions, PixelRatio, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const scaleContainers = width / 300;

function adaptLayout(size: any): any {
  const newSize = size * scaleContainers;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export default {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  adaptLayout,
};
