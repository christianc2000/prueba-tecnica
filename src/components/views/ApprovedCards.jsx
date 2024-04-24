import React from "react";

const ApprovedCards = ({ approvedCards, setApprovedCards }) => {
    const handleEditMonto = (id, newMonto) => {
        setApprovedCards((prevCards) =>
            prevCards.map((card) =>
                card.civilId === id ? { ...card, total: newMonto } : card
            )
        );
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Tarjetas Aprobadas</h2>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Cliente</th>
                        <th className="border px-4 py-2">Celular</th>
                        <th className="border px-4 py-2">Monto tarjeta Aprobado</th>
                    </tr>
                </thead>
                <tbody>
                    {approvedCards.map((card) => (
                        <tr key={card.civilId}>
                            <td className="border px-4 py-2">{card.name}</td>
                            <td className="border px-4 py-2">{card.phone}</td>
                            <td className="border px-4 py-2">
                                <input
                                    type="number"
                                    value={card.total}
                                    onChange={(e) =>
                                        handleEditMonto(card.civilId, parseInt(e.target.value, 10))
                                    }
                                    className="w-full p-2 border rounded-md"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovedCards;
