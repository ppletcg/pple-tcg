// ---- SHARED SUPABASE CLIENT ----
const sb = supabase.createClient(
  'https://iijreiuecodmqlcvhapp.supabase.co',
  'sb_publishable_XmQgiY0xFENpn4-6YXUoJA_gEovC6U8'
);

// ---- NAV INIT ----
// prefix: static HTML shown before auth content (e.g. live-dot)
async function initNav(prefix = '') {
  const { data: { user } } = await sb.auth.getUser();
  const el = document.getElementById('navRight');
  if (!el) return user;
  if (user) {
    const i = (user.email || 'U')[0].toUpperCase();
    el.innerHTML = prefix + `<div class="nav-avatar" onclick="window.location.href='pple-tcg-perfil.html'" title="${user.email}" style="cursor:pointer">${i}</div>`;
  } else {
    el.innerHTML = prefix + `<button class="btn-outline" onclick="window.location.href='pple-tcg-auth.html'">Entrar</button><button class="btn-accent" onclick="window.location.href='pple-tcg-auth.html'">Registrarse</button>`;
  }
  return user;
}
