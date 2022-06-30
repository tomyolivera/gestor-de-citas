import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Formulario from "./Components/Formulario/Formulario"
import ListadoCitas from "./Components/Cita/ListadoCitas"

const App = () => {
    const [citas, setCitas] = useState([])

    useEffect(() => {
        const citasLocalStorage = localStorage.getItem('citas')
        if (citasLocalStorage)
            setCitas(JSON.parse(citasLocalStorage))
    }, [])

    const handleOnSubmit = cita => {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) // random id
        setCitas([...citas, {...cita, id}])
        localStorage.setItem('citas', JSON.stringify([...citas, {...cita, id}]))
    }

    const handleOnDelete = id => {
        setCitas(citas.filter(cita => cita.id !== id))
        localStorage.setItem('citas', JSON.stringify(citas.filter(cita => cita.id !== id)))
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