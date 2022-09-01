const inspect = require("util").inspect;

module.exports = function (content) {
  const debug = inspect(content);

  return `
        <link rel="stylesheet" href="/assets/_debug/jsonpath-picker.css">
        <div class="debug11ty">
          <h2>11ty 🎈 Debüg</h2>
          <div class="debug">
        </div>
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
