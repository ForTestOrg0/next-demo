import { use } from 'react';
import { PageProps } from '@/types/page';
// import Chart from '@/components/Echart';
import styles from './styles.module.scss';

const fetchCategory = async (
  id: string | undefined
): Promise<string | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!id) return;

  return 'ok';
};

export default function Page({ params }: PageProps) {
  const result = use(fetchCategory(params.id));

  if (!result) return null;

  return (
    <div>
      id: {params.id}
      category: {result}
      <div className={styles.dashboard}>
        <p>p - text text text</p>
        <span>span - text text text</span>
      </div>
      {/* <Chart /> */}
    </div>
  );
}
