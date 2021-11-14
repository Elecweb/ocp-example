import React, { ReactNode } from 'react';

type Column = {
  label: string;
};

export enum Action {
  CHECKBOX,
  DELETE,
  ADD,
}

const Row = ({
  cells,
  renderAction,
}: {
  cells: string[];
  renderAction?: () => ReactNode;
}) => {
  return (
    <tr>
      {cells.map((cell) => (
        <td>{cell}</td>
      ))}
      {renderAction ? <td>{renderAction()}</td> : null}
    </tr>
  );
};

const Table = ({
  columns,
  rows,
  renderAction,
}: {
  columns: Column[];
  rows: string[][];
  renderAction?: () => ReactNode;
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th>{column.label}</th>
            ))}
            {renderAction ? <th>Action</th> : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells) => (
            <Row cells={cells} renderAction={renderAction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
