
function BadgeSkill({ namaSkill, level }) {
  const warnaLevel = {
    Pemula: {
      backgroundColor: '#FEF3C7',
      color: '#92400E'
    },
    Menengah: {
      backgroundColor: '#DBEAFE',
      color: '#1E40AF'
    },
    Mahir: {
      backgroundColor: '#DCFCE7',
      color: '#166534'
    }
  };

  return (
    <span
      style={{
        ...warnaLevel[level],
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: 'bold',
        display: 'inline-block',
        margin: '5px'
      }}
    >
      {namaSkill} - {level}
    </span>
  );
}

export default BadgeSkill;
