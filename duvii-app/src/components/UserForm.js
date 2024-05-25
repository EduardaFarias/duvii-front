import React, { useState } from "react";


function UserForm() {
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
    });

    /**
     * Atualiza qualquer campo que seja clicado
     * @param {input no formulário} e 
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    /**
     * Lógica para enviar dados para o backend
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados enviados: ", formData);
        // Adicione a lógica para enviar os dados para o backend aqui
    };

    return (

        <div>
        <form onSubmit={handleSubmit} className="form">
            
            <div className="form">
                <label className="form-item">
                    <div className="camp-name">
                        Nome:
                    </div>
                    <input
                        className="input-camp"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                
                <label className="form-item">
                    <div className="camp-name">
                        Nome de Usuário:
                    </div>
                    <input
                        className="input-camp"
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                </label>
                <label className="form-item">
                    <div className="camp-name">
                        Email:
                    </div>
                    <input
                        className="input-camp"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label >
                
                <label className="form-item">
                    <div className="camp-name">
                        Password
                    </div>
                    <input
                        className="input-camp"
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </form>
        </div>
    );
}

export default UserForm;
