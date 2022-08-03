import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormComponents/FormikControl';
import { Centralizer } from '../components/Centralizer';

export function RegisterInstitution() {
    const options = [
        { key: 'Sim', value: 'yesmoc' },
        { key: 'Não', value: 'notmoc' },
    ]
    const initialValues = {
        institution_code: '',
        institution_name: '',
        institution_director_name: '',
        institution_address: {
            street: "",
            neighborhood: "",
            city: "",
            state: "",
            country: "",
            cep: "",
        },
        institution_campi: "",
    }
    const validationSchema = Yup.object({
        institution_code: Yup.string('O código precisa ser um número de 8 dígitos').min(8, 'O código MEC precisa ter 8 dígitos').max(8, 'O código MEC precisa ter 8 dígitos').required('Obrigatório'),
        institution_name: Yup.string().required('Obrigatório'),
        institution_director_name: Yup.string().required('Obrigatório'),
        institution_address: Yup.object().shape({
            street: Yup.string().required("Obrigatório"),
            neighborhood: Yup.string().required("Obrigatório"),
            city: Yup.string().required("Obrigatório"),
            state: Yup.string().required("Obrigatório"),
            country: Yup.string().required("Obrigatório"),
            cep: Yup.string().required("Obrigatório"),
        }),
        institution_campi: Yup.string().required('Obrigatório'),
    })
    const navigate = useNavigate()
    const onSubmit = values => {
        console.log('Form data', values)
        values.institution_campi === 'yesmoc' ? navigate('/registercampi') : navigate('/registerCourse')
    }
    return (
        <>
            <Centralizer>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        formik => {
                            return <Form>
                                <h3>Formulário de cadastro da Instituição</h3>
                                <FormikControl
                                    control='input'
                                    type='text'
                                    label='1. Código da instituição (MEC)'
                                    name='institution_code'
                                />
                                <FormikControl
                                    control='input'
                                    type='text'
                                    label='2. Nome da Instituição de Ensino Superior (por extenso e sigla)'
                                    name='institution_name'
                                />
                                <FormikControl
                                    control='input'
                                    type='text'
                                    label='3. Nome do dirigente da Instituição'
                                    name='institution_director_name'
                                />
                                <FormikControl
                                    control='label'
                                    label='4. Endereço da sede da Instituição'
                                    name='institution_address'
                                />
                                <FormikControl
                                    control='input'
                                    type='text'
                                    label='Rua/Avenida'
                                    name='institution_address.street'
                                />
                                <FormikControl
                                    control='input'
                                    type='text'
                                    label='Bairro'
                                    name='institution_address.neighborhood'
                                />
                                <FormikControl
                                    control='input'
                                    type='text'
                                    label='Cidade'
                                    name='institution_address.city'
                                />
                                <FormikControl
                                    control='input'
                                    type='text'
                                    label='Estado'
                                    name='institution_address.state'
                                />
                                <FormikControl
                                    control='input'
                                    type='text'
                                    label='País'
                                    name='institution_address.country'
                                />
                                <FormikControl
                                    control='input'
                                    type='text'
                                    label='CEP'
                                    name='institution_address.cep'
                                />

                                <FormikControl
                                    control='radio'
                                    label='5. A instituição tem Campi?'
                                    name='institution_campi'
                                    options={options}
                                />

                                <button type='submit' className='button' disabled={!formik.isValid}>Avançar</button>
                            </Form>
                        }
                    }
                </Formik>
            </Centralizer>
            <Outlet />
        </>
    )
}