import { WebVTTParser, WebVTTSerializer } from './parser';

function mergeTrees(trees) {
    const result = [];
    trees.forEach((tree) => {
        console.log(tree.name);
        tree.cues.forEach((item) => {
            result.push({
                ...item,
                trackName: tree.name,
            });
        });
    });
    return {
        cues: result,
    };
}

export default function artplayerPluginSealaSubtitles() {
    return async (art) => {
        const { unescape } = art.constructor.utils;
        const parser = new WebVTTParser();
        const seri = new WebVTTSerializer();

        const setSubtitles = (items = []) => {
            const trees = items.map((item, index) => {
                const tree = parser.parse(item.text, 'metadata');
                tree.name = items[index].name;
                return tree;
            });

            let lastUrl = '';
            function setTracks(trees = []) {
                const tree = mergeTrees(trees);
                const vtt = seri.serialize(tree.cues);
                if (lastUrl) URL.revokeObjectURL(lastUrl);
                const url = URL.createObjectURL(new Blob([vtt], { type: 'text/vtt' }));
                lastUrl = url;
                art.option.subtitle.escape = false;
                art.subtitle.init({
                    ...art.option.subtitle,
                    url,
                    type: 'vtt',
                    onVttLoad: unescape,
                });
            }

            setTracks(trees);
        };

        return {
            name: 'sealaSubtitles',
            setSubtitles,
        };
    };
}

if (typeof window !== 'undefined') {
    window['artplayerPluginSealaSubtitles'] = artplayerPluginSealaSubtitles;
}
