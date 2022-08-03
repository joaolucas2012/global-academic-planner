import React from 'react';
// import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormComponents/FormikControl';
import { Centralizer } from '../components/Centralizer';
import { Button } from '../components/Button'

export function RegisterCourse() {
  const dropdownOptions = [
    { key: 'Selecione um conceito', value: '' },
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4' },
    { key: '5', value: '5' },
    { key: 'SC', value: 'SC' },
  ]
  const initialValues = {
    course_name: '',
    course_code: '',
    course_modality: '',
    enade_concept: '',
    enade_last_year: '',
    project_last_version_year: '',
    investment: '',
    course_coordinator: '',
    course_coordinator_curriculum: '',
    course_coordinator_email: '',
  }
  const validationSchema = Yup.object({
    course_name: Yup.string().required("Obrigatório"),
    course_code: Yup.string().required("Obrigatório"),
    course_modality: Yup.string().required("Obrigatório"),
    enade_concept: Yup.string().required("Obrigatório"),
    enade_last_year: Yup.string().required("Obrigatório"),
    project_last_version_year: Yup.string().required("Obrigatório"),
    investment: Yup.string().required("Obrigatório"),
    course_coordinator: Yup.string().required("Obrigatório"),
    course_coordinator_curriculum: Yup.string().required("Obrigatório"),
    course_coordinator_email: Yup.string().email("Formato de email inválido").required("Obrigatório"),
  })
  // const navigate = useNavigate()
  const onSubmit = values => {
    console.log('Form data', values)
    // values.course_course === 'yesmoc' ? navigate('/RegisterCourse') : navigate('/coursequestion')
  }

  return (
    <Centralizer>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
          formik => {
            return <Form>
              <h3>Formulário de cadastro do Curso:</h3>
              <FormikControl
                control='input'
                type='text'
                label='1.Nome do curso'
                name='course_name'
              />
              <FormikControl
                control='input'
                type='text'
                label='2.Código do curso, conforme cadastro no MEC'
                name='course_code'
              />
              <FormikControl
                control='input'
                type='text'
                label='3.Modalidade do curso'
                name='course_modality'
              />
              <FormikControl
                control='select'
                label='4.Conceito ENADE obtido na última avaliação:'
                name='enade_concept'
                options={dropdownOptions}
              />
              <FormikControl
                control='input'
                type='text'
                label='5.Ano da última avaliação do ENADE'
                name='enade_last_year'
              />
              <FormikControl
                control='input'
                type='text'
                label='6.Ano da última versão atualizada do Projeto Pedagógico do Curso (PPC)'
                name='project_last_version_year'
              />
              <FormikControl
                control='input'
                type='text'
                label='7.Informe o investimento (estrutura/projetos/capacitação/etc.)
                no curso para o período de janeiro a dezembro de 2020'
                name='investment'
              />
              <FormikControl
                control='input'
                type='text'
                label='8.Nome do coordenador do curso'
                name='course_coordinator'
              />
              <FormikControl
                control='input'
                type='text'
                label=' 9.Link do currículo Lattes do coordenador do curso'
                name='course_coordinator_curriculum'
              />
              <FormikControl
                control='input'
                type='email'
                label='10.E-mail do coordenador do curso'
                name='course_coordinator_email'
              />

              <Button disabled={!formik.isValid}>Cadastrar</Button>
            </Form>
          }
        }
      </Formik>
    </Centralizer>
  )
}
