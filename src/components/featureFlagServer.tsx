function FeatureFlagServer({ isShowTest }: any) {
  return (
    <div>
      <h1>This page is used to test feature flag</h1>
      <p>
        isShowTest is{' '}
        <span className='font-bold'>{isShowTest ? 'true' : 'false'}</span>
      </p>
    </div>
  );
}

export default FeatureFlagServer;
