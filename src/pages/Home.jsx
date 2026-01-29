import React, { useState } from 'react';
import Card from '../components/Card';
import stations from '../dataset/stations.json';

const Home = () => {
    const [filter, setFilter] = useState('');

    const filteredStations = stations.filter(station =>
        station.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(90deg, #fff, #aab2bd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Energy Generation Stations
                </h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    Explore the various methods of generating electricity, from renewable sources to traditional power plants.
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <input
                        type="text"
                        placeholder="Search stations..."
                        className="glass-panel"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        style={{
                            padding: '1rem 2rem',
                            width: '100%',
                            maxWidth: '400px',
                            color: 'white',
                            outline: 'none',
                            fontSize: '1rem'
                        }}
                    />
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '4rem'
            }}>
                {filteredStations.map(station => (
                    <Card key={station.id} station={station} />
                ))}
            </div>

            {filteredStations.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                    No stations found matching "{filter}".
                </div>
            )}
        </div>
    );
};

export default Home;
