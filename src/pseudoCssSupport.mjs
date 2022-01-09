export const pseudoCssSupport = (pseudoCss) => {
  const style = document.createElement('style');
  let isPseudoCssSupported;

  try {
    document.head.appendChild(style);
    style.sheet.insertRule(`${pseudoCss} {}`);
    isPseudoCssSupported = true;
  } catch (_unused) {
    isPseudoCssSupported = false;
  } finally {
    style.remove();
  }

  return isPseudoCssSupported;
};
