# Bore & Barrel — Tugas Modul 4 PWA I

Proyek ini adalah aplikasi Bore & Barrel dari Modul 4 yang sudah ditambah empat fitur tugas:

1. **Konsistensi ukuran kartu** — gambar dibungkus bingkai rasio 4:3 dengan `object-fit: contain`.
2. **Pencarian dan filter** — kolom pencarian nama + chip filter jenis (All/Pistol/Rifle/Shotgun) yang bisa dikombinasikan.
3. **Pengurutan** — tombol toggle *Name* (A–Z / Z–A) dan *Price* (Low–High / High–Low).
4. **Keranjang belanja** — tombol *Add to cart*, badge jumlah item di header, kontrol kuantitas (− / +), hapus item, total harga, dan isi keranjang tersimpan di `localStorage`.

---

## 1. Persiapan (sekali saja)

- Install **Node.js versi 20.19 ke atas atau 22.12 ke atas** (unduh versi LTS di nodejs.org). Cek dengan `node -v`.
- Ekstrak `gunshop-modul4-tugas.zip`, lalu (opsional) ganti nama foldernya sesuai format kelas, misalnya `gunshop-modul4-kel07`.

## 2. Menjalankan di laptop

Buka terminal di dalam folder proyek, lalu jalankan:

```bash
npm install
npm run dev
```

Buka alamat yang muncul (biasanya `http://localhost:5173`). Folder `node_modules` sengaja tidak disertakan di zip, jadi `npm install` wajib dijalankan sekali.

## 3. Menjalankan di HP (tes tampilan mobile)

Pastikan laptop dan HP terhubung ke Wi-Fi yang sama, lalu:

```bash
npm run build
npm run preview -- --host
```

Salin alamat **Network** yang muncul (misalnya `http://192.168.1.5:4173`) dan buka di browser HP.

## 4. Cara menguji tiap fitur (untuk screenshot laporan)

| Fitur | Cara menguji |
| --- | --- |
| Kartu seragam | Buka Catalog. Kartu AR-15 (gambar lebar) dan Desert Eagle (gambar tinggi) tetap sama tinggi dengan kartu lain. |
| Pencarian | Ketik `5` di kolom *Search by name…* → muncul AR-15 dan Mossberg 500. |
| Filter | Klik chip **Shotgun** → hanya shotgun yang tampil. |
| Kombinasi | Chip **Shotgun** aktif + ketik `5` → hanya Mossberg 500. Ketik `xyz` untuk melihat pesan kosong. |
| Sort nama | Klik **Name** sekali (A–Z), klik lagi (Z–A). |
| Sort harga | Klik **Price** sekali (Low–High), klik lagi (High–Low). |
| Keranjang | Klik **Add to cart** beberapa kali → angka badge di menu **Cart** bertambah. Buka menu **Cart** untuk ubah jumlah (− / +), hapus item, dan melihat total. Refresh halaman: isi keranjang tetap ada. |

## 5. File yang ditambah/diubah untuk tugas

```
public/guns/pistol-tall.svg        (baru)  gambar potret untuk uji rasio berbeda
public/guns/rifle-long.svg         (baru)  gambar sangat lebar untuk uji rasio berbeda
src/data/guns.js                   (ubah)  AR-15 & Desert Eagle memakai gambar di atas
src/App.jsx                        (ubah)  memasang useCart + halaman Cart
src/App.css                        (ubah)  bingkai gambar 4:3, toolbar, chip, badge, keranjang
src/hooks/useCart.js               (baru)  logika keranjang (tambah, qty, hapus, total, localStorage)
src/components/CatalogToolbar.jsx  (baru)  kolom pencarian, filter jenis, tombol sort
src/components/GunCard.jsx         (ubah)  bingkai gambar + tombol Add to cart
src/components/Header.jsx          (ubah)  menu Cart + badge jumlah item
src/pages/Catalog.jsx              (ubah)  logika filter + sort
src/pages/Cart.jsx                 (baru)  halaman keranjang
```

## 6. Upload ke GitHub dan hosting di Vercel

```bash
git init
git add .
git commit -m "Tugas modul 4: kartu seragam, search/filter, sort, keranjang"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Di Vercel: **New Project → Import Git Repository** → pilih repo → Framework Preset **Vite** → **Deploy**.

## 7. Memakai laporan Word

- Laporan `Laporan_Tugas_Modul4_PWA1.docx` sudah berisi screenshot, potongan kode, dan analisis sesuai format.
- Screenshot di laporan diambil dari proyek ini. Jika dosen/asisten meminta screenshot dari laptop sendiri (misalnya terlihat address bar/taskbar), jalankan proyek, ambil screenshot yang sama, lalu di Word klik kanan gambar → **Change Picture** → **From a File**. Ukuran dan caption tetap.
- Isi identitas (nama, NIM, kelompok) di halaman sampul laporan utama kalian; file ini hanya berisi bagian Tugas.
