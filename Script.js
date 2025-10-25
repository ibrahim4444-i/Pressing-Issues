<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Pressing Muslim Issues — Interactive</title>
  <meta name="description" content="Interactive, storytelling page on pressing Muslim issues with Wikimedia photos and inline Wiktionary lookups." />
  <link rel="preconnect" href="https://upload.wikimedia.org">
  <style>
    :root{--bg:#0f172a;--card:#ffffff;--muted:#94a3b8;--accent:#0ea5e9;--glass:rgba(255,255,255,0.06)}
    *{box-sizing:border-box}
    html,body{height:100%}
    body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto, "Helvetica Neue",Arial;color:var(--card);background:linear-gradient(180deg,#031027 0%, #061328 60%);-webkit-font-smoothing:antialiased}
    .wrap{max-width:1100px;margin:28px auto;padding:24px}
    header.hero{display:grid;grid-template-columns:1fr 420px;gap:24px;align-items:center;margin-bottom:20px}
    .hero .intro{padding:28px;background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));border-radius:16px;backdrop-filter: blur(6px);box-shadow:0 6px 30px rgba(2,6,23,0.6)}
    .hero h1{margin:0 0 8px;font-size:2rem;line-height:1.05}
    .hero p.lead{margin:0;color:var(--muted)}
    .hero .photo{border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(2,6,23,0.6)}
    .hero .photo img{width:100%;height:100%;object-fit:cover;display:block}

    .topics{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:18px}
    .topic-card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:12px;padding:14px;border:1px solid rgba(255,255,255,0.04)}
    .topic-card h3{margin:0 0 8px;font-size:1.05rem}
    .topic-card p{margin:0;color:var(--muted);font-size:0.95rem}

    section.story{margin-top:28px}
    article.section{display:grid;grid-template-columns:1fr 360px;gap:18px;align-items:start;padding:20px;border-radius:12px;background:linear-gradient(180deg,#031226, #04162a);margin-bottom:18px;border:1px solid rgba(255,255,255,0.03)}
    article.section .text{padding-right:8px}
    article.section h2{margin:0 0 8px;color:var(--accent)}
    article.section p{color:var(--muted);line-height:1.6}
    article.section .side img{width:100%;height:220px;object-fit:cover;border-radius:8px;display:block}

    footer{color:var(--muted);text-align:center;margin:18px 0}

    /* tooltip style */
    .def-word{cursor:pointer;border-radius:4px;padding:0 2px;display:inline-block;text-decoration:underline dotted rgba(14,165,233,0.6)}
    .def-word:hover{background:rgba(14,165,233,0.08)}
    .tooltip{position:absolute;background:#0b1220;color:#e6f2ff;padding:10px 12px;border-radius:8px;max-width:360px;font-size:0.95rem;box-shadow:0 10px 30px rgba(2,6,23,0.6);z-index:9999;border:1px solid rgba(255,255,255,0.04)}
    .tooltip .title{font-weight:600;margin-bottom:6px;color:var(--accent)}
    .tooltip .close{position:absolute;right:8px;top:6px;cursor:pointer;font-weight:700;color:var(--muted)}

    /* responsive */
    @media (max-width:980px){header.hero{grid-template-columns:1fr;}
      article.section{grid-template-columns:1fr;}
      .topics{grid-template-columns:1fr}
    }

    /* subtle animations */
    .fade-in{opacity:0;transform:translateY(6px);animation:fadeIn 700ms forwards}
    @keyframes fadeIn{to{opacity:1;transform:none}}
  </style>
</head>
<body>
  <div class="wrap">
    <header class="hero">
      <div class="intro fade-in">
        <h1>Pressing Muslim Issues — Interactive Overview</h1>
        <p class="lead">A modern storytelling page. Click any underlined word to view its Wiktionary definition inline. Images are suggested from Wikimedia Commons and may be replaced with local files for faster loading.</p>

        <div class="topics" aria-hidden="false">
          <div class="topic-card"><h3>1. The Palestinians</h3><p>Longstanding political conflict, displacement and humanitarian concerns.</p></div>
          <div class="topic-card"><h3>2. Uyghurs (Xinjiang)</h3><p>Reports of detention, surveillance and cultural restrictions.</p></div>
          <div class="topic-card"><h3>3. Rohingya Crisis</h3><p>Statelessness, ethnic cleansing, and refugee flows.</p></div>
          <div class="topic-card"><h3>4. Muslims in Western Societies</h3><p>Islamophobia, representation and integration challenges.</p></div>
          <div class="topic-card"><h3>5. Indian Muslims</h3><p>Socio-political marginalization and communal tensions.</p></div>
          <div class="topic-card"><h3>6. Muslim Refugees Worldwide</h3><p>Displacement from conflicts across the Muslim world.</p></div>
        </div>
      </div>

      <div class="photo fade-in">
        <!-- Suggested Wikimedia image. Replace URL with preferred Wikimedia file. -->
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Al-Aqsa_Mosque_Dome_of_the_Rock.jpg" alt="Al-Aqsa / Dome of the Rock" loading="lazy"/>
      </div>
    </header>

    <main class="story">

      <!-- Section: Palestinians -->
      <article class="section fade-in">
        <div class="text content" data-section="palestinians">
          <h2>1. The Palestinians</h2>
          <p>Between the River Jordan and the Mediterranean Sea lies Palestine — a land where Arab Muslims historically lived peacefully alongside Christian and Jewish minorities for centuries. The political equilibrium shifted as modern Zionist movements emerged in the late nineteenth century, followed by the <em>Balfour Declaration</em> of 1917 and the British military campaign that took Jerusalem in 1918.</p>
          <p>The decisive turning point occurred with the <strong>Nakba</strong> ("Catastrophe") of 1948, when the establishment of the State of Israel led to mass displacement of Palestinian Arabs. Since then, millions have lived as refugees or in diaspora, experiencing long-term occupation, statelessness, and repeated humanitarian crises.</p>
        </div>
        <aside class="side">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Dome_of_the_Rock_%28Oct_2006%29.jpg" alt="Dome of the Rock, Jerusalem" loading="lazy"/>
        </aside>
      </article>

      <!-- Section: Uyghurs -->
      <article class="section fade-in">
        <div class="text content" data-section="uyghurs">
          <h2>2. The Uyghur People of Xinjiang, China</h2>
          <p>The Uyghurs are a Turkic-speaking Muslim people native to China’s Xinjiang Autonomous Region. In recent decades, reports by scholars and international groups document <em>mass detentions</em>, intensive surveillance, restrictions on religious practice, and policies aimed at cultural assimilation.</p>
          <p>The crisis raises critical questions about human rights, religious freedom, and the preservation of minority identity under modern nation-state policies.</p>
        </div>
        <aside class="side">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Id_Kah_Mosque.jpg" alt="Id Kah Mosque" loading="lazy"/>
        </aside>
      </article>

      <!-- Section: Rohingya -->
      <article class="section fade-in">
        <div class="text content" data-section="rohingya">
          <h2>3. The Rohingya Crisis</h2>
          <p>The Rohingya Muslims of Myanmar are widely considered one of the most persecuted minorities globally. Although many Rohingya have lived in Rakhine State for generations, they have been denied citizenship and civil rights by Myanmar’s authorities.</p>
          <p>Since 2017, military operations that the United Nations has characterized in strong terms have displaced hundreds of thousands into refugee camps in Bangladesh and beyond. The Rohingya crisis exemplifies issues of ethnic nationalism, statelessness, and religious intolerance.</p>
        </div>
        <aside class="side">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Cox%27s_Bazar_refugee_camp_%28Nov_2017%29.jpg" alt="Rohingya refugee camp, Cox's Bazar" loading="lazy"/>
        </aside>
      </article>

      <!-- Section: Western Muslims -->
      <article class="section fade-in">
        <div class="text content" data-section="western">
          <h2>4. Muslims in Western Societies</h2>
          <p>Muslim communities in Western countries contribute substantially to civic, cultural, and economic life. Yet many face Islamophobia, discrimination, and media stereotyping — especially since 2001 — which affect social inclusion and representation.</p>
          <p>Debates over multiculturalism versus assimilation continue to influence public policy and everyday experiences of Muslim citizens and residents across Western democracies.</p>
        </div>
        <aside class="side">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/City_Mosque_%28stock%29.jpg" alt="City mosque" loading="lazy"/>
        </aside>
      </article>

      <!-- Section: Indian Muslims -->
      <article class="section fade-in">
        <div class="text content" data-section="indian">
          <h2>5. Indian Muslims</h2>
          <p>India is home to one of the world’s largest Muslim populations. Despite deep historical ties to the subcontinent’s culture and politics, Indian Muslims face challenges including socio-political marginalization, episodes of communal violence, and discriminatory practices.</p>
          <p>Incidents of mob violence, legal disputes over citizenship and rights, and rising communal tensions have contributed to fears of systemic exclusion among many Indian Muslims.</p>
        </div>
        <aside class="side">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/India_mosque_example.jpg" alt="Indian mosque" loading="lazy"/>
        </aside>
      </article>

      <!-- Section: Refugees -->
      <article class="section fade-in">
        <div class="text content" data-section="refugees">
          <h2>6. Muslim Refugees Worldwide</h2>
          <p>Conflicts and instability in regions such as Syria, Afghanistan, Yemen, and Sudan have produced millions of refugees and internally displaced persons (IDPs). Many live in precarious conditions with limited access to basic services like education, healthcare, and safe shelter.</p>
          <p>The global refugee crisis highlights gaps in international protection and burden-sharing, while Muslim refugees often contend with both displacement and discrimination in host communities.</p>
        </div>
        <aside class="side">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Refugees_camp_%28generic%29.jpg" alt="Refugee camp" loading="lazy"/>
        </aside>
      </article>

    </main>

    <footer>
      <p>Tip: Click any underlined word to see an inline Wiktionary definition. Images are courtesy of Wikimedia Commons — replace URLs with preferred files or local copies for production.</p>
    </footer>
  </div>

  <!-- Tooltip container -->
  <div id="tooltip" class="tooltip" style="display:none;">
    <span class="close" aria-label="close">×</span>
    <div class="title"></div>
    <div class="body"></div>
  </div>

  <script>
    // Utility: wrap words in text nodes inside elements with class 'content'
    function wrapWords() {
      const contents = document.querySelectorAll('.content');
      contents.forEach(node => {
        // process child nodes
        const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);

        textNodes.forEach(tn => {
          const text = tn.nodeValue;
          if (!text.trim()) return; // skip whitespace

          const parent = tn.parentNode;
          const frag = document.createDocumentFragment();
          // split words but keep whitespace
          const parts = text.split(/(\s+)/);
          parts.forEach(part => {
            if (part.trim() === '') {
              frag.appendChild(document.createTextNode(part));
            } else {
              const span = document.createElement('span');
              span.className = 'def-word';
              // store normalized word (remove punctuation)
              const raw = part.replace(/^[^\w']+|[^\w']+$/g, '');
              span.dataset.word = raw;
              span.textContent = part;
              frag.appendChild(span);
            }
          });
          parent.replaceChild(frag, tn);
        });
      });
    }

    // Tooltip display logic
    const tooltip = document.getElementById('tooltip');
    const tipTitle = tooltip.querySelector('.title');
    const tipBody = tooltip.querySelector('.body');
    const tipClose = tooltip.querySelector('.close');

    function showTooltipForElement(el, title, htmlContent) {
      tipTitle.textContent = title;
      tipBody.innerHTML = htmlContent;
      tooltip.style.display = 'block';
      // position above element
      const rect = el.getBoundingClientRect();
      // temporarily show to measure
      tooltip.style.left = '0px';
      tooltip.style.top = '-9999px';
      const tRect = tooltip.getBoundingClientRect();
      const top = window.scrollY + rect.top - tRect.height - 10;
      let left = window.scrollX + rect.left + (rect.width/2) - (tRect.width/2);
      // clamp
      left = Math.max(12, Math.min(left, window.innerWidth - tRect.width - 12));
      tooltip.style.top = top + 'px';
      tooltip.style.left = left + 'px';
    }

    function hideTooltip() { tooltip.style.display = 'none'; }
    tipClose.addEventListener('click', hideTooltip);
    window.addEventListener('scroll', () => { if (tooltip.style.display==='block') hideTooltip(); });

    // Fetch wiktionary extract via MediaWiki API
    async function fetchWiktionaryExtract(word) {
      if (!word) return null;
      const endpoint = 'https://en.wiktionary.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&titles=' + encodeURIComponent(word) + '&origin=*';
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        const pages = data.query && data.query.pages;
        if (!pages) return null;
        const page = Object.values(pages)[0];
        if (page.missing !== undefined) return null;
        return page.extract || null;
      } catch (e) {
        return null;
      }
    }

    // click handler for words
    async function onWordClick(e) {
      const el = e.target.closest('.def-word');
      if (!el) return;
      const word = el.dataset.word;
      if (!word) return;
      // show loading
      showTooltipForElement(el, word, '<em>Loading definition…</em>');
      const extract = await fetchWiktionaryExtract(word);
      if (extract) {
        const preview = extract.length > 800 ? extract.slice(0,800) + '...' : extract;
        showTooltipForElement(el, word, '<div>' + sanitize(preview) + '</div>');
      } else {
        showTooltipForElement(el, word, '<div><em>No Wiktionary entry found for this word.</em></div>');
      }
    }

    // basic sanitizer to prevent script injection
    function sanitize(str) {
      return String(str).replace(/[&<>]/g, function(tag) {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
        return map[tag] || tag;
      });
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      wrapWords();
      document.body.addEventListener('click', onWordClick);

      // show fade-in animations
      document.querySelectorAll('.fade-in').forEach((el, i) => {
        el.style.animationDelay = (i * 120) + 'ms';
      });
    });
  </script>
</body>
</html>
