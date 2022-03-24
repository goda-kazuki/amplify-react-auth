/* src/App.js */
import React from 'react'
import Amplify from 'aws-amplify'

import awsExports from "./aws-exports";

import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {useAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

const App = () => {
  // ログイン状態の取得
  const {route} = useAuthenticator(context => [context.route]);

  return (
    <div>
      <CheckLogin route={route}/>

      <Authenticator>
        {({signOut, user}) => (
          <div>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>

  );
}

function CheckLogin(props) {
  return props.route === 'authenticated' ? 'ログイン済み' : '未ログイン';
}

// export default App
export default () => (
  <Authenticator.Provider>
    <App/>
  </Authenticator.Provider>
);
