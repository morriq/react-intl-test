import { FormattedMessage, injectIntl } from 'react-intl';

function HelloLibrary(props: any) {
  return <FormattedMessage defaultMessage='Hello from library' />;
}

export default injectIntl(HelloLibrary);
