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
                            <img src="../assets/kedai.jpg" alt>
                            <img src="../assets/kedai2.jpg" alt>
                            <img src="../assets/kedai3.jpg" alt>
                        </figure>
                    </div>
                    <h1> Kedai 27 </h1>
                    <hr>
                    <p>
                        Minum kopi telah menjadi budaya di Indonesia. Budaya minum kopi telah ada dari Sabang sampai Merauke. Sekarang ini kopi bukan hanya minuman untuk menghangatkan tubuh, tetapi telah menjadi sarana bersosialisasi.Mulai dari secangkir kopi percakapan yang hangat sampai pertukaran informasi terjalin. Maka dari itu, tidak mengherankan bahwa minum kopi telah menjadi gaya hidup. Kopi dapat disajikan dengan berbagai cara. Namun, untuk mendapatkan hasil terbaik yang dibutuhkan biji kopi pilihan dan mesin kopi yang canggih dan mahal. Dengan demikian, secangkir kopi yang baik hanya dapat dinikmati oleh kalangan tertentu saja. Berawal dari ide menyediakan kopi yang nikmat dan berkualitas untuk semua kalangan, Kedai 27 menciptakan mesin kopi khusus yang mampu menghasilkan secangkir kopi berkualitas. Mesin kopi kami mampu memproduksi espresso yang sama dengan kopi yang biasanya diproduksi oleh mesin kopi mahal dan membutuhkan daya listrik yang besar.
                        <br><br>Alamat : Jalan Sukarno Hatta Km2, No12, Rt48 Kelurahan, Gn. Samarinda, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76125
                        <br>Buka setiap hari 10.00-00.00
                        <br><br>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9031189438815!2d116.83984051415716!3d-1.227234935909287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147cba5187761%3A0xe30010981475d082!2sKedai%2027%20Balikpapan!5e0!3m2!1sid!2sid!4v1583536512495!5m2!1sid!2sid" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
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
                            <div>Agus</div>
                            <p>Mantap ini tempat asik banget dan murah banget... recomended lah pokoknya</p>
                        </li>
                        <li>
                            <div>Sakti</div>
                            <p>Sekian banyak tempat yang ku kunjungi hanya disini dan hanya kamu yang bisa membuatku nyaman karena kenyamananku merupakan ekspresi dari kenyamanan dompetku hehe</p>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
