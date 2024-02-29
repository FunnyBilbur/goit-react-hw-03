import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import * as Yup from 'yup';

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
  const AddContactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={AddContactSchema}
    >
      <Form className={css.form}>
        <div className={css.name}>
          <label htmlFor="nameFieldID">Name</label>
          <Field type="text" name="name" id={nameFieldID} />
          {/* <ErrorMessage className={css.validation} name="name" /> */}
          <label className={css.validation}>
            <ErrorMessage name="name" />
          </label>
        </div>
        <div className={css.name}>
          <label htmlFor="numberFieldID">Number</label>
          <Field type="text" name="number" id={numberFieldID} />
          <label className={css.validation}>
            <ErrorMessage name="number" />
          </label>
        </div>
        <button type="submit" className={css.submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
