import { sleep } from '@/utils/sleep';

export default async function getUser(userId: string) {
  await sleep(2000);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) throw new Error('failed to fetch user');

  return res.json();
}
