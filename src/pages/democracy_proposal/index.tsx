
import Chart from '@/components/Echart';
import styles from './styles.module.scss';
import { Button } from '@/ui';

export default function Page() {
  return (
    <div>
      <div className={styles.dashboard}>
        <p>p - text text text</p>
        <span>span - text text text</span>
      </div>
      <Button>text</Button>
      <Chart />
    </div>
  );
}
