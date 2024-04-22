// iframemanager v1.2.5
// Youtub

module.exports = async function (url, title = "Youtube") {
  const urlString = url
  // remove the prefix
  const domainprefix = "https://youtu.be/";
  const videoIDStartIndex = urlString.indexOf(domainprefix) + domainprefix.length;
  // zap everything post ?
  const videoIDEndIndex = urlString.indexOf("?");
  // do the magic
  const videoID = urlString.substring(videoIDStartIndex, videoIDEndIndex);

  return `
    <div
      data-service="youtube"
      data-id="${videoID}"
      data-title="${title}"
      data-autoscale
    ></div>
  `;
};
