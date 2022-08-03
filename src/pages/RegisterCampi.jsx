import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormComponents/FormikControl';
import { Centralizer } from '../components/Centralizer';
import { Button } from '../components/Button';

export function RegisterCampi() {
  const options = [
    { key: 'Sim', value: 'yesmoc' },
    { key: 'Não', value: 'notmoc' },
  ]
  const initialValues = {
    campi_name: '',
    campi_initials: '',
    campi_director_name: '',
    campi_address: {
      street: "",
      neighborhood: "",
      city: "",
      state: "",
      country: "",
      cep: "",
    }
  }
  const validationSchema = Yup.object({
    campi_name: Yup.string().required("Obrigatório"),
    campi_initials: Yup.string().required("Obrigatório"),
    campi_director_name: Yup.string().required("Obrigatório"),
    campi_address: Yup.object().shape({
      street: Yup.string().required("Obrigatório"),
      neighborhood: Yup.string().required("Obrigatório"),
      city: Yup.string().required("Obrigatório"),
      state: Yup.string().required("Obrigatório"),
      country: Yup.string().required("Obrigatório"),
      cep: Yup.string().required("Obrigatório"),
    }),
  })
  const navigate = useNavigate()
  const onSubmit = values => {
    console.log('Form data', values)
    values.campi_campi === 'yesmoc' ? navigate('/registercampi') : navigate('/coursequestion')
  }

  return (
    <Centralizer>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
          formik => {
            return <Form>
              <h3>Formulário de cadastro do Campus:</h3>
              <FormikControl
                control='input'
                type='text'
                label='1. Nome do Campus'
                name='campi_name'
              />
              <FormikControl
                control='input'
                type='text'
                label='2. Sigla'
                name='campi_initials'
              />
              <FormikControl
                control='input'
                type='text'
                label='3. Nome do dirigente do Campus'
                name='campi_director_name'
              />
              <FormikControl
                control='label'
                label='4. Endereço do Campus'
                name='campi_address'
              />
              <FormikControl
                control='input'
                type='text'
                label='Rua/Avenida'
                name='campi_address.street'
              />
              <FormikControl
                control='input'
                type='text'
                label='Bairro'
                name='campi_address.neighborhood'
              />
              <FormikControl
                control='input'
                type='text'
                label='Cidade'
                name='campi_address.city'
              />
              <FormikControl
                control='input'
                type='text'
                label='Estado'
                name='campi_address.state'
              />
              <FormikControl
                control='input'
                type='text'
                label='País'
                name='campi_address.country'
              />
              <FormikControl
                control='input'
                type='text'
                label='CEP'
                name='campi_address.cep'
              />
              <FormikControl
                control='radio'
                label='4. Deseja adicionar mais um Campus?'
                name='institution_campi'
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
