import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { BareProps, DownloadRef } from '@/types/page';
import { DownloadCsvIcon } from '@/ui/Svg';
import { Button } from '@/ui';
import * as XLSX from 'xlsx';

interface Props extends BareProps {
  text?: string | number;
  onClick?: () => void;
}

const Component = forwardRef<DownloadRef, Props>(function Component(
  { text = 'Download page data', className, onClick },
  ref
) {
  useImperativeHandle(ref, () => ({
    downloadCsv(tableData, tableName) {
      const worksheet = XLSX.utils.aoa_to_sheet(tableData);
      const new_workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS');
      XLSX.writeFile(new_workbook, tableName);
    },
  }));
  return (
    <Button outline className="flex" onClick={onClick}>
      <DownloadCsvIcon className="w-5 mr-2.5 text-sub-network" />
      {text}
    </Button>
  );
});
export default Component;
