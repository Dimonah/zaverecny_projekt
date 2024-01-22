<!-- Jedalnicek.vue -->
<template>
  <div class="jedalnicek">
    <h1>Definícia zdravého stravovania</h1>
    <p>
      Ako prvé si povieme, čo zdravá strava znamená. Zdravé stravovanie rozhodne
      nie je o tom jesť od rána do večera zeleninové šaláty alebo z jedálnička
      vyraďovať pečivo a mliečne výrobky. Zdravo jesť neznamená ani držať diétu.
      Zdravé stravovanie je taký spôsob stravovania, ktorý podporuje naše zdravie,
      kondíciu, psychiku aj celkovú vitalitu. Zdravá strava by sa preto mala
      skladať prevažne z prirodzených potravín, ktoré sú bohaté na dôležité
      živiny, vitamíny, minerálne látky, antioxidanty a vlákninu. Zdravý
      jedálniček je zároveň pestrý a skladá sa z rozumného pomeru bielkovín,
      sacharidov a tukov, ako aj dostatočného množstva vody.
    </p>
    <img src="/Jedlo.jpg" alt="Obrázok jedla" />

    <h1>Hlavné živiny</h1>
    <p>
      Aby naše telo správne fungovalo, potrebuje energiu. Túto energiu získavame z
      potravy, v ktorej je energia obsiahnutá v podobe rôznych živín. Základnými
      živinami sú bielkoviny, sacharidy a tuky. Okrem základných živín potrebujeme
      v strave prijímať aj ďalšie zložky nevyhnutné na správne fungovanie
      organizmu. Reč je o vitamínoch, minerálnych látkach, antioxidantoch a
      vláknine.
    </p>

    <h1>Prečo jesť zdravo?</h1>
    <p>
      K zmene jedálnička nás môžu priviesť rôzne dôvody, ako napríklad chudnutie
      alebo to, aby sme sa cítili lepšie. Hlavným dôvodom by mala byť ale podpora
      zdravia. Nevhodná strava totiž môže negatívne ovplyvniť naše celkové zdravie
      a imunitu. Zlé stravovacie návyky prispievajú k nadváhe a podieľajú sa na
      vzniku srdcovo-cievnych ochorení, ochorení pečene a obličiek, hypertenzie
      (vysokého krvného tlaku), cukrovky 2. typu, vysokého cholesterolu v krvi,
      osteoporózy, depresie a niektorých typov nádorov.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Jedalnicek',
};
</script>

<style>
.jedalnicek {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #333;
}

p {
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
}
</style>
