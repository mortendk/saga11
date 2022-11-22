const inspect = require("util").inspect;
// const settings = require("./saga11.config.js");

// Return a clickable json path pickers
// using this amazing lib
// https://github.com/ryshu/jsonpath-picker

module.exports = function (content, arg) {
  const name = arg || "data";
  // TODO: get the theme settings

  // ❌ Getting annoing json errors - todo: fix this prober
  delete content._templateContent;
  delete content.template;
  delete content.templateContent;
  // ❌ Date json error  todo: fix this in the json feed
  if (content.data) {
    delete content.data.date;
    delete content.data.calendar;
    delete content.data.page.date;
  }
  delete content.date;

  // 🤌 Get the data
  const debug = inspect(content);

  return `
      <link rel="stylesheet" href="/themes/debug/jsonpath-picker.css">
      <script src="/themes/debug/jsonpath-picker.min.js"></script>

      <div class="debug11ty">
        <h2>11ty 🎈 Debüg</h2>
        <h3>🤖{{${name}}}:</h3>

        <div class="debug">
          <button class="debugbtn" onclick="copyToClipboard()">Copy 👉</button>
          <input class="debugpath" type="text">
        </div>

        <div class="debuginfo"> ☝️ Following is not printed out: date, data.date, data.page.date</div>
        <pre id="json-renderer" class="debugdata"></pre>
      </div>

      <script>
        let data = ${debug};
        const source = document.querySelector('#json-renderer');
        const dest = document.querySelectorAll('.debugpath');
        btn = document.querySelectorAll('.debugbtn');

        JPPicker.render(source, data, dest, {
          outputCollapsed: true,
          pickerIcon: '#127880'
        });

        function copyToClipboard() {
          let inputfield = document.querySelector(".debugpath");
          inputfield.select();
          document.execCommand("copy");
        }

      </script>
    `;
};
