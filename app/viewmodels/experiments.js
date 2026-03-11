define(["knockout"], function (ko) {
  var ctor = function () {
    this.title = "Experiments";
    this.subHeader = "Experimental things, most of these don't really do much.";
    this.experimentList = ko.observableArray([
      {
        title: "sprite",
        description: "test to split spritesheets",
        url: "http://shameen.info/sprite",
        tags: ["2012", "website"],
        functional: true,
      },
      {
        title: "snpt beta",
        description: "better online text storage with history",
        url: "http://shameen.info/snpt/beta",
        tags: ["2011", "website"],
        functional: false,
      },
      {
        title: "TheKeys",
        description:
          "shows details on your keyboard presses (keycodes,events etc)",
        url: "http://dl.dropbox.com/u/698380/Etc/programs/TheKeys.exe",
        tags: ["2009", "exe"],
        functional: false,
      },
      {
        title: "Connect Status",
        description: "tells you when you go offline (and come back online)",
        url: "http://dl.dropbox.com/u/698380/Etc/programs/Connectstatus_1_3.exe",
        tags: ["2009", "exe"],
        functional: false,
      },
      {
        title: "YourPCinfo",
        description:
          "Shows some information about the computer you're running.",
        url: "http://dl.dropbox.com/u/698380/Etc/programs/YourPCinfo.exe",
        tags: ["2008", "exe"],
        functional: false,
      },
      {
        title: "Simple random number generator",
        description: "",
        url: "http://dl.dropbox.com/u/698380/Etc/programs/RandomNumGen_1_0.exe",
        tags: ["2008", "exe"],
        functional: false,
      },
      {
        title: "ETH Public Key to Address",
        description:
          "Converts a Secp256k1 public key encoded as hex (used by Ethereum) to other public key formats, and computes the 'Address'.",
        url: "https://codepen.io/shameen/details/poKxvaJ",
        tags: ["2022", "JavaScript"],
        functional: true,
      },
      {
        title: "which base/encoding is this string in?",
        description:
          "Check a string if it could be encoded in many encodings (base16, base32, base64, etc)",
        url: "https://codepen.io/shameen/details/MWXbMRr",
        tags: ["2022", "JavaScript"],
        functional: true,
      },
      {
        title: "Buffer string conversion",
        description:
          "Convert a string between base64, ascii, utf8, utf16le / ucs2, binary, or hex",
        url: "https://codepen.io/shameen/details/LYxWpBd",
        tags: ["2021", "JavaScript"],
        functional: true,
      },
    ]);
    this.experimentList.sort(function (left, right) {
      return left.functional == right.functional ? 0 : left.functional ? -1 : 1;
    });
  };

  return ctor;
});
