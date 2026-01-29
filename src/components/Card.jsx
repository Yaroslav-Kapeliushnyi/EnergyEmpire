import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ station }) => {
    return (
        <Link to={`/station/${station.id}`}>
            <div className="glass-panel" style={{
                padding: '1rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.2)';
                    e.currentTarget.style.zIndex = '10';
                    e.currentTarget.style.position = 'relative';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.zIndex = '1';
                }}
            >
                <div style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    background: '#000'
                }}>
                    <img
                        src={station.image}
                        alt={station.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                    />
                </div>
                <div style={{ padding: '0.5rem' }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{station.title}</h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {station.description}
                    </p>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: '600' }}>View Details &rarr;</span>
                </div>
            </div>
        </Link>
    );
};

export default Card;
