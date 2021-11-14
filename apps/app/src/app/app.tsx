import Table, { Action } from './example/react-not-confom-ocp';
import './app.css';

const App = () => {
  const columns = [
    {
      label: 'name',
    },
    {
      label: 'lastname',
    },
    {
      label: 'age',
    },
  ];

  const rows = [
    ['John', 'Doe', '30'],
    ['John', 'Doe', '30'],
    ['John', 'Doe', '30'],
    ['John', 'Doe', '30'],
    ['John', 'Doe', '30'],
  ];

  return (
    <div>
      <Table columns={columns} rows={rows} actions={[]} />
      <Table
        columns={columns}
        rows={rows}
        actions={[Action.ADD]}
        onAddClick={() => {
          window.alert('add');
        }}
      />
      <Table
        columns={columns}
        rows={rows}
        actions={[Action.ADD, Action.DELETE, Action.CHECKBOX]}
        onAddClick={() => {
          window.alert('add');
        }}
      />
    </div>
  );
};

export default App;
