function isEvalAllowed() {
  try {
    return true;
  } catch (e) {
    return false;
  }
}

function getCsp() {
  return {
    noUnsafeEval: isEvalAllowed(),
  };
}

export { getCsp };
