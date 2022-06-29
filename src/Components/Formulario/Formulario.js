import { Formik, Form } from 'formik'
import { Button } from 'reactstrap'
import FormGroup from './FormGroup'

const Formulario = ({ handleOnSubmit }) => {
    return (
        <Formik
            initialValues={{nombreMascota: '', nombreDueño: '', fechaConsulta: '', hora: '', sintomas: ''}}
            validate={({nombreMascota, nombreDueño, fechaConsulta, hora, sintomas}) => {
                let errors = {}
                if (!nombreMascota) {
                    errors.nombreMascota = 'El nombre de la mascota es requerido'
                }
                if (!nombreDueño) {
                    errors.nombreDueño = 'El nombre del dueño es requerido'
                }
                if (!fechaConsulta) {
                    errors.fechaConsulta = 'La fecha de la consulta es requerida'
                }
                if (!hora) {
                    errors.hora = 'La hora de la consulta es requerida'
                }
                if (!sintomas) {
                    errors.sintomas = 'Los sintomas son requeridos'
                }
                return errors
            }}
            onSubmit={({nombreMascota, nombreDueño, fechaConsulta, hora, sintomas}) => {
                handleOnSubmit({nombreMascota, nombreDueño, fechaConsulta, hora, sintomas})
            }}
        >
            {({ errors, isValid }) => (
                <Form>
                    <h3 className='text-center mb-5'>CREAR CITA</h3>

                    {/* Errors */}
                    <FormGroup error={errors.nombreMascota} name="nombreMascota" label="Nombre de la Mascota" />
                    <FormGroup error={errors.nombreDueño} name="nombreDueño" label="Nombre del Dueño" />
                    <FormGroup error={errors.fechaConsulta} type="date" name="fechaConsulta" label="Fecha" />
                    <FormGroup error={errors.hora} type="time" name="hora" label="Hora" />
                    <FormGroup error={errors.sintomas} name="sintomas" label="Sintomas" />

                    <Button color='primary w-100' disabled={!isValid}>Agregar Cita</Button>
                </Form>
            )}
        </Formik>
    )
}

export default Formulario