import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import gatoMarrom from '/img/gato-marrom-radiante.gif'
import gatoBranco from '/img/gato-branco-radiante.gif'
import { useGlobalStore } from '../util/useGlobalStore';
import { api } from '../util/api';

function EscolherNome() {
    const createPet = useGlobalStore((store) => store.createPet);
    const setCreatePet = useGlobalStore((store) => store.setCreatePet);
    const setPet = useGlobalStore((store) => store.setPet);
    const [name, setName] = useState('')
    const navigate = useNavigate()
    function selectName() {
        setCreatePet({...createPet, name: name})
        api.post('/pets', createPet).then((response) => {
            setPet(response.data)
            navigate("/cuidar-pet")
        })
    }
    return (
        <div className="bg-house bg-cover bg-center w-screen h-screen">

            <div className='flex justify-center items-center h-screen'>
                <div className='bg-branquinho bg-opacity-80 rounded-md py-14 px-24'>
                    <div className='flex flex-col'>
                        <h2 className='text-roxinho text-center text-2xl font-semibold'>Legal! Qual o Nome do seu Pet</h2>
                        <form className='self-center pt-6'>
                            <label htmlFor="nome" ></label>
                            <input type="nome" name="nome" className='border-solid text-roxinho text-center text-xl font-semibold pt-6'  value={name} onChange={(event) => setName(event.target.value)}/>
                        </form>
                        <div  className='self-center pt-2'><img className=' w-40' src={createPet.color === "gray" ? gatoMarrom : gatoBranco}></img> </div>
                        <button className='text-roxinho text-center text-2xl font-semibold' onClick={selectName}>Começar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EscolherNome