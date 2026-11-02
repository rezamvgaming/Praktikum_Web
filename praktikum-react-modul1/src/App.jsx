
import React from 'react';
import KartuProfil from './KartuProfil';
import BadgeSkill from './BadgeSkill';
import ItemMatkul from './ItemMatkul';
import KartuProyek from './KartuProyek';

function App() {

  // 1. DATA MATA KULIAH
  const daftarPraktikum = [
    {
      id: 101,
      kode: 'IF211',
      nama: 'Pemrograman Web (React & Laravel)',
      sks: 3,
      hari: 'Senin'
    },
    {
      id: 102,
      kode: 'IF212',
      nama: 'Sistem Basis Data (PostgreSQL)',
      sks: 3,
      hari: 'Rabu'
    },
    {
      id: 103,
      kode: 'IF213',
      nama: 'Rekayasa Perangkat Lunak Terapan',
      sks: 3,
      hari: 'Kamis'
    },
    {
      id: 104,
      kode: 'IF214',
      nama: 'Arsitektur Sistem Terdistribusi',
      sks: 2,
      hari: 'Jumat'
    }
  ];

  // 2. DATA PROYEK PORTOFOLIO
  const daftarProyek = [
    {
      id: 1,
      judul: 'LuxuryCars',
      deskripsi:
        'Website manajemen data mobil dengan fitur tambah, edit, hapus, pencarian, dan login admin.',
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
        'Website portofolio pribadi untuk menampilkan profil, kemampuan, dan hasil proyek.',
      teknologi: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/username/portfolio'
    },
    {
      id: 4,
      judul: 'Sistem Informasi Akademik',
      deskripsi:
        'Aplikasi pengelolaan informasi akademik mahasiswa dan data mata kuliah.',
      teknologi: ['React JS', 'JavaScript', 'CSS'],
      github: 'https://github.com/username/sistem-akademik'
    }
  ];

  // 3. FUNGSI INTERAKTIVITAS
  const notifikasiSapaan = () => {
    alert(
      'Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.'
    );
  };

  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: '40px auto',
        padding: '0 24px',
        fontFamily: 'Arial, sans-serif'
      }}
    >

      {/* HEADER */}
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ color: '#1B365D' }}>
          Praktikum Pemrograman Web
        </h1>

        <p style={{ color: '#666', fontSize: '15px' }}>
          Laboratorium Informatika - Modul 1:
          Pengenalan React JS & Vite
        </p>
      </header>

      {/* PROFIL MAHASISWA */}
      <section style={{ marginBottom: '32px' }}>
        <h2>Profil Mahasiswa Praktikan</h2>

        <KartuProfil
          nama="Reza Fauzan Zain"
          npm="243040027"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl="https://via.placeholder.com/80"
        />
      </section>

      {/* TUGAS 1 - BADGE SKILL */}
      <section style={{ marginBottom: '32px' }}>
        <h2>Keahlian Mahasiswa</h2>

        <BadgeSkill namaSkill="HTML & CSS" level="Mahir" />
        <BadgeSkill namaSkill="JavaScript" level="Menengah" />
        <BadgeSkill namaSkill="React JS" level="Pemula" />
        <BadgeSkill namaSkill="PHP & Laravel" level="Menengah" />
        <BadgeSkill namaSkill="MySQL" level="Menengah" />
      </section>

      {/* TUGAS 2 - ITEM MATKUL */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Daftar Rencana Praktikum Semester</h2>

        <div style={{ display: 'grid', gap: '12px' }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul
              key={matkul.id}
              {...matkul}
            />
          ))}
        </div>
      </section>

      {/* TUGAS 3 - SHOWCASE PORTOFOLIO */}
      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{
            color: '#1B365D',
            borderBottom: '2px solid #E1E4E8',
            paddingBottom: '10px'
          }}
        >
          Showcase Portofolio Mini
        </h2>

        <p style={{ color: '#666', marginBottom: '24px' }}>
          Berikut merupakan kumpulan proyek pengembangan aplikasi
          dan website.
        </p>

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
      </section>

      {/* TOMBOL INTERAKTIVITAS */}
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: '#1B365D',
            color: '#FFFFFF',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: 'center',
          padding: '20px',
          color: '#888',
          borderTop: '1px solid #E1E4E8',
          fontSize: '13px'
        }}
      >
        © 2026 Praktikum Pemrograman Web - Reza Fauzan Zain
      </footer>

    </div>
  );
}

export default App;
