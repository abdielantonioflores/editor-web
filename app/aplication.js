let { ready } = plugdo;
let { template } = plugdo;
let { global } = plugdo;
template.setLogo("JavaScript Editor");
template.setColorOptions(colorOptions);


load(function() {
    ready(function () {
      template.applySettings(layoutSettings);

    });
});