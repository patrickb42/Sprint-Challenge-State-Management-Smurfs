import React, { useEffect } from "react";
import { connect } from 'react-redux';

import "./App.css";

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import { getData } from "../actions";
const App = ({
  fetchingData,
  receivingData,
  sendingData,
  sentData,
  error,
  smurfs,
  getData,
}) => {
  useEffect(() => {
    getData('smurfs');
  }, []);

  return (
    <div className="App">
      {<Smurfs smurfs={[]}/>}
    </div>
  );
}

const mapStateToProps = ({
  fetchingData,
  receivingData,
  sendingData,
  sentData,
  error,
  smurfs,
}) => {
  return {
    fetchingData,
    receivingData,
    sendingData,
    sentData,
    error,
    smurfs,
  }
};

export default connect(mapStateToProps, { getData })(App);
