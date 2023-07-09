import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import gatoMarrom from '/img/gray-coracao.png'
import gatoBranco from '/img/white-coracao.png'
import { GlobalStore, useGlobalStore } from '../util/useGlobalStore';

function EscolherPet() {
    const createPet = useGlobalStore((store) => store.createPet);
    const setCreatePet = useGlobalStore((store) => store.setCreatePet);
    const navigate = useNavigate()
    function selectColor(color: string) {
        setCreatePet({...createPet, color})
        navigate("/escolher-nome")
    }

    return (
        <div className="bg-house bg-cover bg-center w-screen h-screen">

            <div className='flex justify-center items-center h-screen'>
                <div className='bg-branquinho bg-opacity-80 rounded-md py-14 px-24'>
                    <div className=''>
                        <h2 className='text-roxinho text-center text-2xl font-semibold pb-6'>Escolha seu Pet:</h2>
                        <div className='flex'>
                            <img className=' w-48 cursor-pointer' src={gatoMarrom} onClick={() => selectColor("gray")}></img>
                            <img className=' w-44 cursor-pointer' src={gatoBranco} onClick={() => selectColor("white")}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EscolherPet