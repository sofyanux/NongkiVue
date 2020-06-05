/* eslint-disable no-undef */
<template>
    <div class="detail">
        <!--Bagian Konten-->
        <div class="judul has-text-centered">
            <h1 class="title has-text-weight-bold">INFORMASI LENGKAP</h1>
            <p class="subtitle">Informasi lengkap dari tempat nongkrong pilihanmu</p>
        </div>
        <div class="media">
            <aside class="media-right">
                <div class="widget">
                    <h2 class="title is-5 is-uppercase">Rekomendasi</h2>
                    <p class="is-justified">Berikut adalah daftar rekomendasi tempat untuk kalian.</p>
                    <ul>
                        <li><router-link class="continue" to="/detail/laperpoll">Angkringan Laperpoll</router-link></li>
                        <li><router-link class="continue" to="/detail/kopimantan">Kopi Rumah Mantan</router-link></li>
                        <li><router-link class="continue" to="/detail/kedai27">Kedai 27</router-link></li>
                    </ul>
                </div>
                <div class="widget">
                    <h2 class="title is-5 is-uppercase">Tempat Populer</h2>
                    <p class="is-justified">Berikut adalah daftar tempat populer untuk kalian.</p>
                    <ul>
                        <li><router-link class="continue" to="/detail/laperpoll">Angkringan Laperpoll</router-link></li>
                        <li><router-link class="continue" to="/detail/kopimantan">Kopi Rumah Mantan</router-link></li>
                        <li><router-link class="continue" to="/detail/kedai27">Kedai 27</router-link></li>
                    </ul>
                </div>
                <div class="widget">
                    <h2 class="title is-5 is-uppercase">Tentang Kami</h2>
                    <p class="is-justified">Jika anda ingin mempromosikan tempat nongkrong silahkan hubungi kami <router-link to="/about">di sini</router-link>.</p>
                </div>
            </aside>

            <div class="media-content">
                <div class="content">
                    <div id="slider">
                        <figure>
                            <img src="../assets/mantan.jpg" alt>
                            <img src="../assets/mantan2.jpg" alt>
                            <img src="../assets/mantan3.jpg" alt>
                        </figure>
                    </div>
                    <h1> Kopi Rumah Mantan </h1>
                    <hr>
                    <p>
                        Buat kalian nih cess yang suka nongki, khususnya kalian yang suka ngopi dan berada di Balikpapan ada nih tempat ngopi yang asik buat kalian. Apa itu? Mau tau? oke deh mimin kasih tau ya biar nda penasaran bubuhan kalian ini cess... Kopi Rumah Mantan adalah salah satu tempat nongkrong yang cukup populer di Balikpapan. Tunggu apa lagi cess tempat populer ini cess, selain banyak anak muda ngumpul nongki disini banyak tersedia makanan murah-murah cess yang pastinya bakal pas sama dompet kalian. Banyak juga fasilitas yang disediakan sama pihak Kopi Rumah Mantan loh. Kalo kalian penasaran bisa nih cek-cek ke TKP langsung cess, nih di bawah udah mimin kasih alamat sama jam bukanya Kopi Rumah Mantan. Kuy Ngopii...
                        <br><br>Alamat : Jl. Soekarno Hatta KM 3 (Sebelah Klinik Mitra Sehat), Batu Ampar, Balikpapan Selatan, Balikpapan
                        <br>Buka setiap hari 00:00 - 01:00, 10:00 - 23:59
                        <br><br>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1166.0621394109808!2d116.84612731742337!3d-1.2229512932426914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1583537056611!5m2!1sid!2sid" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                    </p>
                    <h1>Posting Komentar</h1>
                    <hr>
                    <p>Sampaikan kritik dan saran kamu di kolom komentar agar kami dapat menjadikannya sebagai bahan penilaian tentang tempat ini.</p>
                    <form class="comment">
                        <p>Nama :</p>
                        <input id="name" type="text" placeholder="Masukkan nama..." required>
                        <p>Komentar :</p>
                        <textarea id="komen" placeholder="Tulis komentar..." required></textarea>
                        <input id="tambah" type="button" value="Submit" onclick="kirim()"/>
                    </form>
                    <h1>Komentar</h1>
                    <hr>
                    <div id="post-komen">
                        <li>
                            <div>Budi</div>
                            <p>Mantap ini tempat asik banget dan murah banget... recomended lah pokoknya</p>
                        </li>
                        <li>
                            <div>Fery</div>
                            <p>Sekian banyak tempat yang ku kunjungi hanya disini dan hanya kamu yang bisa membuatku nyaman karena kenyamananku merupakan ekspresi dari kenyamanan dompetku hehe</p>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
