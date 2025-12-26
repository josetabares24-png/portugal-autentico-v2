import Link from 'next/link';

export const metadata = {
  title: 'Apps Esenciales para Lisboa | Portugal Autentico',
  description: 'Las mejores apps para moverte, comer y disfrutar Lisboa. Transporte, mapas, comida y mas.',
};

export default function AppsPage() {
  const apps = {
    transporte: [
      {
        nombre: "Citymapper",
        descripcion: "La mejor app para transporte publico. Metro, bus, tranvia, todo integrado con horarios en tiempo real.",
        porque: "Te dice exactamente que tranvia coger, donde bajar, y alternativas si hay retrasos.",
        ios: "https://apps.apple.com/app/citymapper/id469463298",
        android: "https://play.google.com/store/apps/details?id=com.citymapper.app.release",
        logo: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 652 652" style="enable-background:new 0 0 652 652;" xml:space="preserve" width="120" height="120">
    <title>Citymapper Logo</title>
    <style type="text/css">
	    .st0{fill:#4A4A4A;}
	    .st1{fill:#37AB2E;}
	    .st2{fill:#FFFFFF;}
    </style>
    <path class="st0" d="M199.4,333.7c-1.5-3.6-2.3-7.5-2.3-11.8c0-4.2,0.8-8.1,2.3-11.8c1.5-3.6,3.6-6.7,6.2-9.2 c2.6-2.5,5.7-4.4,9.3-5.9c3.6-1.4,7.4-2.1,11.5-2.1c8,0,14.6,2.9,19.7,8.7c0.7,0.9,1.1,1.9,1.1,2.9c0,1.3-0.5,2.4-1.4,3.3 s-2.1,1.3-3.4,1.3c-1.4,0-2.6-0.5-3.6-1.6c-1.6-1.8-3.5-3.3-5.7-4.3s-4.4-1.6-6.7-1.6c-5.5,0-10.1,1.9-13.7,5.7 c-3.6,3.8-5.4,8.6-5.4,14.4c0,5.8,1.8,10.6,5.4,14.4c3.6,3.8,8.2,5.7,13.6,5.7c2.3,0,4.6-0.5,6.8-1.5c2.2-1,4-2.4,5.6-4.3 c1.1-1.1,2.3-1.6,3.7-1.6c1.3,0,2.4,0.4,3.3,1.3s1.3,2,1.3,3.2c0,1.1-0.3,2.1-1,2.9c-5.1,5.8-11.6,8.7-19.7,8.7 c-4.1,0-7.9-0.7-11.5-2.1c-3.6-1.4-6.7-3.4-9.3-5.9C202.9,340.4,200.9,337.3,199.4,333.7z M255.4,299c0-1.5,0.4-2.8,1.2-3.8 c0.8-1.1,2-1.6,3.5-1.6c1.5,0,2.8,0.5,3.9,1.6c1,1.1,1.6,2.3,1.6,3.8c0,1.6-0.5,2.9-1.6,3.9c-1,1.1-2.3,1.6-3.9,1.6 c-1.5,0-2.7-0.5-3.5-1.6C255.8,301.8,255.4,300.5,255.4,299z M255.7,345.9v-32.6c0-1.2,0.4-2.2,1.3-3.1c0.9-0.8,2-1.3,3.3-1.3 c1.2,0,2.2,0.4,3,1.3c0.9,0.9,1.3,1.9,1.3,3v32.6c0,1.2-0.4,2.2-1.3,3.1s-1.9,1.3-3.2,1.3c-1.3,0-2.3-0.4-3.2-1.3 S255.7,347.1,255.7,345.9z M271.3,313.3c0-1.1,0.4-2,1.1-2.7c0.8-0.8,1.7-1.2,2.7-1.2h3.4v-7c0-1.2,0.4-2.3,1.3-3.1s2-1.3,3.3-1.3 c1.2,0,2.2,0.4,3.1,1.3s1.3,1.9,1.3,3.1v7h4.9c1,0,1.9,0.4,2.7,1.2c0.7,0.8,1.1,1.8,1.1,2.9c0,1.1-0.4,2-1.1,2.7 c-0.7,0.8-1.6,1.2-2.7,1.2h-4.9v20.7c0,1.5,0.4,2.7,1.1,3.5c0.7,0.8,1.7,1.3,2.8,1.3c0.2,0,0.5,0,0.9-0.1s0.7-0.1,0.9-0.1 c1.2,0,2.1,0.4,2.8,1.1s1.1,1.6,1.1,2.8c0,2.9-2.7,4.4-8.1,4.4c-3.4,0-6-0.9-7.8-2.7c-1.8-1.8-2.7-4.4-2.7-7.8v-23h-3.4 c-1.1,0-2-0.4-2.7-1.2C271.6,315.4,271.3,314.5,271.3,313.3z M299.5,313.3c0-1.1,0.4-2.2,1.3-3.1c0.8-0.9,1.9-1.3,3.3-1.3 c0.9,0,1.7,0.3,2.5,0.8s1.3,1.2,1.7,2.1l10.7,27.6l10.7-27.6c0.3-0.9,0.8-1.6,1.6-2.1c0.8-0.5,1.7-0.8,2.7-0.8 c1.3,0,2.3,0.4,3.1,1.3c0.8,0.9,1.3,1.9,1.3,3c0,0.7-0.1,1.2-0.3,1.7L320.8,357c-2.5,6.1-6.9,9.2-13.1,9.2c-1.7,0-3.1-0.3-4.2-1 c-1.1-0.7-1.7-1.7-1.7-3c0-1.1,0.4-2,1.2-2.8s1.8-1.2,3-1.2c1.2,0,2.1-0.1,2.8-0.2c0.7-0.1,1.4-0.5,2-1s1.1-1.2,1.6-2.1l2-4.5 l-14.5-35.5C299.6,314.4,299.5,313.9,299.5,313.3z M345.7,345.9v-32.6c0-1.2,0.4-2.2,1.3-3.1c0.9-0.8,2-1.3,3.3-1.3 c1.2,0,2.2,0.4,3,1.3s1.3,1.9,1.3,3v1.7c1-1.5,2.8-3,5.3-4.4c2.5-1.4,5.1-2.1,7.9-2.1c2.9,0,5.3,0.7,7.1,2c1.9,1.3,3.1,3.2,3.8,5.5 c1.3-2,3.2-3.8,5.7-5.3s5.2-2.2,8.1-2.2c3.7,0,6.6,1,8.6,3.1c2,2,3,5.1,3,9.2v25.3c0,1.2-0.4,2.2-1.3,3.1s-2,1.3-3.2,1.3 c-1.2,0-2.2-0.4-3.1-1.3s-1.3-1.9-1.3-3.1v-22.4c0-4.8-2.2-7.2-6.6-7.2c-1.8,0-3.6,0.5-5.3,1.6c-1.7,1-3,2.3-4,3.7v24.3 c0,1.2-0.4,2.2-1.3,3.1c-0.9,0.9-1.9,1.3-3.2,1.3c-1.2,0-2.3-0.4-3.2-1.3c-0.9-0.9-1.3-1.9-1.3-3.1v-22.4c0-2.2-0.5-4-1.6-5.3 s-2.7-1.9-5-1.9c-1.8,0-3.5,0.5-5.2,1.6s-3,2.3-4,3.7v24.2c0,1.2-0.4,2.2-1.3,3.1c-0.9,0.9-1.9,1.3-3.2,1.3s-2.3-0.4-3.2-1.3 S345.7,347.1,345.7,345.9z M413.1,337.4c0-2.2,0.4-4.2,1.3-5.9c0.8-1.7,1.9-3.1,3.3-4.1c1.4-1,2.9-1.8,4.5-2.3 c1.6-0.5,3.2-0.8,5-0.8c2.7,0,5.2,0.4,7.5,1.3c2.3,0.9,4.1,2.2,5.5,3.9v-5.9c0-2.2-0.9-3.9-2.6-5.2c-1.7-1.3-4-1.9-6.8-1.9 c-3.7,0-6.9,0.9-9.6,2.7c-0.6,0.4-1.2,0.5-1.8,0.5c-0.9,0-1.7-0.3-2.4-1c-0.7-0.7-1.1-1.5-1.1-2.5c0-0.7,0.2-1.4,0.7-1.9 c1.5-1.9,3.7-3.3,6.7-4.2c3-1,6-1.5,8.9-1.5c2.3,0,4.5,0.3,6.4,0.8c2,0.5,3.7,1.3,5.3,2.5c1.6,1.1,2.8,2.6,3.8,4.6 c0.9,1.9,1.4,4.2,1.4,6.8v22.8c0,1.2-0.4,2.2-1.3,3.1c-0.9,0.9-1.9,1.3-3.1,1.3h-0.5c-0.8,0-1.7-0.3-2.6-1s-1.4-1.7-1.4-3.1v-0.7 c-1.5,1.7-3.3,3-5.6,4c-2.3,0.9-4.7,1.4-7.4,1.4c-1.7,0-3.3-0.3-5-0.9c-1.6-0.6-3.1-1.4-4.5-2.5c-1.4-1.1-2.5-2.5-3.3-4.2 C413.5,341.5,413.1,339.6,413.1,337.4z M422,337.6c0,2.1,0.8,3.8,2.4,5.1c1.6,1.3,3.6,1.9,6.1,1.9c2,0,3.8-0.3,5.5-1 c1.7-0.7,3-1.7,4-3v-6c-1-1.3-2.3-2.3-4-3c-1.7-0.7-3.5-1-5.5-1c-2.5,0-4.5,0.6-6.1,1.9C422.8,333.7,422,335.4,422,337.6z M460.5,361.4v-48.1c0-1.2,0.4-2.2,1.3-3.1c0.9-0.8,2-1.3,3.3-1.3c1.2,0,2.2,0.4,3,1.3s1.3,1.9,1.3,3v1.6 c1.5-2,3.4-3.6,5.7-4.7s4.7-1.7,7.2-1.7c5.3,0,9.7,1.9,13,5.7c3.3,3.8,4.9,8.9,4.9,15.5c0,6.6-1.7,11.8-5,15.6 c-3.3,3.8-7.6,5.7-12.9,5.7c-2.5,0-4.9-0.6-7.1-1.7s-4.1-2.7-5.8-4.9v17.1c0,1.2-0.4,2.2-1.3,3c-0.9,0.9-1.9,1.3-3.2,1.3 c-1.2,0-2.3-0.4-3.1-1.3C460.9,363.6,460.5,362.6,460.5,361.4z M469.4,337.5c1,1.5,2.4,2.7,4.4,3.8c1.9,1,3.9,1.6,5.8,1.6 c3.4,0,6.1-1.2,8.2-3.7c2.1-2.5,3.1-5.7,3.1-9.6c0-3.9-1-7-3.1-9.5c-2.1-2.5-4.8-3.7-8.2-3.7c-2,0-3.9,0.5-5.8,1.6 c-1.9,1-3.4,2.3-4.4,3.8V337.5z M508.9,361.4v-48.1c0-1.2,0.4-2.2,1.3-3.1s2-1.3,3.3-1.3c1.2,0,2.2,0.4,3,1.3s1.3,1.9,1.3,3v1.6 c1.5-2,3.4-3.6,5.7-4.7s4.7-1.7,7.2-1.7c5.3,0,9.7,1.9,13,5.7c3.3,3.8,4.9,8.9,4.9,15.5c0,6.6-1.7,11.8-5,15.6 c-3.3,3.8-7.6,5.7-12.9,5.7c-2.5,0-4.9-0.6-7.1-1.7s-4.1-2.7-5.8-4.9v17.1c0,1.2-0.4,2.2-1.3,3c-0.9,0.9-1.9,1.3-3.2,1.3 c-1.2,0-2.3-0.4-3.1-1.3S508.9,362.6,508.9,361.4z M517.9,337.5c1,1.5,2.4,2.7,4.4,3.8c1.9,1,3.9,1.6,5.8,1.6c3.4,0,6.1-1.2,8.2-3.7 c2.1-2.5,3.1-5.7,3.1-9.6c0-3.9-1-7-3.1-9.5c-2.1-2.5-4.8-3.7-8.2-3.7c-2,0-3.9,0.5-5.8,1.6c-1.9,1-3.4,2.3-4.4,3.8V337.5z M555.2,329.5c0-3.9,0.9-7.4,2.6-10.6c1.7-3.2,4.2-5.8,7.3-7.7c3.2-1.9,6.7-2.8,10.6-2.8c4.7,0,8.6,1.3,12,3.9s5.6,6.1,6.8,10.5 c0.7,2.3,1,4.1,1,5.4c0,1.2-0.4,2.2-1.3,3.1c-0.9,0.9-2,1.3-3.2,1.3h-26.7c0.3,3,1.6,5.4,3.9,7.4c2.3,2,5.2,3,8.8,3 c3.2,0,6.3-0.7,9.1-2c0.6-0.3,1.2-0.4,1.8-0.4c1,0,1.9,0.4,2.7,1.1c0.8,0.7,1.2,1.6,1.2,2.6c0,1.1-0.6,2.1-1.7,3 c-1.1,0.9-2.5,1.6-4.2,2.1s-3.4,0.9-5,1.2c-1.7,0.3-3.2,0.4-4.6,0.4c-6.1,0-11.1-2-15.1-5.9C557.2,341,555.2,335.9,555.2,329.5z M564.1,326.3h22.4c-0.1-1.2-0.3-2.3-0.7-3.4c-0.4-1.1-1.1-2.2-1.9-3.2c-0.9-1-2-1.8-3.5-2.4c-1.5-0.6-3.1-0.9-5-0.9 c-3.4,0-6,1-8,3C565.5,321.4,564.4,323.7,564.1,326.3z M603.9,345.9v-32.6c0-1.2,0.4-2.2,1.3-3.1c0.9-0.8,2-1.3,3.3-1.3 c1.2,0,2.2,0.4,3,1.3c0.9,0.9,1.3,1.9,1.3,3.1v2.2c3.2-4.4,6.4-6.6,9.6-6.6c1.2,0,2.1,0.4,2.8,1.1c0.7,0.7,1.1,1.7,1.1,2.9 c0,1.4-0.4,2.5-1.2,3.3c-0.8,0.8-1.8,1.3-3.1,1.5c-4.1,0.4-7.2,2-9.2,4.9v23.3c0,1.2-0.4,2.2-1.3,3.1c-0.9,0.9-1.9,1.3-3.1,1.3 h-0.2c-1.2,0-2.2-0.4-3.1-1.3S603.9,347.1,603.9,345.9z"/>
    <circle class="st1" cx="99.6" cy="325" r="73.1"/>
    <path class="st2" d="M134.7,367.5C120,380.2,99.4,384.2,80.9,378c-18.5-6.2-32.2-21.7-35.8-40.5c-0.4-2.2-2.6-3.7-4.9-3.3 c-2.3,0.4-3.8,2.5-3.3,4.7c4.1,21.7,19.9,39.6,41.3,46.7c4.9,1.6,9.9,2.7,14.9,3.1c17,1.4,34.1-3.9,47.2-15.2c1.7-1.5,1.9-4,0.4-5.7 C139.1,366.2,136.4,366,134.7,367.5 M64,329.1c3.6,0,6.5-2.9,6.5-6.5c0-3.6-2.9-6.5-6.5-6.5s-6.5,2.9-6.5,6.5 C57.5,326.2,60.4,329.1,64,329.1L64,329.1z M134.3,329.1c3.6,0,6.5-2.9,6.5-6.5c0-3.6-2.9-6.5-6.5-6.5c-3.6,0-6.5,2.9-6.5,6.5 C127.8,326.2,130.7,329.1,134.3,329.1L134.3,329.1z M103.3,327.9H83.6c-2.7,0-4.9-2.2-4.9-5c0-2.8,2.2-5,4.9-5l19.7,0l-6.1-6.3 c-1.9-1.9-1.9-5.1,0-7c1.9-2,5-2,6.9,0l14.3,14.8c0.9,0.9,1.4,2.2,1.4,3.5c0,1.3-0.5,2.6-1.4,3.5l-14.3,14.8c-0.9,1-2.2,1.5-3.5,1.5 c-1.3,0-2.5-0.5-3.5-1.5c-1.9-2-1.9-5.1,0-7L103.3,327.9z"/>
</svg>
,
        gratis: true
      },
      {
        nombre: "Bolt",
        descripcion: "Alternativa a Uber, mas barata en Lisboa. Taxis y patinetes electricos.",
        porque: "Precios mas bajos que Uber. Muy usado por locales.",
        ios: "https://apps.apple.com/app/bolt-request-a-ride/id675033630",
        android: "https://play.google.com/store/apps/details?id=ee.mtakso.client",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bolt_logo.svg/480px-Bolt_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Uber",
        descripcion: "El clasico. Funciona muy bien en Lisboa con precios razonables.",
        porque: "Alternativa a Bolt. A veces tiene mejores precios segun la hora.",
        ios: "https://apps.apple.com/app/uber/id368677368",
        android: "https://play.google.com/store/apps/details?id=com.ubercab",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/480px-Uber_logo_2018.svg.png",
        gratis: true
      },
      {
        nombre: "Free Now",
        descripcion: "App de taxis oficiales. Util si prefieres taxi tradicional con taximetro.",
        porque: "Taxis con licencia, precio fijo al aeropuerto, pago con tarjeta garantizado.",
        ios: "https://apps.apple.com/app/free-now-mytaxi/id357852748",
        android: "https://play.google.com/store/apps/details?id=taxi.android.client",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/FREE_NOW_logo.svg/480px-FREE_NOW_logo.svg.png",
        gratis: true
      }
    ],
    comida: [
      {
        nombre: "The Fork",
        descripcion: "Reservas en restaurantes con descuentos de hasta 50%. Muy popular en Lisboa.",
        porque: "Descuentos reales en restaurantes buenos. Reserva con un click.",
        ios: "https://apps.apple.com/app/thefork-restaurant-bookings/id351439447",
        android: "https://play.google.com/store/apps/details?id=com.lafourchette.lafourchette",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/TheFork_logo.svg/480px-TheFork_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Glovo",
        descripcion: "Delivery de comida, supermercado, farmacia. El mas usado en Portugal.",
        porque: "Mas restaurantes locales que Uber Eats. Entregas rapidas.",
        ios: "https://apps.apple.com/app/glovo/id951812684",
        android: "https://play.google.com/store/apps/details?id=com.glovo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Glovo_logo.svg/480px-Glovo_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Uber Eats",
        descripcion: "Delivery de comida. Buena seleccion de restaurantes en Lisboa.",
        porque: "Alternativa a Glovo. A veces tiene ofertas mejores.",
        ios: "https://apps.apple.com/app/uber-eats-food-delivery/id1058959277",
        android: "https://play.google.com/store/apps/details?id=com.ubercab.eats",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_Eats_2020_logo.svg/480px-Uber_Eats_2020_logo.svg.png",
        gratis: true
      }
    ],
    mapas: [
      {
        nombre: "Google Maps",
        descripcion: "El mapa de siempre. Descarga el mapa offline de Lisboa antes de viajar.",
        porque: "Funciona sin internet si descargas el mapa. Opiniones de restaurantes utiles.",
        ios: "https://apps.apple.com/app/google-maps/id585027354",
        android: "https://play.google.com/store/apps/details?id=com.google.android.apps.maps",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Google_Maps_icon_%282020%29.svg/480px-Google_Maps_icon_%282020%29.svg.png",
        gratis: true
      },
      {
        nombre: "Maps.me",
        descripcion: "Mapas 100% offline. Perfecto si no tienes datos moviles.",
        porque: "Funciona completamente sin internet. Rutas a pie muy precisas.",
        ios: "https://apps.apple.com/app/maps-me-offline-maps-gps-nav/id510623322",
        android: "https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Maps.me_logo.svg/480px-Maps.me_logo.svg.png",
        gratis: true
      }
    ],
    utilidades: [
      {
        nombre: "Google Translate",
        descripcion: "Traductor con camara. Apunta a un menu en portugues y lo traduce al instante.",
        porque: "La funcion de camara es magica para menus y carteles.",
        ios: "https://apps.apple.com/app/google-translate/id414706506",
        android: "https://play.google.com/store/apps/details?id=com.google.android.apps.translate",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/480px-Google_Translate_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Revolut",
        descripcion: "Tarjeta sin comisiones en el extranjero. Cambio de divisa al tipo real.",
        porque: "Paga en euros sin comisiones. Saca dinero gratis en cajeros.",
        ios: "https://apps.apple.com/app/revolut/id932493382",
        android: "https://play.google.com/store/apps/details?id=com.revolut.revolut",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Revolut_logo.svg/480px-Revolut_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Wise",
        descripcion: "Alternativa a Revolut. Transferencias internacionales y tarjeta multimoneda.",
        porque: "Otra opcion para pagar sin comisiones.",
        ios: "https://apps.apple.com/app/wise-ex-transferwise/id612261027",
        android: "https://play.google.com/store/apps/details?id=com.transferwise.android",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wise_Logo.svg/480px-Wise_Logo.svg.png",
        gratis: true
      }
    ],
    experiencias: [
      {
        nombre: "GetYourGuide",
        descripcion: "Tours, entradas a monumentos, experiencias. Cancelacion gratuita en muchos.",
        porque: "Entradas sin cola al Oceanario, Jeronimos, etc.",
        ios: "https://apps.apple.com/app/getyourguide-tours-tickets/id657029442",
        android: "https://play.google.com/store/apps/details?id=com.getyourguide.android",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/GetYourGuide_logo.svg/480px-GetYourGuide_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Airbnb",
        descripcion: "No solo alojamiento. La seccion de Experiencias tiene tours locales unicos.",
        porque: "Experiencias con locales: clases de cocina, tours de fado, paseos alternativos.",
        ios: "https://apps.apple.com/app/airbnb/id401626263",
        android: "https://play.google.com/store/apps/details?id=com.airbnb.android",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/480px-Airbnb_Logo_B%C3%A9lo.svg.png",
        gratis: true
      }
    ]
  };

  const categorias = [
    { key: 'transporte', nombre: 'Transporte', icono: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', color: 'from-blue-500 to-blue-600' },
    { key: 'comida', nombre: 'Comida y Restaurantes', icono: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: 'from-amber-500 to-orange-500' },
    { key: 'mapas', nombre: 'Mapas Offline', icono: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7', color: 'from-green-500 to-emerald-500' },
    { key: 'utilidades', nombre: 'Utilidades', icono: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'from-purple-500 to-violet-500' },
    { key: 'experiencias', nombre: 'Tours y Experiencias', icono: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z', color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <main>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 text-white backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              14 apps recomendadas
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Apps <span style={{color: 'var(--color-accent)'}}>esenciales</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">Todo lo que necesitas en tu movil para moverte, comer y disfrutar Lisboa como un local.</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="bg-white rounded-2xl p-6 mb-12 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{color: 'var(--color-primary)'}}>Tip: Descarga antes de viajar</h3>
                <p className="text-slate-600">Instala estas apps con WiFi en casa. Algunas permiten descargar mapas offline. Asi no dependes de datos moviles al llegar.</p>
              </div>
            </div>
          </div>

          {categorias.map((cat) => (
            <div key={cat.key} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icono} /></svg>
                </div>
                <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>{cat.nombre}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {apps[cat.key as keyof typeof apps].map((app) => (
                  <div key={app.nombre} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img src={app.logo} alt={app.nombre} className="w-12 h-12 object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>{app.nombre}</h3>
                          {app.gratis && <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Gratis</span>}
                        </div>
                        <p className="text-slate-600 text-sm mb-2">{app.descripcion}</p>
                        <p className="text-slate-500 text-xs mb-4">{app.porque}</p>
                        <div className="flex gap-2">
                          <a href={app.ios} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                            App Store
                          </a>
                          <a href={app.android} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-medium hover:bg-green-700 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3.5V21a.5.5 0 00.854.354l8.646-8.646L3.854 3.146A.5.5 0 003 3.5zm18.146 8.354l-3.792 2.197-3.5-3.5 3.5-3.5 3.792 2.197a1 1 0 010 1.606zM5.854 2.146l8.646 8.646-2.5 2.5L4 5.5l1.854-3.354z"/></svg>
                            Google Play
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900"></div>
            <div className="relative p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Quieres todo organizado?</h3>
                <p className="text-white/70 text-lg">Nuestros itinerarios incluyen que app usar en cada momento del viaje.</p>
              </div>
              <Link href="/itinerarios" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl bg-white" style={{color: 'var(--color-primary)'}}>
                Ver itinerarios
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
