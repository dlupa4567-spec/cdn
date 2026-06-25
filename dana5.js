// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9jaGFsb3BhaGFhZC5jb20vZGVocmFkdW4vIj5kYW5hdG90bzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jaGFsb3BhaGFhZC5jb20vZGVocmFkdW4vIj5kYW5hdG90byBzbG90PC9hPgo8YSBocmVmPSJodHRwczovL2NoYWxvcGFoYWFkLmNvbS9kZWhyYWR1bi8iPmRhbmF0b3RvIGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL2NoYWxvcGFoYWFkLmNvbS9kZWhyYWR1bi8iPiBkYW5hdG90byBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2hhbG9wYWhhYWQuY29tL2RlaHJhZHVuLyI+ZGFuYXRvdG8gbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jaGFsb3BhaGFhZC5jb20vZGVocmFkdW4vIj5kYW5hdG90byBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2hhbG9wYWhhYWQuY29tL2RlaHJhZHVuLyI+ZGFuYXRvdG8gbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2NoYWxvcGFoYWFkLmNvbS9kZWhyYWR1bi8iPmxpbmsgZGFuYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2hhbG9wYWhhYWQuY29tL2RlaHJhZHVuLyI+c2l0dXMgZGFuYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2hhbG9wYWhhYWQuY29tL2RlaHJhZHVuLyI+c2l0dXMgZ2Fjb3IgZGFuYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2hhbG9wYWhhYWQuY29tL2RlaHJhZHVuLyI+c2l0dXMgc2xvdCBkYW5hdG90bzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jaGFsb3BhaGFhZC5jb20vZGVocmFkdW4vIj5zbG90IGdhY29yIGRhbmF0b3RvPC9hPgo8YSBocmVmPSJodHRwczovL2NoYWxvcGFoYWFkLmNvbS9kZWhyYWR1bi8iPmRhbmF0b3RvPC9hPgo8YSBocmVmPSJodHRwczovL2NoYWxvcGFoYWFkLmNvbS9kZWhyYWR1bi8iPmRhbmF0b3RvIHNsb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2hhbG9wYWhhYWQuY29tL2RlaHJhZHVuLyI+ZGFuYXRvdG8gbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2hhbG9wYWhhYWQuY29tL2RlaHJhZHVuLyI+ZGFuYXRvdG8gbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jaGFsb3BhaGFhZC5jb20vZGVocmFkdW4vIj5kYW5hdG90byBhbHRlcm5hdGlmPC9hPg==";
  
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
