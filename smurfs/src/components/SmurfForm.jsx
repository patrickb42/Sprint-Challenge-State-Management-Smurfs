import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import { postData } from '../actions';

const SmurfForm = ({ values, errors, touched, status, postData }) => {
  useEffect(() => {
    console.log('status', status);
    if (status !== undefined) postData('smurfs', status);
  }, [status, postData]);

  return (<>
    <Form>
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field type="text" name="name" placeholder="Name" />
      {touched.age && errors.age && <p>{errors.age}</p>}
      <Field type="number" name="age" placeholder="Age" />
      {touched.height && errors.height && <p>{errors.height}</p>}
      <Field type="number" name="height" placeholder="Height" />
      <button type="submit">Submit</button>
    </Form>
  </>);
};

const ConnectedSmurfForm = connect(null, { postData })(SmurfForm);

export default withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || '',
      age: age || undefined,
      height: height || undefined,
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required(),
    age: Yup.number()
      .positive(),
    height: Yup.number()
      .positive(),
  }),

  handleSubmit({ name, age, height }, { setStatus, resetForm }) {
    setStatus({ name, age: parseInt(age), height: `${height}cm`});
    resetForm();
  },
})(ConnectedSmurfForm);
