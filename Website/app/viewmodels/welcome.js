define(function() {
    var ctor = function () {
        this.title = 'Hello';
        this.subHeader = 'Nothing to see here.';
        this.contactList = [
            {
                title: "Twitter",
                img: "http://shameen.info/img/i_tw.png",
                url: "http://twitter.com/shameen_"
            },
            {
                title: "YouTube",
                img: "http://shameen.info/img/i_yt.png",
                url: "http://youtube.com/whatshameen"
            },
            {
                title: "Github",
                img: null,
                url: "https://github.com/shameen"
            }
        ];
    };
    
    return ctor;
});