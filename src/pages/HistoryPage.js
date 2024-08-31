// src/pages/HomePage.jsx
import React from 'react';
import Section from '../components/Section';
import SubFooter from '../components/SubFooter';
import VideoSection from '../components/VideoSection'; // Importa el nuevo componente

const HomePage = () => (
    <>
        <VideoSection />  {/* Reemplaza la primera sección */}
        <Section number={2} />
        <SubFooter height={400} />
        <SubFooter height={100} />
    </>
);

export default HomePage;