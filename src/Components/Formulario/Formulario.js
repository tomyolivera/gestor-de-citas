import { Formik, Form, Field } from 'formik'
import { Button } from 'reactstrap'
import CitaSchema from '../Cita/Schema'

import FormGroup from './FormGroup'

const Formulario = ({ handleOnSubmit }) => {
    return (
        <Formik
            initialValues={{nombreMascota: '', nombreDueño: '', fechaConsulta: '', hora: '', sintomas: ''}}
            validationSchema={CitaSchema}
            onSubmit={({nombreMascota, nombreDueño, fechaConsulta, hora, sintomas}) => {
                handleOnSubmit({nombreMascota, nombreDueño, fechaConsulta, hora, sintomas})
            }}
        >
            {({ errors, isValid }) => (
                <Form>
                    <h3 className='text-center mb-5'>CREAR CITA</h3>

                    <div className="row">
                        <div className='col-sm-12 col-md-6'>
                            <FormGroup error={errors.nombreMascota} name="nombreMascota" label="Nombre de la Mascota" />
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <FormGroup error={errors.nombreDueño} name="nombreDueño" label="Nombre del Dueño" />
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-sm-12 col-md-6'>
                            <FormGroup error={errors.fechaConsulta} type="date" name="fechaConsulta" label="Fecha" />
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <FormGroup error={errors.hora} type="time" name="hora" label="Hora" />
                        </div>
                    </div>
                    <FormGroup error={errors.sintomas} name="sintomas" label="Sintomas" />

                    <Button color='primary w-100' disabled={!isValid}>Agregar Cita</Button>
                </Form>
            )}
        </Formik>
    )
}

export default Formulario