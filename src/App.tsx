import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterUsers } from './store/userSlice';
import { fetchUsers } from './utils/fetchUsers';
import { RootState, AppDispatch } from './store/store';
import './App.css';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { filteredUsers, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterUsers(e.target.value));
  };

  return (
    <div className="App">
      <h1>User Management Table</h1>
      <input
        type="text"
        placeholder="Search by name, username, email, or phone..."
        onChange={handleSearch}
        className="search-input"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

