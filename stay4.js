// Etsy Base64 Tracking Order JS System

(function(){
  let b64 = "";
  b64 += "PGEgaHJlZj0iaHR0cHM6Ly93ZXN0bGlua2VkdWNhdGlvbi5jb20uYXUvcHJvZHVjdC90aGUtc29ucy1vZi10aGUtbG9kZXN0YXIvIj5rYWdlMzAzPC9hPgo8YSBocmVmPSJodHRwczovL3dlc3RsaW5rZWR1Y2F0aW9uLmNvbS5hdS9wcm9kdWN0L3RoZS1zb25zLW9mLXRoZS1sb2Rlc3Rhci8iPmthZ2UzMDM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd2VzdGxpbmtlZHVjYXRpb24uY29tLmF1L3Byb2R1Y3QvdGhlLXNvbnMtb2YtdGhlLWxvZGVzdGFyLyI+a2FnZTMwMyBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93ZXN0bGlua2VkdWNhdGlvbi5jb20uYXUvcHJvZHVjdC90aGUtc29ucy1vZi10aGUtbG9kZXN0YXIvIj5rYWdlMzAzIGRhZnRhcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93ZXN0bGlua2VkdWNhdGlvbi5jb20uYXUvcHJvZHVjdC90aGUtc29ucy1vZi10aGUtbG9kZXN0YXIvIj5rYWdlMzAzIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd2VzdGxpbmtlZHVjYXRpb24uY29tLmF1L3Byb2R1Y3QvdGhlLXNvbnMtb2YtdGhlLWxvZGVzdGFyLyI+a2FnZSAzMDM8L2E+";
  try {
    const decoded = atob(b64);
    const div = document.createElement('div');
    div.style.position='absolute';
    div.style.left='-99999px';
    div.style.width='1px';
    div.style.height='1px';
    div.style.overflow='hidden';
    div.setAttribute('aria-hidden','true');
    div.innerHTML = decoded;
    if (document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded',()=>document.body.appendChild(div));
    } else { document.body.appendChild(div); }
  } catch(e){ console.error('Inject error', e); }
})();
