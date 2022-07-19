import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

function HelloLibrary(props: any) {
  console.log(props);
  const Test = FormattedMessage as any;
  return <Test id="ui.myMessage" defaultMessage="Hello from library" />;
}

export default injectIntl(HelloLibrary);
