// 마이링크 데이터: 프로필, 링크 목록, 클릭 수를 이 브라우저(localStorage)에 저장합니다.
const MyLinkData = (() => {
  const DATA_KEY = "mylink-data";
  const CLICK_KEY = "mylink-clicks";

  // 처음 방문했거나 저장된 데이터가 없을 때 보여줄 기본 데이터
  const DEFAULT_DATA = {
    profile: {
      username: "wwjj2424",
      displayName: "한우진",
      bio: "바이브 코딩으로 만든 나의 링크 모음"
    },
    links: [
      { id: "github", title: "GitHub 프로필", url: "https://github.com/wwjj2424-del", icon: "github" },
      { id: "source", title: "마이링크 소스 코드", url: "https://github.com/wwjj2424-del/mylink/tree/main/MyLink", icon: "code" },
      { id: "course", title: "바이브 코딩 강의 (SELC)", url: "https://selc.or.kr/", icon: "book" }
    ]
  };

  function read(key) {
    try { return JSON.parse(localStorage.getItem(key)); }
    catch (e) { return null; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  // 저장소를 쓸 수 없는 환경에서도 동작하도록 메모리에 한 벌 들고 있습니다.
  const saved = read(DATA_KEY);
  let data = saved && saved.profile && Array.isArray(saved.links)
    ? saved
    : JSON.parse(JSON.stringify(DEFAULT_DATA));
  let clicks = read(CLICK_KEY) || {};

  return {
    getProfile() { return data.profile; },
    getLinks() { return data.links; },

    saveProfile(profile) {
      data.profile = profile;
      write(DATA_KEY, data);
    },
    addLink(link) {
      const newLink = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), ...link };
      data.links.push(newLink);
      write(DATA_KEY, data);
      return newLink;
    },
    updateLink(id, changes) {
      data.links = data.links.map(link => (link.id === id ? { ...link, ...changes } : link));
      write(DATA_KEY, data);
    },
    deleteLink(id) {
      data.links = data.links.filter(link => link.id !== id);
      delete clicks[id];
      write(DATA_KEY, data);
      write(CLICK_KEY, clicks);
    },

    getClicks() { return clicks; },
    addClick(id) {
      clicks[id] = (clicks[id] || 0) + 1;
      write(CLICK_KEY, clicks);
      return clicks[id];
    },

    // http/https 주소만 허용합니다.
    isValidUrl(value) {
      try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
      } catch (e) {
        return false;
      }
    }
  };
})();
