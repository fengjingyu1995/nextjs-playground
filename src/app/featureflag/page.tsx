import FeatureFlagChild from '@/components/featureFlagChild';
import FeatureFlagServer from '@/components/featureFlagServer';
import WithLDProviderContent from '@/components/withLDProvider';
import { getClient } from '@/lib/getLaunchDarklyClient';

async function FeatureFlag() {
  const client = await getClient();
  const flags = await client.allFlagsState({ key: '' });
  console.log(flags.toJSON());
  let flagstring = await client.variation('flagstring', { key: '' }, false);
  console.log(flagstring);

  let isShowTest = await client.variation('isShowTest', { key: '' }, false);
  console.log(isShowTest);
  // console.log(await client.variation('isShowTest', { key: 'store' }, false));
  // console.log(
  //   await client.variationDetail('isShowTest', { key: 'stores' }, false)
  // );
  return (
    <div>
      <FeatureFlagServer isShowTest={isShowTest} />
      <WithLDProviderContent id={process.env.LAUNCHDARKLY_SDK_CLIENT}>
        <FeatureFlagChild />
      </WithLDProviderContent>
    </div>
  );
}
export default FeatureFlag;
