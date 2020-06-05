<template>
  <div class="about">
    <!--Bagian Konten-->
    <div class="judul has-text-centered">
      <h1 class="title has-text-weight-bold">TENTANG KAMI</h1>
      <p class="subtitle">Informasi tentang kami ada disini</p>
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
          <img src="../assets/about.jpg">
          <h1> Sekilas Tentang Kami </h1>
          <hr>
          <p>
            Kami disini hadir untuk menjawab kebutuhan kalian yang ingin mencari tempat untuk nongkrong bersama teman, sahabat, pacar, maupun keluarga kalian. Dengan adanya kami disini diharapkan dapat memudahkan kalian dalam mencari informasi terkait tempat-tempat nongkrong di <strong>Balikpapan</strong>. Kalian akan mendapatkan informasi mengenai posisi dari tempat nongkrong tersebut yang akan kami berikan alamat yang terhubung langsung dengan <strong>Google Maps</strong>. Dengan begitu kalian tidak perlu lagi mencarinya di <strong>Google Maps</strong> karena sudah kami cantumkan pada website kami yang kalian hanya perlu melakukan klik pada alamat yang sudah kami sediakan.
          </p>

          <h1> Kontak Kami </h1>
          <hr>
          <p>
            Jika kalian adalah salah seorang pemilik dari tempat nongkrong dan tempat kalian belum terdapat dalam website kami kemudian kalian ingin tempat kalian kami tampilkan dalam website kami, silahkan menghubungi kontak yang tersedia di bawah ini :
            <br><strong>Email : kelompok.web8@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
