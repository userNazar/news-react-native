import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useAppSelector } from '../store/hooks';
import Loading from '../components/Loading';
import { NavigationProps } from '../types';


export default function FullPost({ route, navigation }: NavigationProps) {

  const { list, loading } = useAppSelector(state => state.posts)


  const currentNew = list.find(news => news.id === route.params?.id)

  useEffect(() => {
    navigation.setOptions({
      title: route.params?.title
    })
  }, [])


  if (loading) {
    return <Loading />
  }

  return (
    <View style={{ padding: 20, backgroundColor: 'white', flex: 1 }}>
      <PostImage source={{ uri: currentNew?.imageUrl }} />
      <PostText>{currentNew?.text}</PostText>
    </View>
  )
}


const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;