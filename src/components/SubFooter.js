import React from 'react';
import './SubFooter.css'; // Importa el estilo del componente

const SubFooter = ({ height }) => (
    <div className="subfooter" style={{ height: `${height}px` }}>
        Subfooter
    </div>
);

export default SubFooter;