import React, { useEffect } from 'react'
import { FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import Post from '../components/Post'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchPosts } from '../store/slicers/postsSlicer';
import Loading from '../components/Loading';
import { NavigationProps } from '../types';

export default function Posts({ navigation }: NavigationProps) {
    const dispatch = useAppDispatch();
    const { list, loading } = useAppSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <FlatList
                style={{flex: 1, backgroundColor: 'white' }}
                refreshControl={<RefreshControl refreshing={loading} onRefresh={() => (dispatch(fetchPosts()))} />}
                data={list}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.title })}>
                        <Post title={item.title} createdAt={item.createdAt} imageUrl={item.imageUrl} />
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        </>
    )
}