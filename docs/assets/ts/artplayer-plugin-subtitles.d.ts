import type Artplayer from 'artplayer';

export = artplayerPluginSubtitles;
export as namespace artplayerPluginSubtitles;

type Option = {
    //
};

type Result = {
    name: 'artPlayerPluginSubtitles';
    setSubtitles: (
        subtitles: {
            name: string;
            text: string;
        }[],
    ) => void;
};

declare const artplayerPluginSubtitles: (option: Option) => (art: Artplayer) => Result;
