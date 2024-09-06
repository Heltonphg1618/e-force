import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';

export default function Progress({ step, steps, height }: any) {
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: height,
          overflow: 'hidden',
        }}>
        <Animated.View
          style={{
            height,
            width: '100%',
            borderRadius: height,
            backgroundColor: '#249d8c',

            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
      </View>
    </>
  );
}
