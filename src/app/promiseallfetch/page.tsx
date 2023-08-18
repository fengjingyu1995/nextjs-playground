export const dynamic = 'force-dynamic'

export default async function PromiseAllFetch() {
    const t1 = performance.now();
    const times = 5
    const delay = 2000
    const promiseArr = []
    for (let i = 0; i < times; i++) {
        promiseArr.push(fetch(`http://localhost:3000/api/sleep?delay=${delay}`))
    }
    await Promise.all(promiseArr)
    const t2 = performance.now();
    return <div>promise all fetch takes {t2-t1}ms</div>
}