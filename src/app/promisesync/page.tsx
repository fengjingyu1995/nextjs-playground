import { sleep } from '@/utils/sleep'

export default async function PromiseSync() {
    const t1 = performance.now();
    await sleep(2000)
    await sleep(2000)
    await sleep(2000)
    await sleep(2000)
    await sleep(2000)
    const t2 = performance.now();
    return <div>promise sync takes {t2-t1}ms</div>
}