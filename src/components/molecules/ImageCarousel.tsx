import {useGetImagesQuery} from '@/services/image_service';
import React, {useEffect, useRef, useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {Carouselmage, LoadingIndicator} from '../atoms';

function Carousels() {
  const ref = useRef<ICarouselInstance>(null);
  const {width} = useWindowDimensions();
  const [imageData, setImageData] = useState<Photo[]>([]);
  const [index, setIndex] = useState<number>(0);
  const height = 220;

  const {data, isLoading} = useGetImagesQuery(undefined, {
    skip: imageData.length === 0 ? false : true,
  });

  useEffect(() => {
    if (data) {
      setImageData(data);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View>
      <Carousel
        ref={ref}
        loop={true}
        autoPlay={true}
        width={width}
        height={height}
        data={imageData.slice(0, 10)}
        onSnapToItem={index => setIndex(index)}
        renderItem={({item, index}) => {
          return <Carouselmage item={item} width={width} height={height} />;
        }}
        scrollAnimationDuration={2000}
      />
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 16,
          right: 16,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 4,
          borderRadius: 2,
          width: 52,
        }}>
        <Text style={{fontWeight: '700'}}>{index + 1} / 10</Text>
      </View>
    </View>
  );
}

export default Carousels;
