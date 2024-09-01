import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterUsers } from '../store/userSlice';
import { RootState } from '../store/store';

const UserTable: React.FC = () => {
  const dispatch = useDispatch();
  const { filteredUsers, loading, error } = useSelector((state: RootState) => state.users);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterUsers(e.target.value));
  };

  return (
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
  );
};

export default UserTable;
