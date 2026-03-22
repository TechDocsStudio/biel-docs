import React from 'react';
import Content from '@theme-original/DocItem/Content';
import CopyPageButton from '@theme/CopyPageButton';

export default function ContentWrapper(props) {
  return (
    <>
      <div className="doc-header-with-copy">
        <CopyPageButton />
      </div>
      <Content {...props} />
    </>
  );
}
