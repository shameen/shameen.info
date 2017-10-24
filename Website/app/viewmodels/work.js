define([], function () {
    return {
        title: 'Portfolio',
        portfolioItems: [
            {
                title: "Hashtag Dungeon Website",
                description: "indie game landing-page website",
                img: "images/work/hDungeon.png",
                link: {
                    url: "http://hashtagdungeon.com",
                    active: true
                },
                tags: ["jQuery","CSS"]
            },
            {
                title: "Negative",
                description: "image processing tool for photo negatives (University final-year project)",
                img: "images/work/negative.png",
                link: {
                    url: "https://github.com/shameen/negative",
                    active: true
                },
                tags: ["MATLAB","GUI","Image Processing"]
            },
            {
                title: "Timetabling System",
                description: "database-driven ASP.NET timetabling system (University team project)",
                img: "images/work/deliv3_4.png",
                link: {
                    url: null,
                    active: false
                },
                tags: ["ASP.NET","SQL Server","Bootstrap"]
            },
            {
                title: "Phil Wolstenholme Photography",
                description: "multi-page website with self-made jquery photo gallery",
                img: "images/work/wolstenholme1.png",
                link: {
                    url: "http://philwolstenholme.com/",
                    active: true
                },
                tags: ["jQuery","CSS"]
            },
            {
                title: "Propah Job Studios Website",
                description: "wordpress theme <small>(and previously, <a href='http://dl.dropbox.com/u/698380/propah/index.html'>simple HTML websites</a>)</small>",
                img: "images/work/pjs.png",
                link: {
                    url: "http://propahjobstudios.co.uk/",
                    active: false
                },
                tags: ["WordPress","PHP","CSS"]
            },
            {
                title: "snpt, online textbox",
                description: "text storage and history <small>(<a href='http://shameen.info/snpt/beta'>beta</a>)</small>",
                img: "images/work/snpt1.png",
                link: {
                    url: "http://shameen.info/snpt",
                    active: true
                },
                tags: ["PHP","MySQL"]
            },
            {
                title: "Forbidden Memories Database",
                description: "card game database browser and preview",
                img: "images/work/fmr.png",
                link: {
                    url: "http://shameen.info/fmr",
                    active: true
                },
                tags: ["PHP","MySQL","jQuery","jQuery UI"]
            },
            {
                title: "FI Windows & Conservatories",
                description: "basic website with gallery and effects",
                img: "images/work/fiwindows.png",
                link: {
                    url: "http://fiwindows.com/",
                    active: false
                },
                tags: ["jQuery"]
            },
            {
                title: "JR Ambulance Medical Resources",
                description: "quote calculator",
                img: "images/work/jrambulance.png",
                link: {
                    url: "http://www.jr-ambulance.co.uk/calculator/medical_resources_calculator_AIO.html",
                    active: false
                },
                tags: ["JavaScript"]
            },
            {
                title: "iAlaina 30-second intro",
                description: "3D main titles based on the the TV show 'iCarly'",
                img: null, //TODO: vimeo embed
                link: {
                    url: "http://vimeo.com/10457730",
                    active: true
                },
                tags: ["3D","After Effects","Video","VFX"]
            }
        ]
    };
});
