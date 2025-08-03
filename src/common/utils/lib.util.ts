export const getObjField = (obj: Record<string, any>, path: string, defaultValue = null) => {
  const keys = path.split('.');
  for (let i = 0; i < keys.length; i++) {
    obj = obj[keys[i]];
    if (obj === undefined || obj === null) return defaultValue;
  }
  return obj;
};

export const dateToLocaleStr = (value: string, locale: string = 'uk-UA') => {
  if (!value) return '-';
  return value
    ? new Date(value).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'numeric',
        day: '2-digit'
      })
    : '-';
};
