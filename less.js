(() => {
  // <stdin>
  if (document.querySelector(".single-toc")) {
    tocbot.init({
      tocSelector: ".single-toc",
      contentSelector: ".single-content",
      headingSelector: "h1, h2, h3",
      hasInnerContainers: false,
      collapseDepth: 4
    });
  }
  var $btnDark = document.getElementById("btn-dark");
  var $body = document.getElementsByTagName("body");
  $btnDark.addEventListener("click", (e) => {
    e.preventDefault();
    $body[0].classList.toggle("dark");
    if (getCookie("dark") === "") {
      setCookie("dark", "true", 7 * 24 * 60 * 60);
    } else {
      removeCookie("dark");
    }
  });
  if (getCookie("dark") === "true") {
    $body[0].classList.add("dark");
  }
  function setCookie(key, value, second) {
    let d = new Date();
    d.setTime(d.getTime() + second * 1e3);
    let expires = "expires=" + d.toGMTString();
    document.cookie = key + "=" + value + "; " + expires + "; path=/";
  }
  function removeCookie(key) {
    let d = new Date();
    d.setTime(d.getTime() - 1);
    let expires = "expires=" + d.toGMTString();
    document.cookie = key + "=;" + expires + "; path=/";
  }
  function getCookie(key) {
    let name = key + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) === 0)
        return c.substring(name.length, c.length);
    }
    return "";
  }
})();
