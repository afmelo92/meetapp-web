import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@rocketseat/unform';

export default function DatePicker({ name }) {
  const ref = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [selected, setSelected] = useState(defaultValue);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); //eslint-disable-line

  return (
    <>
      <ReactDatePicker
        placeholderText="Data do Meetup"
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        showTimeSelect
        ref={ref}
        dateFormat="yyyy-MM-dd'T'HH:mm:ssxxx"
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
};
