import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Nombre'
                name="name"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="text"
                placeholder='Apellido'
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form