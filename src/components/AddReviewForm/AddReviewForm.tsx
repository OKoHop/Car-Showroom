import { Field, Form, Formik } from 'formik';

export const AddReviewForm = () => {
  const initialValues = {
    reviewerName: '',
    reviewerEmail: '',
    rating: '1',
    comment: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <Field name="reviewerName" placeholder="Enter your Name" />
        <Field name="reviewerEmail" placeholder="Enter your Email" />
        <Field name="rating" as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Field>
        <Field name="comment" placeholder="Enter your Review" />
        <button type="submit">Sent</button>
      </Form>
    </Formik>
  );
};
