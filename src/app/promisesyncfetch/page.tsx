export const dynamic = 'force-dynamic'

export default async function PromiseSyncFetch() {
    const t1 = performance.now();
    const times = 5
    const delay = 2000
    for (let i = 0; i < times; i++) {
        await fetch(`http://localhost:3000/api/sleep?delay=${delay}`)
    }
    const t2 = performance.now();
    return <div>promise sync takes {t2-t1}ms</div>
}