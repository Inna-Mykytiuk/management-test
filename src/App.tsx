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
    <section className="section">
      <div className='container'>
        <div className='wrapper'>
          <div className='hero'>
            <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero image" className='hero-img' />
          </div>
          <div className='table-container'>
            <h1 className='title'>User Management Table</h1>
            <input
              type="text"
              placeholder="Search by name, username, email, or phone..."
              onChange={handleSearch}
              className="search-input"
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {filteredUsers.length === 0 && !loading && !error ? (
              <p>No users found. Please try another search term.</p>
            ) : (
              <table>
                <thead>
                  <tr className="table-header">
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="user-name">{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td className='user-phone'>{user.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

