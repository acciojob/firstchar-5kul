function firstChar(text) {
   const trimmed = text.trimStart();
   return trimmed.length > 0 ? trimmed.charAt(0) : '';
}

alert(firstChar(text));
