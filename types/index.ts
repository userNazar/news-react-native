import { StackScreenProps } from '@react-navigation/stack';



export interface IPost {
    id: string;
    title: string;
    imageUrl: string;
    createdAt: string;
    text: string;
}


export type RootStackParamList = {
    Posts: undefined;
    FullPost: { id: string, title: string };
};


export type NavigationProps = StackScreenProps<RootStackParamList>;