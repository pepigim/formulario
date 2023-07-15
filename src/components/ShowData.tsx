import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { TodosResponse } from '../model/responses/Todos.response';
import { useDispatch } from 'react-redux';
import { getDatosApi } from '../api/ApiDatos';
import { msgError, showLoading } from '../actions/Todos.actions';

const ShowData = () => {
   const [todos, setTodos] = useState<TodosResponse[]>([]);
   const [userId, setUserId] = useState();
   const [id, setId] = useState();
   const [title, setTitle] = useState('');
   const [completed, setCompleted] = useState(false);
   const [operation, setOperation] = useState(1);



    const dispatch = useDispatch();

    const getTodos = async () => {
        dispatch(showLoading(true));
        const todoResp = await getDatosApi();
        if(todoResp !== null){
            if(todoResp.length > 0){
                setTodos(todoResp)
            }else{
                dispatch(msgError('No se encontro resultados'));
            }
        }
        dispatch(showLoading(false));
    }


    useEffect(() => {
        getTodos();
      }, []) 
    

  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-md-4 offset-md-4'>
                    <div className='d-grid mx-auto'>
                        <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalTodos'>
                            <i className=' fa-solid fa-circle-plus' onClick={()=>getTodos()}></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered table-primary'>
                            <thead>
                                <tr><th>Usuario</th><th>Id</th><th>Titulo</th><th>Completado</th><th>Acciones</th></tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                { todos.length > 0 &&
                                      todos.map((item, index) =>( 
                                        <tr key={index} className={item.completed ? 'table-waring': ''} >
                                            <td>{item.userId}</td>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.completed}</td>
                                            <td>
                                                <button className='btn btn-warning'>
                                                    <i className='fa-solid fa-edit'></i>
                                                </button>
                                                &nbsp;
                                                <button className='btn btn-danger'>
                                                    <i className='fa-solid fa-trash'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div id='modalTodos' className='modal fade' aria-hidden='true'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <label className='h5'>{title}</label>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'></button> 
                    </div>
                    <div className='modal-body'>
                        <input type='hidden' id='id'></input>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                            <input type='text' id='nombre' className='form-control' placeholder='Titulo' value={title}
                            onChange={(e)=> setTitle(e.target.value)}>
                            </input>
                        </div>
                        <div className='d-grid col-6 mx-auto'>
                            <button className='btn btn-success'>
                                <i className='fa-solid fa-floppy-disk'></i> Guardar
                            </button>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ShowData
