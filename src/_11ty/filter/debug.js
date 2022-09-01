const inspect = require("util").inspect;

module.exports = function (content) {
  delete content._templateContent;
  // ❌ Getting annoing errors from the json date todo: fix this prober
  delete content.template;
  delete content.templateContent;
  // ❌ remove the date its messing with the json - todo: fix this
  delete content.data.date;
  delete content.data.calendar;
  delete content.data.page.date;
  delete content.date;

  // 🤌 Get the data
  const debug = inspect(content);

  return `
      <link rel="stylesheet" href="/assets/_debug/jsonpath-picker.css">
      <script src="/assets/_debug/jsonpath-picker.min.js"></script>

      <div class="debug11ty">
        <h2>11ty 🎈 Debüg</h2>
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

        // JPPicker.render(source, data);

        function copyToClipboard() {
          let inputfield = document.querySelector(".debugpath");
          inputfield.select();
          document.execCommand("copy");
        }

      </script>
    `;
};
