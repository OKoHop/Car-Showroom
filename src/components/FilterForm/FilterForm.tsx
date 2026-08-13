import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

type initialValues = {
  filter: string;
};

const filterSchema = Yup.object().shape({
  filter: Yup.string().required('Fill the form. Please.'),
});

export const FilterForm = () => {
  const initialValues: initialValues = {
    filter: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={filterSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form
        onChange={value => {
          console.log(value.target.value);
        }}
      >
        <Field name="filter" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
