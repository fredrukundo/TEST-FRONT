import React from 'react';
import useFetchUser from '../Hooks/useFetchUser';
import styles from './UserDetails.module.css';

const UserDetails = ({ userId }) => {
  const { user, loading, error, refetch } = useFetchUser(userId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.userDetails}>
      <h2>User Details</h2>
      {user && (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <button className={styles.refreshButton} onClick={refetch}>Refresh</button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
