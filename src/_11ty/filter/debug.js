const inspect = require("util").inspect;

module.exports = function (content) {
  // circular replacer
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  function jsonEscape(str) {
    return str.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
  }

  // console.log(debug);
  // const circularReplacer = JSON.stringify(debug, getCircularReplacer());
  // const escaped = jsonEscape(circularReplacer);

  // return `<textarea cols="100" rows="20">${escaped}}</textarea>`;
  //
  //   let data2 = JSON.stringify(escapeddata);

  // https://github.com/ryshu/jsonpath-picker#plugin-installation

  // Need to fix the issue with the date strings that are not ''
  //  that makes

  // delete content.template;
  // delete content.collection;
  delete content.date;

  // console.log(content.data);

  // 🤌 Get the data
  const debug = inspect(content);

  // var result = JSON.parse(debug);
  // let debugstring = JSON.stringify(debug);
  // return `<textarea cols="100" rows="20">${data}}</textarea>`;
  // const foo = jsonEscape(debug);

  return `
      <link rel="stylesheet" href="/assets/_debug/jsonpath-picker.css">
      <script src="/assets/_debug/jsonpath-picker.min.js"></script>

      <div class="debug11ty">
        <h2>11ty 🎈 Debüg</h2>
        <div class="datafield">
          <input class="debugpath" type="text">
          <button class="debugbtn" onclick="copyToClipboard()">copy</button>
        </div>
        <h3>🤖 [data]:</h3>
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

        JPPicker.render(source, data);

        function copyToClipboard() {
          let inputfield = document.querySelector(".debugpath");
          inputfield.select();
          document.execCommand("copy");
        }

      </script>
    `;
};
