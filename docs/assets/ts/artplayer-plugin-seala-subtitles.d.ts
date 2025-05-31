import type Artplayer from 'artplayer';

export = artplayerPluginSealaSubtitles;
export as namespace artplayerPluginSealaSubtitles;

type Result = {
    name: 'artPlayerPluginSealaSubtitles';
    setSubtitles: (
        subtitles: {
            name: string;
            text: string;
        }[],
    ) => void;
};

declare const artplayerPluginSealaSubtitles: () => (art: Artplayer) => Result;
