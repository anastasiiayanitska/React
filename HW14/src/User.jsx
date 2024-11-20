import React from 'react';
import { connect } from 'react-redux';

const User = ({ name, status }) => {
  return (
    <div>
      <h1>User Info</h1>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);
