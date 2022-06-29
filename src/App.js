import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Formulario from "./Components/Formulario/Formulario"
import ListadoCitas from "./Components/ListadoCitas"

const App = () => {
    const [citas, setCitas] = useState([])

    const handleOnSubmit = cita => {
        const id = Math.floor(Math.random() * 99999) + 1
        setCitas([...citas, {...cita, id}])
    }

    const handleOnDelete = id => setCitas(citas.filter(cita => cita.id !== id))

    return (
        <Container>
            <h1 className="text-center my-5">ADMINISTRADOR DE PACIENTES</h1>
            <Row>
                <Col sm="12" md="6">
                    <Formulario handleOnSubmit={handleOnSubmit} />
                </Col>
                <Col sm="12" md="6">
                    <ListadoCitas citas={citas} handleOnDelete={handleOnDelete} />
                </Col>
            </Row>
        </Container>
    )
}

export default App