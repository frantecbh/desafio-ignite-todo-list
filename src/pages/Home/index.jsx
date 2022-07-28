
import { ClipboardText, PlusCircle, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { AddItem } from '../../components/AddItem'
import { Header } from '../../components/Header'
import { ListItem } from '../../components/ListItem'



import styles from './Home.module.css'



export const Home = () => {

    const [tasks, setTask] = useState([])
    const [tasksComplet, setTaskComplet] = useState([])

    function hadleAddTask(taskname) {
        let newList = [...tasks]

        newList.push({
            id: tasks.length + 1,
            name: taskname,
            createdAt: new Date().toString(),
            updatedAt: new Date().toString(),
            done: false

        })
        //console.log(newList)
        setTask(newList)
    }

    function deleteTask(id) {

        //nova lista de comentarios
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== id
        })
        setTask(tasksWithoutDeletedOne)
    }


    function updateItem(id, isChecked) {

        if (isChecked) {

            let ids = [id];

            let result = tasks.reduce((acc, o) => acc.concat(ids.includes(o.id) ? Object.assign(o, { done: false, updatedAt: new Date().toString() }) : o), []);

            setTask(result);

        } else {
            let ids = [id];
            let result = tasks.reduce((acc, o) => acc.concat(ids.includes(o.id) ? Object.assign(o, { done: true, updatedAt: new Date().toString() }) : o), []);
            setTask(result);
        }
    }
    function concluirTask(id) {

        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== id
        })
        setTask(tasksWithoutDeletedOne)
    }


    return (
        <div>
            <Header />
            <div className={styles.container}>
                {/* addtask */}
                <AddItem onSend={hadleAddTask} />

                {/* infotasks */}


                <div className={styles.infoTaskContainer}>

                    <p className={styles.createdTask}>Tarefas Criadas <span>{tasks.length === 0 ? '0' : tasks.length}</span></p>
                    <p className={styles.completTask}>Concluídas <span>{tasks.length === 0 ? '0' : `0 de ${tasks.length}`}</span></p>
                </div>

                {/* tasks */}

                {

                    tasks.length > 0 ?
                        tasks.map(task => {
                            return (
                                <ListItem key={task.id} item={task} onDelete={deleteTask} onUpdate={updateItem} />

                            )
                        }) :
                        <div className={styles.tasknotFound}>
                            <ClipboardText size={32} />
                            <h4>Você ainda não tem tarefas cadastradas</h4>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>

                }
            </div>

        </div>
    )
}
