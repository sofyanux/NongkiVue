<template class="has-background-light">
  <div class="home">
    <!--Bagian Konten-->
    <div class="judul has-text-centered">
      <h1 class="title has-text-weight-bold">TEMPAT POPULER</h1>
      <p class="subtitle">Anda akan menemukan tempat populer saat ini</p>
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
          <p class="is-justified">Jika anda ingin mempromosikan tempat nongkrong silahkan hubungi kami <router-link class="continue" to="/about">di sini</router-link>.</p>
        </div>
      </aside>

      <div class="media-content">
        <div class="content">
          <div class="post-info">
            Di Posting Oleh <b>ADMIN</b>
          </div>
          <img src="../assets/kedai.jpg">
          <h1> Kedai 27 </h1>
          <hr>
          <p>
            <br>Alamat : Jalan Sukarno Hatta Km2, No12, Rt48 Kelurahan, Gn. Samarinda, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76125
            <br>Buka setiap hari 10.00-00.00
          </p>
          <router-link class="continue" to="/detail/kedai27">Selengkapnya →</router-link>
        </div>

        <div class="content">
          <div class="post-info">
            Di Posting Oleh <b>ADMIN</b>
          </div>
          <img src="../assets/laper.jpg">
          <h1 class="title"> Angkringan Laperpoll </h1>
          <hr>
          <p>
            <br>Alamat: Jalan Satu, Gn. Samarinda, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76124
            <br>Buka setiap hari 17.00 – 04.30
          </p>
          <router-link class="continue" to="/detail/laperpoll">Selengkapnya →</router-link>
        </div>

        <div class="content">
          <div class="post-info">
            Di Posting Oleh <b>ADMIN</b>
          </div>
          <img src="../assets/mantan.jpg">
          <h1 class="title"> Kopi Rumah Mantan </h1>
          <hr>
          <p>
            <br>Alamat : Jl. Soekarno Hatta KM 3 (Sebelah Klinik Mitra Sehat), Batu Ampar, Balikpapan Selatan, Balikpapan
            <br>Buka setiap hari 00:00 - 01:00, 10:00 - 23:59
          </p>
          <router-link class="continue" to="/detail/kopimantan">Selengkapnya →</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
