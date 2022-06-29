import { Card, CardBody, CardFooter, Button } from 'reactstrap'

const Cita = ({ cita, handleOnDelete }) => {
    return (
        <Card>
            <CardBody>
                <p className='text-black'><b>Mascota: </b>{cita.nombreMascota}</p>
                <p className='text-black'><b>Dueño: </b>{cita.nombreDueño}</p>
                <p className='text-black'><b>Fecha: </b>{cita.fechaConsulta}</p>
                <p className='text-black'><b>Hora: </b>{cita.hora}</p>
                <p className='text-black'><b>Sintomas: </b>{cita.sintomas}</p>
            </CardBody>
            <CardFooter>
                <Button onClick={() => handleOnDelete(cita.id)} color='danger w-100'>Eliminar</Button>
            </CardFooter>
        </Card>
    )
}

export default Cita