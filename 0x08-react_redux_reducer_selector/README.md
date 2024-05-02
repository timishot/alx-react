# 0x08. React Redux reducer+selector


![img](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/5b02610e1a538e005104.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T095003Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7713a7f9ac413ddf536eb15d5466330978b2784247a19d040db261704a6c0c87)

## Resources

**Read or watch:**

- [Reducers](https://intranet.alxswe.com/rltoken/SzgQcaVZ6qtF1ccU-S2DiA)
- [Selectors](https://intranet.alxswe.com/rltoken/m3ctiAA74QV6YYqZ8YBZTQ)
- [Writing tests](https://intranet.alxswe.com/rltoken/E5mFy6WxHnMfIwxYhy2gzw)
- [Immutable Map documentation](https://intranet.alxswe.com/rltoken/oeA22lgPb_GvU1nOzWoA3w)
- [Normalizr](https://intranet.alxswe.com/rltoken/fmN8EIQtqvKbLVgJuRyM0Q)
- [Normalizing State Shape](https://intranet.alxswe.com/rltoken/wCbecNeGJhMu3hu38S7RCw)

## Learning Objectives

At the end of this project, you should be able to [explain to anyone](https://intranet.alxswe.com/rltoken/e1Q_JKJmhjTNmRU9kO6GFw), **without the help of Google**:

- The purpose of a reducer and the role it plays within your application
- Why a reducer should stay as pure as possible
- Why mutations should not happen within a reducer
- The use of Immutable within the reducer
- The use of Normalizr within the app
- Selectors: what they are and when to use them

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node `12.x.x` and `npm 6.x.x`
- A `README.md` file, at the root of the folder of the project, is mandatory
- Push all of your files, including `package.json` and `.babelrc`
- All of your functions must be exported