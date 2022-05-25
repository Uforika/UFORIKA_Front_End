import React, { memo } from 'react';
import TableHistory from './TableHistory';
import { useTransactions } from './hooks/transactions.hook';
import styles from './styles.module.scss';

const HistoryPage = () => {
  const transactions = useTransactions();

  return <TableHistory transactions={transactions} className={styles.root} />;
};

export default memo(HistoryPage);
