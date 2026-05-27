import {
  Tabs as RACTabs,
  TabList as RACTabList,
  Tab as RACTab,
  TabPanels as RACTabPanels,
  TabPanel as RACTabPanel,
  SelectionIndicator,
} from 'react-aria-components/Tabs';
import {composeRenderProps} from 'react-aria-components/composeRenderProps';
import './Tabs.css';

export function Tabs(props) {
  return <RACTabs {...props} />;
}

export function TabList(props) {
  return <RACTabList {...props} />;
}

export function Tab(props) {
  return (
    <RACTab {...props}>
      {composeRenderProps(props.children, children => (<>
        {children}
        <SelectionIndicator />
      </>))}
    </RACTab>
  );
}

export function TabPanels(props) {
  return <RACTabPanels {...props} />;
}

export function TabPanel(props) {
  return <RACTabPanel {...props} />;
}
