import {useState} from 'react';

const useForm = (callback) => {

  const [values, setValues ] = useState({});

  const handleChange = (e) => {
    let newItem = {
      ...values, 
      [e.target.name]: e.target.value,

    }
    setValues(newItem);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callback && callback(values);
    e.target.reset();
  }

  return [handleSubmit, handleChange, values];
}

export default useForm;