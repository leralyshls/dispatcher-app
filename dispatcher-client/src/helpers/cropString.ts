const cropString = (arg: string | null): string | null => {
  if (arg && arg.length > 145) {
    return arg.slice(0, 145) + ' ...';
  } else return arg;
};

export default cropString;
