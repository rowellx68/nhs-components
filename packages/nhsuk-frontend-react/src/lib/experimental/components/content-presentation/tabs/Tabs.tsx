import React, {
  HTMLProps,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react'
import clsx from 'clsx'
import { TabsContext, useTabsContext } from './TabsContext'
import useIdWithPrefix from '@/hooks/use-id-with-prefix'

type TabsProps = {
  title?: string
  titleProps?: HTMLProps<HTMLHeadingElement>
  listProps?: HTMLProps<HTMLUListElement>
} & HTMLProps<HTMLDivElement>

type Tabs = {
  Title: typeof TabListItem
  Tab: typeof Tab
  Panel: typeof TabPanel
} & React.FC<TabsProps>

type TabListItemProps = {
  _targetId?: string
  listItemProps?: HTMLProps<HTMLLIElement>
} & Omit<HTMLProps<HTMLAnchorElement>, 'href'>

type TabProps = {
  id: string
} & PropsWithChildren

type TabPanelProps = {
  _targetId?: string
} & Omit<HTMLProps<HTMLDivElement>, 'id'>

const TabList: React.FC<HTMLProps<HTMLUListElement>> = ({
  children,
  className,
  role = 'tablist',
  ...rest
}) => {
  return (
    <ul className={clsx('nhsuk-tabs__list', className)} role={role} {...rest}>
      {children}
    </ul>
  )
}

const TabListItem: React.FC<TabListItemProps> = ({
  children,
  className,
  listItemProps,
  id,
  role = 'tab',
  tabIndex = 0,
  _targetId,
  ...rest
}) => {
  const { className: listItemClassName, ...restListItemProps } =
    listItemProps || {}

  const { selectedTab, setSelectedTab } = useTabsContext()
  const generatedId = useIdWithPrefix('tab-item')
  const linkId = id || generatedId

  return (
    <li
      className={clsx(
        'nhsuk-tabs__list-item',
        { 'nhsuk-tabs__list-item--selected': _targetId === selectedTab },
        listItemClassName,
      )}
      role="presentation"
      {...restListItemProps}
    >
      <a
        className={clsx('nhsuk-tabs__tab', className)}
        aria-selected={_targetId === selectedTab}
        role={role}
        tabIndex={tabIndex}
        id={linkId}
        href={`#${_targetId}`}
        aria-controls={_targetId}
        {...rest}
        onClick={() => {
          // @typescript-eslint/no-non-null-assertion
          setSelectedTab(_targetId!)
        }}
      >
        {children}
      </a>
    </li>
  )
}

const TabPanel: React.FC<TabPanelProps> = ({
  className,
  children,
  role = 'tabpanel',
  _targetId,
  ...rest
}) => {
  const { selectedTab } = useTabsContext()

  return (
    <div
      className={clsx(
        'nhsuk-tabs__panel',
        { 'nhsuk-tabs__panel--hidden': _targetId !== selectedTab },
        className,
      )}
      id={_targetId}
      {...rest}
      role={role}
    >
      {children}
    </div>
  )
}

const Tab: React.FC<TabProps> = ({ id, children }) => {
  return children
}

const Tabs: Tabs = ({
  children,
  className,
  title,
  titleProps,
  listProps = {},
  ...rest
}): JSX.Element => {
  const { className: titleClassName, ...restTitleProps } = titleProps || {}

  const tabs = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === Tab,
  ) as ReactElement<TabProps>[]

  const listItems = tabs.flatMap((tab, i) => {
    const tabChildren = React.Children.toArray(tab.props.children)
    const tabListItem = tabChildren.find(
      (child) => React.isValidElement(child) && child.type === TabListItem,
    ) as ReactElement<TabListItemProps>

    return React.cloneElement(tabListItem, {
      key: i,
      _targetId: tab.props.id,
    })
  }, []) as ReactElement<TabListItemProps>[]

  const tabPanels = tabs.flatMap((tab, i) => {
    const tabChildren = React.Children.toArray(tab.props.children)
    const tabPanel = tabChildren.find(
      (child) => React.isValidElement(child) && child.type === TabPanel,
    )

    return React.cloneElement(tabPanel as ReactElement<TabPanelProps>, {
      key: i,
      _targetId: tab.props.id,
      'aria-labelledby': tab.props.id,
    })
  }, [])

  const [selectedTab, setSelectedTab] = useState(tabs.at(0)?.props.id ?? '')

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      <div className={clsx('nhsuk-tabs js-enabled', className)} {...rest}>
        <h2
          className={clsx('nhsuk-tabs__title', titleClassName)}
          {...restTitleProps}
        >
          {title}
        </h2>
        <TabList {...listProps}>{listItems}</TabList>
        {tabPanels}
      </div>
    </TabsContext.Provider>
  )
}

Tabs.Title = TabListItem
Tabs.Tab = Tab
Tabs.Panel = TabPanel

Tabs.displayName = 'Tabs'
TabListItem.displayName = 'Tabs.Title'
TabPanel.displayName = 'Tabs.Panel'
Tab.displayName = 'Tabs.Tab'

export default Tabs
