import { Container } from "./styles"

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'
import { Trash } from "phosphor-react"
import { useState } from "react"




export const ListItem = ({ item, onDelete, onUpdate }) => {

    const [isChecked, setIsChecked] = useState(item.done)

    let publishedAt = new Date(item.createdAt)
    let complitedAt = new Date(item.updatedAt)


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRealtiveToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const complitedDateFormatted = format(complitedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const complitedDateRealtiveToNow = formatDistanceToNow(complitedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (

        <Container done={isChecked}>

            <div className="content">
                <div className="task">
                    <div>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={e => {
                                setIsChecked(e.target.checked)
                                onUpdate(item.id, isChecked)
                            }
                            }


                        />
                        <p>{item.name}</p>
                    </div>

                    <button onClick={() => { onDelete(item.id); }}><Trash size={24} /></button>


                </div>

                <div className="tarefaConcluida">
                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        Criado em:  {publishedDateRealtiveToNow}</time>
                    {


                        isChecked &&
                        <time title={complitedDateFormatted} dateTime={complitedAt.toISOString()}>
                            Concluído em:  {complitedDateRealtiveToNow}</time>
                    }


                </div>

            </div>





        </Container>
    )
}
