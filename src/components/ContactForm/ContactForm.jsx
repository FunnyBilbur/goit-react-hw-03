import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
  const nameFieldID = useId();
  const numberFieldID = useId();
  const handleSubmit = e => {
    onAdd({
      id: Date.now(),
      name: e.name,
      number: e.number,
    });
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.name}>
          <label htmlFor="nameFieldID">Name</label>
          <Field type="text" name="name" id={nameFieldID} />
        </div>
        <div className={css.name}>
          <label htmlFor="numberFieldID">Number</label>
          <Field type="text" name="number" id={numberFieldID} />
        </div>
        <button type="submit" className={css.submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
