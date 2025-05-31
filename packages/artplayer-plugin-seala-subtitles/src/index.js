import { WebVTTParser, WebVTTSerializer } from './parser';

function mergeTrees(trees) {
    const parser = new WebVTTParser();
    const result = parser.parse('', 'metadata');

    for (let i = 0; i < trees.length; i++) {
        const tree = trees[i];

        if (!tree.updated) {
            tree.updated = true;
            for (let j = 0; j < tree.cues.length; j++) {
                const cue = tree.cues[j];
                for (let k = 0; k < cue.tree.children.length; k++) {
                    const children = cue.tree.children[k];
                    children.value = `<div class="art-subtitle-${tree.name}">${children.value}</div>`;
                }
            }
        }

        result.cues.push(...tree.cues);
    }

    return result;
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
