import React, { useState } from 'react';
import { LinkedList } from './linkedList.js'
import './LinkedListApp.css';

const list = new LinkedList();

const LinkedListApp = () => {
  const [position, setPosition] = useState();
  const [Char, setChar] = useState("Alpha");
  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState();


  const handleInsert = () => {
    list.insert(Char, amount);
    setPosition(list.position);
    setTotal(list.totalAmounts());
    setAmount(1);
  }

  const handleFirst = () => {
    list.first();
    setPosition(list.position);
  }

  const handleLast = () => {
    list.last();
    setPosition(list.position);
  }

  const handleNext = () => {
    list.next();
    setPosition(list.position);
  }

  const handlePrevious = () => {
    list.previous();
    setPosition(list.position);
  }

  const handleDelete = () => {
    list.delete();
    setPosition(list.position);
    setTotal(list.totalAmounts());
  }

  const renderNodes = () => {
    const listDisplay = [];
    let node = list.head;

    while (list.head && node) {
      listDisplay.push(
        <p key={node.subject + node.amount} >{node.amount} {node.subject} {position === node ? " <" : ""}</p>)
      node = node.forwardNode;
    }
    return listDisplay;
  }

  return (
    <div>
      <label>Select Item:
        <select value={Char} onChange={event => setChar(event.target.value)}>
          <option value="Alpha">A</option>
          <option value="Beta">B</option>
          <option value="Charlie">C</option>
          <option value="Delta">D</option>
          <option value="Echo">E</option>

        </select>
      </label>

      <label> #:
        <input
          className="input"
          name="amount"
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
          min="0" />
      </label>

      <button onClick={handleInsert}>Insert</button>

      <div className={list.head ? null : "hidden"}>
        <button onClick={handleFirst}>First</button>
        <button onClick={handleLast}>Last</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleDelete}>Delete</button>
        <span> Total: {total}</span>
      </div>

      {renderNodes()}
    </div>
  );
}

export default LinkedListApp;