import Cita from './Cita'

import './Cita.css'

const ListadoCitas = ({ citas, handleOnDelete }) => {
    return (
        <>
            <h3 className='text-center mb-5'>ADMINISTRAR CITAS</h3>
            <div>
                {
                    citas.length > 0 ? citas.map((cita, i) => (
                        <div className='mb-3' key={i}>
                            <Cita cita={cita} handleOnDelete={handleOnDelete} />
                        </div>
                    ))
                        : <h5 className='text-center mb-5'>No hay citas</h5>
                }
            </div>
        </>
    )
}

export default ListadoCitas