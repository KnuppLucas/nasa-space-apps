import React, { useState } from 'react';
import './InputSearchFied.css'

function SearchInput(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSearch = () => {
    const requestBody = {
      consulta: searchTerm,
    };

    fetch('http://localhost:5000/api/consultar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resposta da IA:', data);
      })
      .catch((error) => {
        console.error('Erro ao chamar a API:', error);
      });
  };

  return (
    <div className='input-fields'>
        <p>
          Search generated with IA  
        </p>
      <input
        type="text"
        placeholder="Digite sua busca..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchInput;