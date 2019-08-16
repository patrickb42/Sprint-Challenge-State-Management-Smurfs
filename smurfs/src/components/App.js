import React, { useEffect } from "react";
import { connect } from 'react-redux';

import "./App.css";

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import { getData } from "../actions";
const App = ({
  fetchingData,
  receivedData,
  sendingData,
  sentData,
  error,
  smurfs,
  getData,
}) => {
  useEffect(() => {
    getData('smurfs');
  }, [getData]);

  return (
    <div className="App">
      <SmurfForm />
      {fetchingData && <p>Loading...</p>}
      {receivedData && <Smurfs smurfs={smurfs}/>}
    </div>
  );
}

const mapStateToProps = ({
  fetchingData,
  receivedData,
  sendingData,
  sentData,
  error,
  smurfs,
}) => {
  return {
    fetchingData,
    receivedData,
    sendingData,
    sentData,
    error,
    smurfs,
  }
};

export default connect(mapStateToProps, { getData })(App);
