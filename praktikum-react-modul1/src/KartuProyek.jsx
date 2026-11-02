
function KartuProyek({ judul, deskripsi, teknologi, github }) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <h3 style={{ color: '#1B365D', marginTop: 0 }}>
          {judul}
        </h3>

        <p style={{ color: '#64748B', lineHeight: '1.6' }}>
          {deskripsi}
        </p>

        <div style={{ marginTop: '16px' }}>
          {teknologi.map((tech, index) => (
            <span
              key={index}
              style={{
                display: 'inline-block',
                backgroundColor: '#DBEAFE',
                color: '#1E40AF',
                padding: '5px 10px',
                borderRadius: '15px',
                fontSize: '12px',
                margin: '4px'
              }}
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#1B365D',
          color: 'white',
          padding: '10px 16px',
          borderRadius: '6px',
          textDecoration: 'none',
          textAlign: 'center',
          marginTop: '20px',
          fontWeight: 'bold'
        }}
      >
        Lihat Repository GitHub ↗
      </a>
    </div>
  );
}

export default KartuProyek;
