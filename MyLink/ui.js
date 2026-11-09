// 마이링크 화면 공통 부품: 아이콘, 클릭 통계 섹션
const MyLinkUI = (() => {
  const ICONS = {
    link: "🔗",
    github: "🐙",
    code: "💻",
    book: "📚",
    instagram: "📷",
    youtube: "▶️",
    blog: "✍️",
    mail: "✉️",
    portfolio: "💼"
  };
  const ICON_LABELS = {
    link: "링크",
    github: "GitHub",
    code: "코드",
    book: "강의/책",
    instagram: "인스타그램",
    youtube: "유튜브",
    blog: "블로그",
    mail: "메일",
    portfolio: "포트폴리오"
  };

  function icon(name) {
    return ICONS[name] || ICONS.link;
  }

  // 총 클릭수 + 링크별 클릭수(많은 순, 막대로 표시)
  function renderStats(container, links, clicks) {
    const total = links.reduce((sum, link) => sum + (clicks[link.id] || 0), 0);
    const max = Math.max(1, ...links.map(link => clicks[link.id] || 0));
    const sorted = [...links].sort((a, b) => (clicks[b.id] || 0) - (clicks[a.id] || 0));

    container.querySelector("[data-total]").textContent = total;
    const list = container.querySelector("[data-stat-list]");
    list.replaceChildren();

    if (sorted.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "아직 링크가 없어요.";
      list.appendChild(empty);
      return;
    }

    sorted.forEach(link => {
      const n = clicks[link.id] || 0;
      const row = document.createElement("div");
      row.className = "stat-row";

      const head = document.createElement("div");
      head.className = "stat-head";
      const name = document.createElement("span");
      name.textContent = `${icon(link.icon)} ${link.title}`;
      const value = document.createElement("span");
      value.textContent = `${n}회`;
      head.append(name, value);

      const bar = document.createElement("div");
      bar.className = "bar";
      const fill = document.createElement("span");
      fill.style.width = `${(n / max) * 100}%`;
      bar.appendChild(fill);

      row.append(head, bar);
      list.appendChild(row);
    });
  }

  return { ICONS, ICON_LABELS, icon, renderStats };
})();
