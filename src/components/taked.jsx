import React, { useState } from 'react';




export default function Take({orders}){
let count = 1
    const result = orders.map(note => {count += 1
        return <div key={count}>
            <span>
                {note.name}
            </span>
            <span>
                {note.cost}
            </span>
            <button onClick={() => del(add)}>btn</button>
        </div>})
        function del(){
            
        }
    return (
        <div>
          <h3>card</h3>
          {result}
        </div>
    )
}