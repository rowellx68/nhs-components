import React, { HTMLProps, PropsWithChildren } from '../../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
type TabsProps = {
    title?: string;
    titleProps?: HTMLProps<HTMLHeadingElement>;
    listProps?: HTMLProps<HTMLUListElement>;
} & HTMLProps<HTMLDivElement>;
type Tabs = {
    Title: typeof TabListItem;
    Tab: typeof Tab;
    Panel: typeof TabPanel;
} & React.FC<TabsProps>;
type TabListItemProps = {
    _targetId?: string;
    listItemProps?: HTMLProps<HTMLLIElement>;
} & Omit<HTMLProps<HTMLAnchorElement>, 'href'>;
type TabProps = {
    id: string;
} & PropsWithChildren;
type TabPanelProps = {
    _targetId?: string;
} & Omit<HTMLProps<HTMLDivElement>, 'id'>;
declare const TabListItem: React.FC<TabListItemProps>;
declare const TabPanel: React.FC<TabPanelProps>;
declare const Tab: React.FC<TabProps>;
declare const Tabs: Tabs;
export default Tabs;
