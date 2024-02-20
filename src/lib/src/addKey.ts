import React, { ReactElement } from 'react';

export function addKey(node: ReactElement, key: string): ReactElement {
  if (React.isValidElement(node)) {
    return React.cloneElement(node, { key });
  }
  return node;
}
