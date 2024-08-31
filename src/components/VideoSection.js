// src/components/VideoSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './VideoSection.css'; // Importa los estilos para el componente
import videoSource from '../assets/GG-Restaurant.mp4'; // Importa el video

const VideoSection = () => {
    return (
        <section className="video-section">
            <video className="background-video" autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h2>Descripci�n 2</h2>
                <p>Sub-descripci�n 2</p>
                <Link to="/menu"><button>Men�</button></Link>
            </div>
        </section>
    );
};

export default VideoSection;



 