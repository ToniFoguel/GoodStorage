# -*- coding: utf-8 -*-
import re, os, base64

BASE = os.path.dirname(os.path.abspath(__file__))
DS   = os.path.abspath(os.path.join(BASE, '..', '..'))

PAGES = [
    ('lista','uni-lista'),('perfil','uni-perfil'),('cadastro','uni-cadastro'),
    ('transferencia','uni-transferencia'),('blacklist','uni-blacklist'),
    ('seguro','uni-seguro'),('ocorrencia','uni-ocorrencia'),('meu-espaco','uni-meu-espaco'),
]
COMPONENTS = ['avatar','badge','banner','breadcrumb','button','card','checkbox-card',
    'collapsible','data-item','dropdown','input','kpi','modal','profile-hero',
    'segmented','select','selfrow','sidebar','table','tabs']

def readf(p):
    with open(p,'r',encoding='utf-8') as f: return f.read()
def esc_script(js):
    return re.sub(r'</script', r'<\\/script', js, flags=re.I)
def data_uri_svg(path):
    return 'data:image/svg+xml;base64,' + base64.b64encode(open(path,'rb').read()).decode('ascii')
def body_inner(html):
    m = re.search(r'<body[^>]*>(.*)</body>', html, re.S|re.I); return m.group(1) if m else html

def extract_scripts(markup):
    scripts=[]
    def repl(m):
        if re.search(r'\bsrc\s*=', m.group(0), re.I): return ''  # <script src=...> fora
        scripts.append(m.group(2)); return ''
    out = re.sub(r'<script\b([^>]*)>(.*?)</script>', repl, markup, flags=re.S|re.I)
    return out, scripts

def extract_sprites(markup, store):
    def repl(m):
        block=m.group(0)
        if '<symbol' in block:
            for sm in re.finditer(r'<symbol\b[^>]*\bid="([^"]+)"[^>]*>.*?</symbol>', block, re.S|re.I):
                store.setdefault(sm.group(1), sm.group(0))
            return ''
        return block
    return re.sub(r'<svg\b[^>]*>.*?</svg>', repl, markup, flags=re.S|re.I)

# CSS
css=['/* tokens */\n'+readf(os.path.join(DS,'tokens','tokens.css'))]
for c in COMPONENTS: css.append('/* %s */\n'%c+readf(os.path.join(DS,'components',c,c+'.css')))
css.append('/* ds */\n'+readf(os.path.join(DS,'ds','ds.css')))
css.append('/* locatarios */\n'+readf(os.path.join(BASE,'locatarios.css')))
CSS='\n'.join(css)

symbols={}; pages_html=[]; page_script_tags=[]
for slug,uid in PAGES:
    inner = body_inner(readf(os.path.join(BASE,slug+'.html')))
    inner = extract_sprites(inner, symbols)
    inner, scr = extract_scripts(inner)
    active=' is-active' if slug=='lista' else ''
    pages_html.append('<div class="uni-page%s" id="%s" data-slug="%s">\n%s\n</div>'%(active,uid,slug,inner.strip()))
    fixed=[s.replace("location.href = row.getAttribute('data-href')",
                     "window.__nav(row.getAttribute('data-href'))") for s in scr]
    if fixed:
        content = '\n;\n'.join(fixed)
        # cada tela isolada em sua propria <script> + IIFE (evita colisao de const/let no topo)
        page_script_tags.append('<script>\n/* script: %s */\n(function(){\n%s\n})();\n</'%(slug,esc_script(content))+'script>')

SPRITE='<svg width="0" height="0" style="position:absolute" aria-hidden="true">\n'+'\n'.join(symbols.values())+'\n</svg>'
DATAJS=esc_script(readf(os.path.join(BASE,'locatarios-data.js')))
DSJS=esc_script(readf(os.path.join(DS,'ds','ds.js')))
PAGE_SCRIPTS='\n'.join(page_script_tags)

ROUTER=esc_script(r'''
(function(){
  var MAP={'lista':'uni-lista','perfil':'uni-perfil','cadastro':'uni-cadastro','transferencia':'uni-transferencia','blacklist':'uni-blacklist','seguro':'uni-seguro','ocorrencia':'uni-ocorrencia','meu-espaco':'uni-meu-espaco'};
  function slugToId(href){var m=String(href||'').match(/([a-z][a-z-]*)\.html/i);return m&&MAP[m[1]]?MAP[m[1]]:null;}
  function showPage(id){var t=document.getElementById(id);if(!t)return;var ps=document.querySelectorAll('.uni-page');for(var i=0;i<ps.length;i++)ps[i].classList.toggle('is-active',ps[i]===t);window.scrollTo(0,0);try{history.replaceState(null,'','#'+id);}catch(e){}}
  window.__showPage=showPage;
  window.__nav=function(href){var id=slugToId(href);if(id){showPage(id);return true;}return false;};
  document.addEventListener('click',function(e){
    var a=e.target.closest?e.target.closest('a[href]'):null; if(!a)return;
    if(e.metaKey||e.ctrlKey||e.shiftKey||a.target==='_blank')return;
    var href=a.getAttribute('href')||'';
    if(/^(https?:|mailto:|tel:|\/\/)/i.test(href))return;
    var id=slugToId(href);
    if(id){e.preventDefault();showPage(id);}
    else if(href.indexOf('.html')>=0){e.preventDefault();}
  });
  var start=(location.hash||'').replace('#','');
  if(document.getElementById(start))showPage(start); else showPage('uni-lista');
})();
''')

OUT = '''<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Locatários — Módulo · GoodStorage</title>
<style>
%s
.uni-page{display:none;}
.uni-page.is-active{display:block;}
</style>
</head>
<body>
%s
%s
<script>
%s
</script>
<script>
%s
</script>
%s
<script>
%s
</script>
</body>
</html>
''' % (CSS, SPRITE, '\n'.join(pages_html), DATAJS, DSJS, PAGE_SCRIPTS, ROUTER)

LOGO_MARK=data_uri_svg(os.path.join(DS,'assets','logo-goodstorage-mark.svg'))
LOGO_FULL=data_uri_svg(os.path.join(DS,'assets','logo-goodstorage.svg'))
OUT=OUT.replace('../../assets/logo-goodstorage-mark.svg',LOGO_MARK).replace('../../assets/logo-goodstorage.svg',LOGO_FULL)

dest=os.path.join(BASE,'modulo-locatarios.html')
open(dest,'w',encoding='utf-8').write(OUT)
print('OK',dest); print('bytes',len(OUT)); print('symbols',len(symbols)); print('paginas',len(pages_html)); print('script-tags',len(page_script_tags))
