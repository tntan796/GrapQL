import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useQuery } from '@apollo/client';
import { getAuthor } from '../../../graphql-client/query';

export default function AddBookComponent() {
    const {loading, error, data} = useQuery(getAuthor);
    const [newBook, setNewBook] = useState({
        name: '', genre: '', authorId: ''
    })
    

    function handleOnChange(event) {
        setNewBook({
            ...newBook,
            [event.target.name] : event.target.value
        })
    }


    function handleSave() {
        console.log(newBook);
    }

    return (
        <div>
            <h3>Add Book</h3>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12">
                    <label htmlFor="firstname6">Name</label>
                    <InputText id="firstname6" type="text" name="name" value = {newBook.name}/>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="lastname6">Genre</label>
                    <InputText id="lastname6" type="text" name="genre" value = {newBook.genre}/>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="lastname6">Author</label>
                    {loading ? <p>Loading Author</p> : 
                        <Dropdown onChange={handleOnChange} inputId="state" name="authorId" value = {newBook.authorId}
                        options={data.authors} placeholder="Select" optionLabel="name" />
                    }
                </div>
                <div className="p-field p-col-12">
                    <Button label="Save" icon="pi pi-check" iconPos="right" style={{width: '100px'}} onClick={handleSave}/>
                    <Button label="Reset" icon="pi pi-check" iconPos="right" className="p-button-danger"  style={{width: '100px'}} />
                </div>
            </div>
        </div>
    )
}
