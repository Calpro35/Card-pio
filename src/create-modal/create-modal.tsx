

import { useState } from "react";

interface InputProps {
    label: string;
    value: string | number;
    updateValue: (value: any) => void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input id={label} type="text" value={value} onChange={(e) => updateValue(e.target.value)} />
        </>
    );
};

export default Input;

export function CreateModal() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastro de Novo Item</h2>
            </div>

            <form className="input-container">
                <Input label="Título" value={title} updateValue={setTitle} />
                <Input label="Preço" value={price} updateValue={(e) => setPrice(parseFloat(e.target.value))} />  {/* Handle price as a number */}
                <Input label="Imagem" value={image} updateValue={setImage} />
                <button type="submit" className="btn-secondary">Criar Item</button> {/* Assuming a submit handler is implemented elsewhere */}
            </form>
        </div>
    );
}