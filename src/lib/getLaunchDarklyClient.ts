import LaunchDarkly from 'launchdarkly-node-server-sdk';

let launchDarklyClient: LaunchDarkly.LDClient | undefined;

async function initialize() {
  const LAUNCHDARKLY_SDK_KEY = process.env.LAUNCHDARKLY_SDK_KEY;
  if (!LAUNCHDARKLY_SDK_KEY) {
    throw new Error('Cannot find "LAUNCHDARKLY_SDK_KEY"');
  }
  const client = LaunchDarkly.init(LAUNCHDARKLY_SDK_KEY);
  await client.waitForInitialization();
  return client;
}

export async function getClient() {
  if (launchDarklyClient) return launchDarklyClient;
  return (launchDarklyClient = await initialize());
}
