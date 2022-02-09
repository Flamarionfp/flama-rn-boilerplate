interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'fewfwefuwefhywegf8762g2gf87g82gf8y32gf',
        user: {
          name: 'Flamarion',
          email: 'flamarion@gmail.com',
        },
      });
    }, 2000);
  });
}
