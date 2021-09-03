export const getResponsePayload = (obj: any, query: string) => {
  if (!obj) return {};
  if (!query) return obj;
  return query.split(' ').reduce((acc: Record<string, unknown>, curr: string): Record<string, unknown> => {
    if (curr) {
      if (!obj[getFirstParametr(curr)]) return acc;
      acc[getAsParametr(curr)] = obj[getFirstParametr(curr)];
      return acc;
    }
    return acc;
  }, {});
}

function getAsParametr(str: string) {
  if (!str) return '';
  if (str.indexOf(':') > -1) {
    const splitted = str.split(':');
    if (!splitted[1] && !splitted[0]) return '';
    else if (!splitted[1]) return splitted[0];
    return splitted[1];
  }
  return str;
}

function getFirstParametr(str: string) {
  if (!str) return '';
  if (str.indexOf(':') > -1) {
    const splitted = str.split(':');
    if (!splitted[1] && !splitted[0]) return '';
    else if (!splitted[0]) return '';
    return splitted[0];
  }
  return str;
}