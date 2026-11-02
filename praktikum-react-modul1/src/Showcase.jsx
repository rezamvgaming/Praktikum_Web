
import KartuProyek from './KartuProyek';

function Showcase() {
  const daftarProyek = [
    {
      id: 1,
      judul: 'LuxuryCars',
      deskripsi:
        'Website manajemen data mobil yang menyediakan fitur tambah, edit, hapus, pencarian, dan login admin.',
      teknologi: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/username/luxurycars'
    },
    {
      id: 2,
      judul: 'M-Banking',
      deskripsi:
        'Aplikasi simulasi mobile banking berbasis Java dengan fitur pengecekan saldo dan transaksi.',
      teknologi: ['Java', 'OOP'],
      github: 'https://github.com/username/mbanking'
    },
    {
      id: 3,
      judul: 'Portfolio Website',
      deskripsi:
        'Website portofolio pribadi untuk menampilkan profil, kemampuan, pengalaman, dan hasil proyek.',
      teknologi: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/username/portfolio'
    },
    {
      id: 4,
      judul: 'Sistem Informasi Akademik',
      deskripsi:
        'Aplikasi pengelolaan data akademik mahasiswa yang mencakup informasi mahasiswa dan mata kuliah.',
      teknologi: ['React JS', 'JavaScript', 'CSS'],
      github: 'https://github.com/username/sistem-akademik'
    }
  ];

  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: '50px auto',
        padding: '30px 24px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#F8FAFC',
        minHeight: '100vh'
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#1B365D', fontSize: '32px' }}>
          Showcase Portofolio Mini
        </h1>

        <p style={{ color: '#64748B', fontSize: '15px' }}>
          Kumpulan proyek dan hasil pengembangan aplikasi
        </p>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}
      >
        {daftarProyek.map((proyek) => (
          <KartuProyek
            key={proyek.id}
            {...proyek}
          />
        ))}
      </div>

      <footer
        style={{
          textAlign: 'center',
          marginTop: '50px',
          color: '#94A3B8',
          fontSize: '13px'
        }}
      >
        © 2026 Showcase Portofolio Mini
      </footer>
    </div>
  );
}

export default Showcase;
