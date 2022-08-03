import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormComponents/FormikControl';
import { Centralizer } from '../components/Centralizer'
import { Button } from '../components/Button'

export function CourseQuestion() {
  const options = [
    { key: 'Sim', value: 'yesmoc' },
    { key: 'Não', value: 'notmoc' },
  ]
  const initialValues = {
    course_question: '',
  }

  const validationSchema = Yup.object({
    course_question: Yup.string().required("Obrigatório"),
  })

  const navigate = useNavigate()
  const onSubmit = values => {
    console.log('Form data', values)
    values.campi_campi === 'yesmoc' ? navigate('/registercampi') : navigate('/registercourse')
  }
  return (
    <Centralizer>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
          formik => {
            return <Form>
              <FormikControl
                control='radio'
                label='Você deseja incluir algum curso para o Campus?'
                name='course_question'
                options={options}
              />
              <Button disabled={!formik.isValid}>Avançar</Button>
            </Form>
          }
        }
      </Formik>
    </Centralizer>
  )
}
