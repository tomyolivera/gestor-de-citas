import React from 'react'
import { Field } from 'formik'
import { Label, FormGroup as ReactFormGroup } from 'reactstrap'

const FormGroup = ({ type="text", label, name, error=null }) => {
  return (
    <ReactFormGroup className="mb-3">
        <Label for={name}>{label}</Label>
        <Field type={type} name={name} className="form-control" autocomplete="off" />
        { error && <div className="text-warning">{error}</div> }
    </ReactFormGroup>
  )
}

export default FormGroup