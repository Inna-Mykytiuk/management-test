import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './utils/fetchUsers';
import { AppDispatch } from './store/store';
import './App.css';

import Hero from './components/Hero';
import UserTable from './components/UserTable';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  return (
    <section className="section">
      <div className='container'>
        <div className='wrapper'>
          <Hero />
          <UserTable />
        </div>
      </div>
    </section>
  );
};

export default App;

