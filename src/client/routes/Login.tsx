import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import gatosDormindo from '/img/cats.gif'

function Login() {

    const navigate = useNavigate()
    function navigateToEscolherPet() {
        navigate("/escolher-pet")
      }
    return (
        <div className="bg-house bg-cover bg-center w-screen h-screen">

            <div className='flex justify-center items-center h-screen'>
                <div className='bg-branquinho bg-opacity-80 rounded-md py-14 px-24'>
                    <div className='flex flex-col'>
                        <h2 className='text-roxinho text-center text-2xl uppercase font-semibold'>Seja bem-vindo ao seu Tamagotchi</h2>
                        <p className='text-roxinho text-center text-xl font-semibold pt-6 cursor-pointer hover:underline' onClick={navigateToEscolherPet}>Criar um novo pet</p>
                        <div className='self-end'><img className=' w-40' src={gatosDormindo}></img> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login