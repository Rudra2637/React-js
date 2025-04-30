import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleEditClick = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const handleUpdate = () => {
        if (editText.trim() === "") return;
        dispatch(updateTodo({ id: editId, text: editText }));
        setEditId(null);
        setEditText("");
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todos</h1>
            <ul className="list-disc pl-5">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center mb-2">
                        {editId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    className="border border-black/10 rounded-l-lg px-3 outline-none py-1.5"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button
                                    className="bg-green-600 text-white px-3 py-1 rounded-r-lg"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="text-lg">{todo.text}</span>
                                <div>
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 m-2 rounded hover:bg-blue-700"
                                        onClick={() => handleEditClick(todo.id, todo.text)}
                                    >
                                        U
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                    >
                                        X
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
