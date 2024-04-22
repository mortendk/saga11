// iframemanager v1.2.5
// Youtub

module.exports = async function (url, title = "Vimeo", thumbnail = "/assets/img/icon-admin.png") {
  const urlString = url
  // remove the prefix
  const domainprefix = "https://vimeo.com/";
  const videoIDStartIndex = urlString.indexOf(domainprefix) + domainprefix.length;

  const videoID = urlString.substring(videoIDStartIndex);

  return `
    <div
      data-service="vimeo"
      data-id="${videoID}"
      data-title="${title}"
      data-thumbnail="${thumbnail}"
      data-autoscale
    ></div>
  `;
};
