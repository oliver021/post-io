import { ReactNode } from 'react';

export interface NavigationMenu{
    icon: ReactNode,
    key: string,
    content?: ReactNode,
    page?: string
}

export type NavigationItems = NavigationMenu[];

export interface INavigationResolver{
    restore (page: string, objectState: any): ReactNode;
    getPage (id: string): ReactNode;
    getPagesList (): PageInfo[];
    router (page: string):  [string, ReactNode];
}

export interface INavigationState{
    currentPageId: string;
    bussy: boolean;
    recents: string[];
}

export interface PageInfo{
    id: string;
    title: string;
    avaliable: boolean;
    icon?: ReactNode;
}