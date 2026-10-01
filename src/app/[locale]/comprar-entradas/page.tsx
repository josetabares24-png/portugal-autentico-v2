import ComprarEntradasClient from './ComprarEntradasClient';
import { getTiqetsProductSnapshots } from '@/lib/tiqets-api';

export default async function ComprarEntradasPage() {
  const tiqetsProducts = await getTiqetsProductSnapshots();

  return <ComprarEntradasClient tiqetsProducts={tiqetsProducts} />;
}
