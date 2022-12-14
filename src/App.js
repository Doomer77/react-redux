import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
    //Чтобы изменить состояние нужен dispatch, получить его внутри компонеты можно с помощью хука useDispatch()
    const dispatch = useDispatch();

    //Получить состояния можно с попмощью хука useSelector(), который принимет функцию, которая принимает состояние
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

  return (
    <div className={'app'}>
        <div className='count'>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))} className="btn btn-primary">Получить счет</button>
        <button onClick={() => getCash(Number(prompt()))} className="btn btn-success">Снять со счета</button>

        <button onClick={() => addCustomer(prompt())} className="btn btn-success">Добавить клиента</button>
        <button onClick={() => getCash(Number(prompt()))} className="btn btn-success">Удалить клиента</button>

        <button onClick={() => dispatch(fetchCustomers())} className="btn btn-success">Получить клиентов из базы</button>


      </div>
        {customers.length > 0 ?
        <div>
            {customers.map(customer =>
                <div className='customer-item' onClick={() => removeCustomer(customer)}>
                    {customer.name}
                </div>
            )}
        </div>
        :
        <div style={{fontSize: '20px', marginTop: '10px'}}>
            Клиенты отсутствуют!
        </div>
        }
    </div>
  );
}

export default App;
