import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
export default function AddBookComponent() {
    let states = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];
    return (
        <div>
            <h3>Add Book</h3>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12">
                    <label htmlFor="firstname6">Name</label>
                    <InputText id="firstname6" type="text" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="lastname6">Genre</label>
                    <InputText id="lastname6" type="text" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="lastname6">Author</label>
                    <Dropdown inputId="state" options={states} placeholder="Select" optionLabel="name" />
                </div>
                <div className="p-field p-col-12">
                    <Button label="Save" icon="pi pi-check" iconPos="right" style={{width: '100px'}} />
                    <Button label="Reset" icon="pi pi-check" iconPos="right" className="p-button-danger"  style={{width: '100px'}} />
                </div>
            </div>
        </div>
    )
}
