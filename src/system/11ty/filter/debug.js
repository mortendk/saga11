const inspect = require("util").inspect;

module.exports = function (content, name) {
  const debug = inspect(content);

  return `
        <link rel="stylesheet" href="/debug/jsonpath-picker.css">

        <div class="debug11ty">
          <h2>11ty 🎈 Debüg</h2>

          <h3>🤖 [${name}]</h3>
          <button class="debugbtn" onclick="copyToClipboard()">Copy 👉</button>
          <textarea class="debugtextarea" cols="40">${debug}</textarea>

        </div>

        <script>
        function copyToClipboard() {
          let inputfield = document.querySelector(".debugtextarea");
          inputfield.select();
          document.execCommand("copy");
        }
        </script>

    `;
};
