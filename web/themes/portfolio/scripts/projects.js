hexo.extend.helper.register('project_list', function () {
  return this.site.posts.toArray().sort(function (a, b) {
    const rankA = typeof a.rank === 'number' ? a.rank : Infinity;
    const rankB = typeof b.rank === 'number' ? b.rank : Infinity;
    if (rankA !== rankB) return rankA - rankB;
    return b.date - a.date;
  });
});
