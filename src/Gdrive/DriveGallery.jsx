import React from 'react';

const driveFileIds = [
  "18s8W5QKivu3zPDG0McRWh7WZ********",  // replace with your real IDs
  "1aBcDeFGhijkLmnoPqRsTuVwxYz123456",  
  "2bCdEfGHijklMnopQrStUvWxYz9876543"
];

function DriveGallery() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Google Drive Files Gallery</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {driveFileIds.map((id, index) => (
          <div
            key={id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              background: '#fff',
            }}
          >
            <iframe
              src={`https://drive.google.com/file/d/${id}/preview`}
              width="100%"
              height="240"
              allow="autoplay"
              style={{ border: 'none' }}
              title={`Drive File ${index + 1}`}
              loading="lazy"
            />
            <div style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>
              File {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DriveGallery;
