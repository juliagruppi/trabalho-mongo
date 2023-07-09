import React, { useEffect, useState } from 'react';
import gatoMarrom from '/img/gato-marrom-coracao.png'
import gatoBranco from '/img/gato-branco-coracao.png'
import comidaPNG from '/img/comida.png'
import banhoPNG from '/img/banho.png'
import remedioPNG from '/img/remedio.png'
import amigosPNG from '/img/amigos.png'
import brincarPNG from '/img/brincar.png'
import uva from '/img/uvas.png'
import maca from '/img/maca.png'
import laranja from '/img/laranja.png'
import pipoca from '/img/pipoca.png'
import sanduiche from '/img/sanduiche.png'
import lanche from '/img/lanche.png'
import iorgut from '/img/iorgut.png'
import suco from '/img/suco.png'
import leite from '/img/caixa-de-leite.png'
import coracao from '/img/formato-de-coracao.png'
import saciamento from '/img/fome.png'
import saude from '/img/coracao.png'
import tedio from '/img/entediado.png'
import mais from '/img/mais.png'
import { useGlobalStore } from '../util/useGlobalStore';
import { IPet } from '../../server/pets/pets.schema';
import { api, happinessLostApi, healthLostApi, hungryLostApi } from '../util/api';


function CuidarPet() {
  const setPet = useGlobalStore((store) => store.setPet);
  const pet: IPet = useGlobalStore((store) => store.pet);
  const [foodForm, setFoodForm] = useState({ petId: pet.id, food: "" })
  const [timeHungry, setTimeHungry] = useState(false)
  const [timeHappiness, setTimeHappiness] = useState(false)
  const [timeHealth, setTimeHealth] = useState(false)
  const [showFood, setShowFood] = useState(false)
  const [showStatus, setShowStatus] = useState(false)
  const [img, setImg] = useState(`${pet.color}-coracao.png`)
  useEffect(() => {
    const hungryTimeOut = setTimeout(() => hungryLostApi(pet.id).then(response => {
      setTimeHungry(!timeHungry)
      setPet(response)
      clearTimeout(hungryTimeOut)
    }), 60000)
  }, [timeHungry])
  useEffect(() => {
    const healthTimeOut = setTimeout(() => healthLostApi(pet.id).then(response => {
      setTimeHealth(!timeHealth)
      setPet(response)
      clearTimeout(healthTimeOut)
    }), 180000)
  }, [timeHealth])
  useEffect(() => {
    const happinessTimeOut = setTimeout(() => happinessLostApi(pet.id).then(response => {
      setTimeHappiness(!timeHappiness)
      setPet(response)
      clearTimeout(happinessTimeOut)
    }), 120000)
  }, [timeHappiness])


  const giveFood = async (food: string) => {
    setImg(`${pet.color}-comendo.gif`)
    setTimeout(() => setImg(`${pet.color}-coracao.png`), 5000)
    setFoodForm({ petId: pet.id, food })
    api.post("/game/food", foodForm).then((response) => setPet(response.data))
    setShowFood(false)
  }
  const giveMedicine = async () => {
    api.post(`/game/medicine/${pet.id}`, foodForm).then((response) => setPet(response.data))
  }
  const giveBath = async () => {
    setImg(`${pet.color}-brush-cute.gif`)
    setTimeout(() => setImg(`${pet.color}-coracao.png`), 5000)
    api.post(`/game/medicine/${pet.id}`, foodForm).then((response) => setPet(response.data))
  }
  const play = async () => {
    setImg(`${pet.color}-play.gif`)
    setTimeout(() => setImg(`${pet.color}-coracao.png`), 5000)
    api.post(`/game/play/${pet.id}`, foodForm).then((response) => setPet(response.data))
  }
  const playWithFriends = async () => {
    setImg(`play-friends.gif`)
    setTimeout(() => setImg(`${pet.color}-coracao.png`), 5000)
    api.post(`/game/play/friends/${pet.id}`, foodForm).then((response) => setPet(response.data))
  }


  return (
    <div className='bg-room bg-cover bg-center w-screen h-screen relative'>

      <div>
        <div className='absolute bottom-24 right-1/3 pt-6'><img className='w-96' src={`/img/${img}`}></img> </div>
        <div className='absolute top-40 right-32 bg-cinzinha py-7 px-7'><img className='w-20' onClick={() => {
          setShowFood(false)
          setShowStatus(!showStatus)
        }} src={coracao}></img></div>
      </div>

      {
        showStatus &&
        !showFood &&
        <div className='pt-20 pl-20'>
          <div className='bg-roxinho bg-opacity-80 rounded-md w-72 pb-8 pt-8'>

            <div className='flex justify-around pb-8'>
              <div><img className='w-16' src={saciamento}></img></div>
              <div className={`pt-3 ${pet.hungry < 1 && "hidden"}`}><img className='w-9' src={mais}></img></div>
              <div className={`pt-3 ${pet.hungry < 2 && "hidden"} `}><img className='w-9' src={mais}></img></div>
              <div className={`pt-3 ${pet.hungry < 3 && "hidden"}`}><img className='w-9' src={mais}></img></div>
            </div>
            <div className='flex justify-around pb-8'>
              <div><img className='w-16' src={saude}></img></div>
              <div className={`pt-3 ${pet.health < 1 && "hidden"} `}><img className='w-9' src={mais}></img></div>
              <div className={`pt-3 ${pet.health < 2 && "hidden"} `}><img className='w-9' src={mais}></img></div>
              <div className={`pt-3 ${pet.health < 3 && "hidden"} `}><img className='w-9' src={mais}></img></div>
            </div>

            <div className='flex justify-around'>
              <div><img className='w-16' src={tedio}></img></div>
              <div className={`pt-3 ${pet.happiness < 1 && "hidden"} `}><img className='w-9' src={mais}></img></div>
              <div className={`pt-3 ${pet.happiness < 2 && "hidden"} `}><img className='w-9' src={mais}></img></div>
              <div className={`pt-3 ${pet.happiness < 3 && "hidden"} `}><img className='w-9' src={mais}></img></div>
            </div>
          </div>
        </div>
      }

      {
        showFood &&
        !showStatus &&
        <div className='pt-20 pl-20'>
          <div className='bg-roxinho bg-opacity-80 rounded-md w-72 pb-8 pt-8'>

            <div className='flex justify-around pb-8'>
              <div><img onClick={() => giveFood('healthyFood')} className='w-14' src={uva}></img></div>
              <div><img onClick={() => giveFood('healthyFood')} className='w-14' src={maca}></img></div>
              <div><img onClick={() => giveFood('healthyFood')} className='w-14' src={laranja}></img></div>
            </div>

            <div className='flex justify-around pb-8'>
              <div><img onClick={() => giveFood('fastFood')} className='w-14' src={pipoca}></img></div>
              <div><img onClick={() => giveFood('fastFood')} className='w-14' src={sanduiche}></img></div>
              <div><img onClick={() => giveFood('fastFood')} className='w-14' src={lanche}></img></div>
            </div>

            <div className='flex justify-around'>
              <div><img onClick={() => giveFood('healthyFood')} className='w-14' src={iorgut}></img></div>
              <div><img onClick={() => giveFood('healthyFood')} className='w-14' src={suco}></img></div>
              <div><img onClick={() => giveFood('healthyFood')} className='w-14' src={leite}></img></div>
            </div>
          </div>
        </div>
      }
      <div className='absolute bottom-8 w-full'>
        <div className='flex justify-around pl-20 pr-20 '>
          <div className='bg-roxinho hover:bg-roxo-escuro w-20 h-20 flex items-center justify-center rounded-md ' onClick={() => {
          setShowFood(!showFood)
          setShowStatus(false)
        }}><img className='w-14' src={comidaPNG}></img></div>
          <div className='bg-roxinho hover:bg-roxo-escuro w-20 h-20 flex items-center justify-center rounded-md '><img className='w-14 ' src={banhoPNG} onClick={() => giveBath()}></img></div>
          <div className='bg-roxinho hover:bg-roxo-escuro w-20 h-20 flex items-center justify-center rounded-md '><img className='w-14' src={remedioPNG} onClick={() => giveMedicine()}></img></div>
          <div className='bg-roxinho hover:bg-roxo-escuro w-20 h-20 flex items-center justify-center rounded-md '><img className='w-14' src={amigosPNG} onClick={() => playWithFriends()}></img></div>
          <div className='bg-roxinho hover:bg-roxo-escuro w-20 h-20 flex items-center justify-center rounded-md '><img className='w-14' src={brincarPNG} onClick={() => play()}></img></div>
        </div>
      </div>

    </div>
  )
}

export default CuidarPet