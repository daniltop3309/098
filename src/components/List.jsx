import React, { useState } from 'react'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import Take from './taked'


const order = []

function id(){
    return nanoid()
}
const initProds = [
        {id: id(), name: 'prod1', desc: 'catg1', cost:100},
        {id: id(), name: 'prod2', desc: 'catg2', cost:200},
        {id: id(), name: 'prod3', desc: 'catg3', cost:300},
    ];
export default function List() {
    const [notes, setNotes] = useState(initProds)
    const [list, setList] = useState(order)
    const result = notes.map(note => {
        return <div key={note.id}>
            <span>
                {note.name}
            </span>
            <span>
                {note.desc}
            </span>
            <span>
                {note.cost}
            </span>
            <button onClick={() => add(note.name, note.cost)}>add</button>
        </div>})

        function add(name, cost){
            console.log(name)
            let obj = {name, cost}
            setList([...list,obj])
            console.log(list)
        }
  return (
    <div>
        {result}
            <Take orders = {list}/>
    </div>
  )
}

