import Table from './example/react-ocp';
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
      <Table columns={columns} rows={rows} />
      <Table
        columns={columns}
        rows={rows}
        renderAction={() => {
          return (
            <button
              className="bg-red"
              onClick={() => {
                window.alert('add');
              }}
            >
              Add
            </button>
          );
        }}
      />
      <Table
        columns={columns}
        rows={rows}
        renderAction={() => {
          return (
            <>
              <button
                onClick={() => {
                  window.alert('add');
                }}
              >
                Add
              </button>
              <button
                onClick={() => {
                  window.alert('delete');
                }}
              >
                Delete
              </button>
              <input
                type="checkbox"
                style={{
                  marginRight: 4,
                  position: 'relative',
                  top: 2,
                }}
                onChange={() => {
                  window.alert('checked');
                }}
              />
            </>
          );
        }}
      />
    </div>
  );
};

export default App;
