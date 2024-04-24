import React, { useState } from "react";

const RequestedCards = ({ applications, setApplications, setApprovedCards }) => {
    const [message, setMessage] = useState('');

    const handleApproval = (id) => {
        const approvedCard = applications.find((contact) => contact.civilId === id);
        approvedCard.approved = true;
        if (approvedCard) {
            setApprovedCards((prevApprovedCards) => [...prevApprovedCards, approvedCard]);
            setMessage(`Tarjeta de ${approvedCard.name} aprobada.`);
        }
    };

    const handleRejection = (id) => {
        const rejectedCard = applications.find((contact) => contact.civilId === id);
        rejectedCard.approved = false;
        if (rejectedCard) {
            setMessage(`Tarjeta de ${rejectedCard.name} rechazada.`);
            setApplications((prevApplications) => prevApplications.filter(app => app.civilId !== id));
        }
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Lista de Contactos</h2>
            {message && <div className="mb-4">{message}</div>}
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Cliente</th>
                        <th className="border px-4 py-2">Teléfono</th>
                        <th className="border px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((contact, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                            <td className="border px-4 py-2">{contact.name}</td>
                            <td className="border px-4 py-2">{contact.phone}</td>
                            <td className="border px-4 py-2">
                                {!contact.approved && (
                                    <>
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                                            onClick={() => handleApproval(contact.civilId)}
                                        >
                                            Aprobar
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded-md"
                                            onClick={() => handleRejection(contact.civilId)}
                                        >
                                            Rechazar
                                        </button>
                                    </>
                                )}
                                {contact.approved && (
                                    <span className="text-green-500">Aprobado</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestedCards;
