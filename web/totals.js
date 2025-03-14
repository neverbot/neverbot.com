/* eslint-disable no-console */

import Hexo from 'hexo';
const hexo = new Hexo(process.cwd(), { silent: true });

hexo.init().then(() => {
  hexo.load().then(() => {
    const posts = hexo.locals.get('posts');
    console.log('Total posts: ' + posts.length);

    const pages = hexo.locals.get('pages');
    console.log('Total pages: ' + pages.length);
  });
});
