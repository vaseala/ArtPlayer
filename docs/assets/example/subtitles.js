// npm i artplayer-plugin-subtitles
// import artplayerPluginSubtitles from 'artplayer-plugin-subtitles';

var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    plugins: [
        artplayerPluginSubtitles({
            //
        }),
    ],
});