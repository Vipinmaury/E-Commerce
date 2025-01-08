const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcJN5pgZsnmV9DwpF6RkLIIPNgIb4vQYYNWyVyPQd0h1IhodUtogG68UXX91QP1LL8G2rYdOjmTCK6eI",
  client_secret: "EA1canJkDkF1u6_i-x79HuxUwHav2qz6PLnPG1IXHtVMbj5bEM70KHmUFbzeYdXiC5PIJ6Y3Qhw-9KuA",
});

module.exports = paypal;
