import { sleep } from '@/utils/sleep'

export default async function PromiseAll() {
    const t1 = performance.now();
    await Promise.all([sleep(2000), sleep(2000), sleep(2000), sleep(2000), sleep(2000)])
    const t2 = performance.now();
    return <div>promise all takes {t2-t1}ms</div>
}