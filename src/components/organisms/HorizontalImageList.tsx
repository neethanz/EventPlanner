import { ImageCard } from '@/components/molecules';
import { useGetImagesQuery } from '@/services/image_service';
import React from 'react';
import { ScrollView } from 'react-native';
import { LoadingIndicator } from '../atoms';

export default function HorizontalImageList() {
  const {data, isLoading} = useGetImagesQuery();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data?.slice(0, 10).map(item => (
        <ImageCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}
