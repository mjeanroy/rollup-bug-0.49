function isEvalAllowed() {
  try {
    new Function('');
    return true;
  } catch (e) {
    return false;
  }
}

export function getCsp() {
  return {
    noUnsafeEval: isEvalAllowed(),
  };
}
