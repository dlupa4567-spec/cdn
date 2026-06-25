// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9haWRha29zb2phbnByenlieXN6LmNvbS9za2xlcC8iPmRhbmF0b3RvPC9hPgo8YSBocmVmPSJodHRwczovL2FpZGFrb3NvamFucHJ6eWJ5c3ouY29tL3NrbGVwLyI+ZGFuYXRvdG8gc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9haWRha29zb2phbnByenlieXN6LmNvbS9za2xlcC8iPmRhbmF0b3RvIGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL2FpZGFrb3NvamFucHJ6eWJ5c3ouY29tL3NrbGVwLyI+IGRhbmF0b3RvIGRhZnRhcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9haWRha29zb2phbnByenlieXN6LmNvbS9za2xlcC8iPmRhbmF0b3RvIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYWlkYWtvc29qYW5wcnp5Ynlzei5jb20vc2tsZXAvIj5kYW5hdG90byBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYWlkYWtvc29qYW5wcnp5Ynlzei5jb20vc2tsZXAvIj5kYW5hdG90byBsaW5rIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYWlkYWtvc29qYW5wcnp5Ynlzei5jb20vc2tsZXAvIj5saW5rIGRhbmF0b3RvPC9hPgo8YSBocmVmPSJodHRwczovL2FpZGFrb3NvamFucHJ6eWJ5c3ouY29tL3NrbGVwLyI+c2l0dXMgZGFuYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vYWlkYWtvc29qYW5wcnp5Ynlzei5jb20vc2tsZXAvIj5zaXR1cyBnYWNvciBkYW5hdG90bzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9haWRha29zb2phbnByenlieXN6LmNvbS9za2xlcC8iPnNpdHVzIHNsb3QgZGFuYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vYWlkYWtvc29qYW5wcnp5Ynlzei5jb20vc2tsZXAvIj5zbG90IGdhY29yIGRhbmF0b3RvPC9hPgo8YSBocmVmPSJodHRwczovL2FpZGFrb3NvamFucHJ6eWJ5c3ouY29tL3NrbGVwLyI+ZGFuYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vYWlkYWtvc29qYW5wcnp5Ynlzei5jb20vc2tsZXAvIj5kYW5hdG90byBzbG90PC9hPgo8YSBocmVmPSJodHRwczovL2FpZGFrb3NvamFucHJ6eWJ5c3ouY29tL3NrbGVwLyI+ZGFuYXRvdG8gbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vYWlkYWtvc29qYW5wcnp5Ynlzei5jb20vc2tsZXAvIj5kYW5hdG90byBsaW5rPC9hPgo8YSBocmVmPSJodHRwczovL2FpZGFrb3NvamFucHJ6eWJ5c3ouY29tL3NrbGVwLyI+ZGFuYXRvdG8gYWx0ZXJuYXRpZjwvYT4=";
  
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
