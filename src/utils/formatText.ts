import Graphemer from 'graphemer';

export function formatHash(hash: string, units = 12) {
  if (hash && hash.length > units) {
    const splitter = new Graphemer();
    let arr = splitter.splitGraphemes(hash);
    if (arr && arr.length > units) {
      return `${arr.slice(0, Math.floor(units / 2)).join('')}....${arr
        .slice(-Math.floor(units / 2))
        .join('')}`;
    } else {
      return hash;
    }
  } else {
    return hash;
  }
}
