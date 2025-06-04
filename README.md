# Backend Model Integration - API Service

Repositori ini berisi implementasi server API yang memungkinkan Anda berinteraksi dengan model deep learning yang telah 
terlatih melalui endpoint HTTP. Dibangun dengan Node.js dan framework Express.js, serta dideploy menggunakan Google Cloud Run untuk skalabilitas dan kemudahan penggunaan.

## Teknologi yang Digunakan
* **Node.js**: *Runtime* JavaScript untuk membangun aplikasi *server-side*.
* **Express.js**: *Framework* web minimalis dan fleksibel untuk Node.js.
* **Google Cloud Run**: Layanan komputasi terkelola untuk menjalankan kontainer *serverless*.
* **@tensorflow/tfjs-node**: Memungkinkan menjalankan model TensorFlow.js di lingkungan Node.js dengan akselerasi C++ *native* untuk inferensi yang lebih cepat.
* **CORS**: *Middleware* Express.js untuk mengizinkan permintaan *cross-origin* dari domain yang berbeda, penting untuk akses API dari *frontend*.
* **Dotenv**: Memuat variabel lingkungan dari file `.env` ke `process.env`, menjaga konfigurasi sensitif tetap aman dan terpisah dari kode.
* **Sharp**: Pustaka manipulasi gambar berkinerja tinggi untuk Node.js, sangat efisien untuk mengubah ukuran, mengonversi, atau memproses gambar input sebelum diproses oleh model.

## Instalasi & Penggunaan (Lokal)

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Kloning Repositori**:
    ```bash
    git clone https://github.com/WatchIn-Employee-Activity-Tracking/backend-model-integration.git
    cd backend-model-integration
    ```

2.  **Instal Dependensi**:
    ```bash
    npm install
    ```

3.  **Variabel Lingkungan**:
    Buat file `.env` di *root* proyek Anda dan tambahkan variabel lingkungan yang diperlukan:
    ```
    # CONTOH: 3000
    PORT=UBAH_PORT_YANG_AKAN_DIGUNAKAN

    # BISA DISESUAIKAN DENGAN LOKASI PENYIMPANAN LOKAL ATAU CLOUD
    MODEL_PATH=UBAH_DENGAN_LOKASI_PENYIMPANAN_MODEL
    ```

4.  **Jalankan Aplikasi**:
    ```bash
    npm start
    ```
    Aplikasi akan berjalan di `http://localhost:3000` (atau *port* yang Anda tentukan).

## Dokumentasi API

* **`GET /`**
    * **Deskripsi**: Endpoint dasar untuk memverifikasi bahwa API berjalan
    * **Contoh Respons (Teks Polos)**:
        ```
        This is API for Drowsiness Detection Realtime WatchIn Employee Activity Tracking
        ```

* **`POST /predict`**
    * **Deskripsi**: Mengirimkan data input gambar untuk diproses oleh model deep learning pendeteksi kantuk dan mendapatkan hasil prediksinya.
    * **Request Body (JSON)**:
        ```json
        {
            "imageData": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
        }
        ```
        * `imageData`: String *base64* dari data gambar.
    * **Contoh Respons (JSON)**:
        ```json
        {
          "status": "success",
          "prediction": "opened",
          "confidence": 0.95
        }
        ```
