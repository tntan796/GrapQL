import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export default function AddAuthorComponent() {
    return (
        <div>
            <h3>Add Author</h3>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="firstname6">Name</label>
                    <InputText id="firstname6" type="number" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="firstname6">Age</label>
                    <InputText id="firstname6" type="number" />
                </div>
                <div className="p-field p-col-12">
                    <Button label="Save" icon="pi pi-check" iconPos="right" style={{width: '100px'}} />
                    <Button label="Reset" icon="pi pi-check" iconPos="right" className="p-button-danger"  style={{width: '100px'}} />
                </div>
            </div>
        </div>
    )
}
