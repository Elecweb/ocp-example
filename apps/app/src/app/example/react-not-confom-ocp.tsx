import React from 'react';

type Column = {
  label: string;
};

export enum Action {
  CHECKBOX,
  DELETE,
  ADD,
}

const ActionButton = ({
  type,
  onChecked,
  onDeleteClick,
  onAddClick,
}: {
  type: Action;
  onChecked?: () => void;
  onDeleteClick?: () => void;
  onAddClick?: () => void;
}) => {
  switch (type) {
    case Action.CHECKBOX:
      return (
        <input
          type="checkbox"
          style={{
            marginRight: 4,
            position: 'relative',
            top: 2,
          }}
          onChange={onChecked}
        />
      );

    case Action.ADD:
      return (
        <button
          style={{
            marginRight: 4,
          }}
          onClick={onAddClick}
        >
          Add
        </button>
      );

    case Action.DELETE:
      return (
        <button
          style={{
            marginRight: 4,
          }}
          onClick={onDeleteClick}
        >
          Delete
        </button>
      );
  }
};

const Row = ({
  cells,
  actions,
  onChecked,
  onDeleteClick,
  onAddClick,
}: {
  cells: string[];
  actions: Action[];
  onChecked?: () => void;
  onDeleteClick?: () => void;
  onAddClick?: () => void;
}) => {
  return (
    <tr>
      {cells.map((cell) => (
        <td>{cell}</td>
      ))}
      {actions.length > 0 ? (
        <td>
          {actions.map((action) => {
            return (
              <ActionButton
                type={action}
                onAddClick={onAddClick}
                onChecked={onChecked}
                onDeleteClick={onDeleteClick}
              />
            );
          })}
        </td>
      ) : null}
    </tr>
  );
};

const Table = ({
  columns,
  rows,
  actions,
  onChecked,
  onDeleteClick,
  onAddClick,
}: {
  columns: Column[];
  rows: string[][];
  actions: Action[];
  onChecked?: () => void;
  onDeleteClick?: () => void;
  onAddClick?: () => void;
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th>{column.label}</th>
            ))}
            {actions.length > 0 ? <th>Action</th> : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells) => (
            <Row
              cells={cells}
              actions={actions}
              onChecked={onChecked}
              onDeleteClick={onDeleteClick}
              onAddClick={onAddClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
