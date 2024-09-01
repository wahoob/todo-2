const kLINK_DETECTION_REGEX =
  /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;

export function highlighteLinks(text) {
  if (!text) return text;
  return text.replace(kLINK_DETECTION_REGEX, (match) => {
    const url =
      match.startsWith("http://") || match.startsWith("https://")
        ? match
        : `https://${match}`;
    return `<a href="${url}" class="underline text-tertiary" target="_blank">${match}</a> `;
  });
}
