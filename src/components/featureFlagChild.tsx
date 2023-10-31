'use client';

import { useFlags } from 'launchdarkly-react-client-sdk';

function FeatureFlagChild() {
  let { isShowTest } = useFlags();
  return (
    <div>
      <h2>This is the FeatureFlagChild</h2>
      <p>
        isShowTest is{' '}
        <span className='font-bold'>{isShowTest ? 'true' : 'false'}</span>
      </p>
    </div>
  );
}

export default FeatureFlagChild;
