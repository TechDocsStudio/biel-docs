import React from 'react';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import SidebarSwitcher from '@theme/SidebarSwitcher';

export default function ContentWrapper(props) {
  return (
    <>
      <SidebarSwitcher />
      <Content {...props} />
    </>
  );
}
