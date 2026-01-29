import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import stations from '../dataset/stations.json';

const Detail = () => {
    const { id } = useParams();
    const station = stations.find(s => s.id === parseInt(id));

    if (!station) {
        return <Navigate to="/" />;
    }

    return (
        <div className="container">
            <Link to="/" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', background: 'var(--glass-bg)', color: 'white', border: '1px solid var(--glass-border)' }}>
                &larr; Back to Stations
            </Link>

            <div className="glass-panel" style={{ padding: '2rem', overflow: 'hidden' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'linear-gradient(90deg, #00d4ff, #00ffaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {station.title}
                        </h1>
                        <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                            <img src={station.image} alt={station.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 1fr)', gap: '2rem', alignItems: 'start' }}>

                        <div>
                            <h2 style={{ color: 'var(--accent-color)', borderBottom: '2px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Description</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e6ed' }}>
                                {station.description}
                            </p>

                            <h2 style={{ color: 'var(--accent-color)', borderBottom: '2px solid var(--glass-border)', paddingBottom: '0.5rem', marginTop: '2rem' }}>History</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e6ed' }}>
                                {station.history}
                            </p>

                            <h2 style={{ color: 'var(--accent-color)', borderBottom: '2px solid var(--glass-border)', paddingBottom: '0.5rem', marginTop: '2rem' }}>Pollution Risk</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e6ed' }}>
                                {station.pollution}
                            </p>

                            <h2 style={{ color: 'var(--accent-color)', borderBottom: '2px solid var(--glass-border)', paddingBottom: '0.5rem', marginTop: '2rem' }}>Workflow</h2>
                            <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(0, 0, 0, 0.2)' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                                    {station.workflow.split(' -> ').map((step, index, arr) => (
                                        <React.Fragment key={index}>
                                            <div style={{
                                                padding: '0.8rem 1.5rem',
                                                background: 'rgba(0, 212, 255, 0.1)',
                                                border: '1px solid var(--accent-color)',
                                                borderRadius: '30px',
                                                color: 'var(--accent-color)',
                                                fontWeight: 'bold'
                                            }}>
                                                {step}
                                            </div>
                                            {index < arr.length - 1 && (
                                                <span style={{ color: '#fff', fontSize: '1.5rem' }}>&rarr;</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel" style={{ padding: '1.5rem', height: 'fit-content' }}>
                            <h3 style={{ marginTop: 0, color: 'var(--accent-color)' }}>Statistics</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {Object.entries(station.stats).map(([key, value]) => (
                                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                                        <span style={{ textTransform: 'capitalize', color: 'var(--text-secondary)' }}>{key}</span>
                                        <span style={{ fontWeight: 'bold' }}>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Detail;
