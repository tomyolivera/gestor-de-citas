import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Formulario from "./Components/Formulario/Formulario"
import ListadoCitas from "./Components/Cita/ListadoCitas"

const App = () => {
    const [citas, setCitas] = useState([])

    useEffect(() => {
        const citasLocalStorage = localStorage.getItem('citas')
        if (citasLocalStorage) setCitas(JSON.parse(citasLocalStorage))
    }, [])

    const handleOnSubmit = cita => {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) // random id
        const newCita = [...citas, {...cita, id}]
        setCitas(newCita)
        localStorage.setItem('citas', JSON.stringify(newCita))
    }

    const handleOnDelete = id => {
        const newCitasArray = citas.filter(cita => cita.id !== id)
        setCitas(newCitasArray)
        localStorage.setItem('citas', JSON.stringify(newCitasArray))
    }

    return (
        <Container>
            <h1 className="text-center my-5">ADMINISTRADOR DE PACIENTES</h1> <br />
            <Row>
                <Col sm="12" md="7">
                    <Formulario handleOnSubmit={handleOnSubmit} />
                </Col>
                <Col sm="12" md="5">
                    <ListadoCitas citas={citas} handleOnDelete={handleOnDelete} />
                </Col>
            </Row>
        </Container>
    )
}

export default App