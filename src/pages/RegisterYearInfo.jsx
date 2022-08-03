import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormComponents/FormikControl';
import { Centralizer } from '../components/Centralizer';
import { Button } from '../components/Button';

export function RegisterYearInfo() {
  const initialValues = {
    classmates_number: '',
    teachers_number: '',
    teachers_exclusive_dedication_number: '',
    teachers_full_time_number: '',
    teachers_part_time_number: '',
    teachers_hourly_regime_number: '',
    teachers_with_working_experience_number: '',
    teachers_lato_sensu_number: '',
    teachers_stricto_sensu_number: '',
    teachers_with_training_programs_number: '',
    projects_with_partnerships_number: '',
    technical_administrative_servers_number: '',
  }
  const validationSchema = Yup.object({
    classmates_number: Yup.string().required("Obrigatório"),
    teachers_number: Yup.string().required("Obrigatório"),
    teachers_exclusive_dedication_number: Yup.string().required("Obrigatório"),
    teachers_full_time_number: Yup.string().required("Obrigatório"),
    teachers_part_time_number: Yup.string().required("Obrigatório"),
    teachers_hourly_regime_number: Yup.string().required("Obrigatório"),
    teachers_with_working_experience_number: Yup.string().required("Obrigatório"),
    teachers_lato_sensu_number: Yup.string().required("Obrigatório"),
    teachers_stricto_sensu_number: Yup.string().required("Obrigatório"),
    teachers_with_training_programs_number: Yup.string().required("Obrigatório"),
    projects_with_partnerships_number: Yup.string().required("Obrigatório"),
    technical_administrative_servers_number: Yup.string().required("Obrigatório"),
  })
  const navigate = useNavigate()
  const onSubmit = values => {
    console.log('Form data', values)
    navigate('/')
  }

  return (
    <Centralizer>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
          formik => {
            return <Form>
              <h3>Formulário de inserção de informações anuais:</h3>
              <FormikControl
                control='input'
                type='text'
                label='1.Informe o número total de alunos matriculados no curso no ano de 2020'
                name='classmates_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='2.Informe o número total de docentes que atuaram no curso no ano de 2020'
                name='teachers_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='3.Informe o número total de docentes que atuaram no curso no ano de 2020 em regime de dedicação exclusiva.'
                name='teachers_exclusive_dedication_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='4.Informe o número total de docentes que atuaram no curso no ano de 2020 em regime de tempo integral (40 horas)'
                name='teachers_full_time_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='5.Informe o número total de docentes que atuaram no curso no ano de 2020 em regime de tempo parcial (20 horas).'
                name='teachers_part_time_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='6.Informe o número total de docentes que atuaram no curso no ano de 2020 em regime horista.'
                name='teachers_hourly_regime_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='7.Informe o número total de docentes que atuaram no curso no ano de 2020 com experiência no mercado de trabalho (além da área acadêmica).'
                name='teachers_with_working_experience_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='8.Informe a quantidade de professores do curso que participaram como docentes em cursos de especialização Lato Sensu no período de janeiro a dezembro de 2020'
                name='teachers_lato_sensu_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='9.Informe a quantidade de professores do curso que participaram como docentes em cursos de pós-graduação Stricto Sensu no período de janeiro a dezembro de 2020'
                name='teachers_stricto_sensu_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='10.Informe a quantidade de professores que foram cursistas em programas de capacitação, aprimoramento, atualização e formação continuada no período de janeiro a dezembro de 2020'
                name='teachers_with_training_programs_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='11.Informe o número de projetos em parcerias com instituições de outras nacionalidades no período de janeiro a dezembro de 2020.'
                name='projects_with_partnerships_number'
              />
              <FormikControl
                control='input'
                type='text'
                label='12.Informe a quantidade de servidores técnicos-admistrativos "laboratoristas" específicos do curso no período de janeiro a dezembro de 2020'
                name='technical_administrative_servers_number'
              />

              <Button disabled={!formik.isValid}>Avançar</Button>
            </Form>
          }
        }
      </Formik>
    </Centralizer>
  )
}
