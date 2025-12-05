import React from "react";

// recebemos a prop 'data' que contém as info do planeta
const CardItem = ({ data }) => {
    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{data.name}</h3>

            <div style={styles.content}>
                <p><strong>Clima:</strong> {data.climate}</p>
                <p><strong>Terreno:</strong> {data.terrain}</p>
                <p><strong>População:</strong> {data.population}</p>
            </div>

            {/* botão fake (por enquanto) */}
            <button style={styles.button}>Ver detalhes</button>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px 0',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    title: {
        margin: '0 0 10px 0',
        color: '#333'
    },
    content: {
        fontSize: '14px',
        color: '#555'
    },
    button: {
        marginTop: '10px',
        padding: '8px 12px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default CardItem;