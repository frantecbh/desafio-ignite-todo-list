import { PlusCircle } from 'phosphor-react'
import React, { useState } from 'react'

import './styles'
import { Container } from './styles'


export const AddItem = ({ onSend }) => {


    const [inputText, setInputText] = useState('')



    function createTask() {
        event.preventDefault()
        if (inputText === "") {
            return false
        }
        onSend(inputText)
        setInputText("")
    }

    return (
        <Container onSubmit={createTask}>

            <input
                value={inputText}
                maxLength={100}

                onChange={(e) => {

                    setInputText(e.target.value)


                }}
                type="text" placeholder='Adicione uma nova tarefa' />
            <button type="submit">Criar <PlusCircle size={18} /></button>

        </Container>
    )
}
