import MainIcon from 'shared/assets/icons/main.svg';
import AboutUsIcon from 'shared/assets/icons/about-us.svg';
import UserIcon from 'shared/assets/icons/UserProfile.svg';

import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import React from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    { path: RoutePath.main, Icon: MainIcon, text: 'Главная' },
    { path: RoutePath.about, Icon: AboutUsIcon, text: 'О нас' },
    { path: RoutePath.profile, Icon: UserIcon, text: 'Профиль' },
];
