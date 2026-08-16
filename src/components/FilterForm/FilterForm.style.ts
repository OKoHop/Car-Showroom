import { Form, Field } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px 0 15px 0;
`;

export const StyledFilter = styled(Field)`
  width: 100%;
`;
