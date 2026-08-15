import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './FilterForm.style';

type initialValues = {
  filter: string;
};

type setSearchQuery = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const filterSchema = Yup.object().shape({
  filter: Yup.string().required('Fill the form. Please.'),
});

export const FilterForm = ({ setSearchQuery }: setSearchQuery) => {
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
      <StyledForm
        onChange={value => {
          setSearchQuery(value.target.value);
        }}
      >
        <Field name="filter" />
      </StyledForm>
    </Formik>
  );
};
