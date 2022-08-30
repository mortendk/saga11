const inspect = require("util").inspect;

module.exports = function (content) {
  // console.log(this);
  // console.log(this.getVariables());
  // let data2 = JSON.stringify(this.ctx);

  // get the name of the variable that is called
  // get the whole name of the varialbe for fast copy to {{ path.to.the.value }}
  //  If theres a function of data inside a var cut it off "overflow hidden"
  let data = JSON.stringify(content);

  // console.log(this.ctx.layout);
  // console.log(this.ctx.permalink);
  // console.log(this.ctx.date-updated);

  // https://github.com/ryshu/jsonpath-picker#plugin-installation
  return `
    <link rel="stylesheet" href="/assets/_debug/jsonpath-picker.css">
    <script src="/assets/_debug/jsonpath-picker.min.js"></script>

    <div class="debug11ty">
      <h2>🎈 11ty Debug </h2>
      <div class="datafield">
        <input class="debugpath" type="text">
      </div>
      <h3>🤖 Data:</h3>
      <pre id="json-renderer" class="debugdata"></pre>
    </div>
    <script>
      var data = ${data};
      source = document.querySelector('#json-renderer');
      dest = document.querySelectorAll('.debugpath');

      JPPicker.render(source, data, dest, {
        outputCollapsed: true,
        processKeys: true,
        pickerIcon: '#127880'
      });

      JPPicker.render(source, data, dests);

      // dest.addEventListener("focus", () => {
      //   dest.select();
      //   dest.execCommand("copy");
      // })

    </script>
  `;
};
