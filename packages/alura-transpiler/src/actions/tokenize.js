const JSX_REGEX =  /(<[a-zA-Z]+.*?>|<\/[a-zA-Z]+>)/;

const tokenize = (code) => {
  return code.split(JSX_REGEX).filter(Boolean);
};

export default tokenize;
