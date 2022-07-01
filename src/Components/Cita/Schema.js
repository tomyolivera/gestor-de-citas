import * as yup from 'yup'

const CitaSchema = yup.object().shape({
    nombreMascota: yup.string().required("El nombre de la mascota es requerido"),
    nombreDueño: yup.string().required("El nombre del dueño es requerido"),
    fechaConsulta: yup.date("El campo debe ser una fecha").required("La fecha de la consulta es requerida"),
    hora: yup.string().required("La hora de la consulta es requerida"),
    sintomas: yup.string().required("Los sintomas de la consulta son requeridos")
})

export default CitaSchema