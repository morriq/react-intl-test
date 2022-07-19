import { FormattedMessage, IntlProvider } from 'react-intl';
import './App.css';

import { HelloLibrary } from 'ui';

function App() {
  return (
    <IntlProvider locale='pl' defaultLocale='pl'>
      <div className='App'>
        <FormattedMessage
          id='myMessage'
          defaultMessage='Hello from apps/some-app'
        />
        <HelloLibrary />
      </div>
    </IntlProvider>
  );
}

export default App;
