
// mastodon embed
// https://mastodon.social/@mortendk/112297516536989168

module.exports = async function (url) {
  return `
  <iframe src="${url}/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen">
  </iframe>
  <script src="https://mastodon.social/embed.js" async="async"></script>
  `;
};
