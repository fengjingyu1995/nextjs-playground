'use client';
import { withLDProvider } from 'launchdarkly-react-client-sdk';

function Content(props: any) {
  return <>{props.children}</>;
}

const config = {
  clientSideID: '',
};

function WithLDProviderContent({ id, children, context }: any) {
  config.clientSideID = id;
  if (context) {
    config.context = context;
  }

  const Provider = withLDProvider(config)(Content);
  return <Provider>{children}</Provider>;
}

export default WithLDProviderContent;
