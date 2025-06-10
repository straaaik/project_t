import { createSelector } from '@reduxjs/toolkit';
import { getUserData } from 'entitis/User';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutUsIcon from 'shared/assets/icons/about-us.svg';
import UserIcon from 'shared/assets/icons/UserProfile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';

export const getSidebarItems = createSelector([getUserData], (user) => {
    const sidebarItemsList: SidebarItemType[] = [
        { path: RoutePath.main, Icon: MainIcon, text: 'Главная' },
        { path: RoutePath.about, Icon: AboutUsIcon, text: 'О нас' },
    ];

    if (user) {
        sidebarItemsList.push(
            { path: RoutePath.articles, Icon: ArticlesIcon, text: 'Статьи', authOnly: true },
            { path: RoutePath.profile + user.id, Icon: UserIcon, text: 'Профиль', authOnly: true }
        );
    }

    return sidebarItemsList;
});
