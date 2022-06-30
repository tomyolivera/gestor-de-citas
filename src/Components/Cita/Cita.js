import { Card, CardBody, CardFooter, Button } from 'reactstrap'
import SeccionCita from './SeccionCita'

const Cita = ({ cita, handleOnDelete }) => {
    return (
        <Card>
            <CardBody>
                <SeccionCita title="Mascota" value={cita.nombreMascota} />
                <SeccionCita title="Dueño" value={cita.nombreDueño} />
                <SeccionCita title="Fecha" value={cita.fechaConsulta} />
                <SeccionCita title="Hora" value={cita.hora} />
                <SeccionCita title="Sintomas" value={cita.sintomas} />
            </CardBody>
            <CardFooter>
                <Button onClick={() => handleOnDelete(cita.id)} color='danger w-100'>Eliminar</Button>
            </CardFooter>
        </Card>
    )
}

export default Cita