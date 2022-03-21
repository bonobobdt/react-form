import React, { useState } from 'react';
import ProductOrder from './ProductOrder';
import UserInfo from './UserInfo';
import SuccessfulOrder from './SuccessfulOrder';
import Welcome from './Welcome';
import './Form.css';


function Form() {

  const [page, setPage] = useState(0);

  const formTitles = ["Bem Vindo!", "Faça seu pedido", "Informações Pessoais", "Successo!"]

  const pageDisplay = () => {
      switch(page) {
        case 0:
          return <Welcome />
        case 1:
          return <ProductOrder />
        case 2:
          return <UserInfo />
        default:
          return <SuccessfulOrder />
      }
  } 

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{formTitles[page]}</h1>
        </div>
        <div className="body">
          {pageDisplay()}
        </div>
        <div className="footer">
          <div className="btn_div">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((page) => page - 1);
                }}>
              Voltar
            </button>
            <button 
              disabled={page === formTitles.length - 1}
              onClick={() => {
                setPage((page) => page + 1);
                }}>
                  Avançar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;