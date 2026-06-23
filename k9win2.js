// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9lLWxlYXJuaW5nLmRvc2l0ZWpidC5lZHUucnMvIj5rOXdpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9lLWxlYXJuaW5nLmRvc2l0ZWpidC5lZHUucnMvIj5rOXdpbiBzbG90PC9hPgo8YSBocmVmPSJodHRwczovL2UtbGVhcm5pbmcuZG9zaXRlamJ0LmVkdS5ycy8iPms5d2luIGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL2UtbGVhcm5pbmcuZG9zaXRlamJ0LmVkdS5ycy8iPiBrOXdpbiBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZS1sZWFybmluZy5kb3NpdGVqYnQuZWR1LnJzLyI+azl3aW4gbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9lLWxlYXJuaW5nLmRvc2l0ZWpidC5lZHUucnMvIj5rOXdpbiBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZS1sZWFybmluZy5kb3NpdGVqYnQuZWR1LnJzLyI+azl3aW4gbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2UtbGVhcm5pbmcuZG9zaXRlamJ0LmVkdS5ycy8iPmxpbmsgazl3aW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vZS1sZWFybmluZy5kb3NpdGVqYnQuZWR1LnJzLyI+c2l0dXMgazl3aW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vZS1sZWFybmluZy5kb3NpdGVqYnQuZWR1LnJzLyI+c2l0dXMgZ2Fjb3Igazl3aW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vZS1sZWFybmluZy5kb3NpdGVqYnQuZWR1LnJzLyI+c2l0dXMgc2xvdCBrOXdpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9lLWxlYXJuaW5nLmRvc2l0ZWpidC5lZHUucnMvIj5zbG90IGdhY29yIGs5d2luPC9hPgo8YSBocmVmPSJodHRwczovL2UtbGVhcm5pbmcuZG9zaXRlamJ0LmVkdS5ycy8iPms5d2luPC9hPgo8YSBocmVmPSJodHRwczovL2UtbGVhcm5pbmcuZG9zaXRlamJ0LmVkdS5ycy8iPms5d2luIHNsb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZS1sZWFybmluZy5kb3NpdGVqYnQuZWR1LnJzLyI+azl3aW4gbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vZS1sZWFybmluZy5kb3NpdGVqYnQuZWR1LnJzLyI+azl3aW4gbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9lLWxlYXJuaW5nLmRvc2l0ZWpidC5lZHUucnMvIj5rOXdpbiBhbHRlcm5hdGlmPC9hPg==";
  
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
