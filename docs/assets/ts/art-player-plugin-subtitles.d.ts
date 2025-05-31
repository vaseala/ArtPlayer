import type Artplayer from 'artplayer';

export = artplayerPluginSubtitles;
export as namespace artplayerPluginSubtitles;

type Option = {
    //
};

type Result = {
    name: 'artplayerPluginSubtitles';
};

declare const artplayerPluginSubtitles: (option: Option) => (art: Artplayer) => Result;
