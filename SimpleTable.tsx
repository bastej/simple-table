import React from 'react';

import Divider from 'Components/Divider/Divider';

type Props<T extends string> = {
  columnConfig: { name: T; label: string }[];
  records: { [k in T]: string | number }[];
  recordUniqueKey: T;
};

const SimpleTable = <T extends string>({ columnConfig, records, recordUniqueKey }: Props<T>) => {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          {columnConfig.map(column => (
            <th key={column.name}>{column.label.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <React.Fragment key={record[recordUniqueKey] || index}>
            {/* add divider in styles module */}
            <tr>
              <td colSpan={3}>
                <Divider />
              </td>
            </tr>
            <tr>
              {columnConfig.map(column => (
                <td key={record[column.name]}>{record[column.name]}</td>
              ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
