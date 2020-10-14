import React from 'react';

import Dashboard from '../../Dashboard/Dashboard';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <div>
        <Dashboard userInfo={userInfo} authService={authService} />
      </div>
    </div>
  );
}
export default RenderHomePage;
