let input = '';
// 参照WikiAPIのURL https://www.mediawiki.org/wiki/API:Main_page/ja
// en を laに変更
const searchURL = 'https://ja.wikipedia.org/w/api.php?action=query&format=json&list=backlinks&bllimit=50&bltitle='

function setup() {
  noCanvas();
  input = select('#input');
  input.changed(search);
}

function search() {
  let url = searchURL + input.value();
  // JSONファイルの読み込み
  // 第一引数にはjsonファイルまでのパスを、第二引数には読み込み完了後のCallback
  loadJSON(url, show, 'jsonp'); 
}

function show(data) {
  let links = data.query.backlinks;
  links.forEach(link => {
    // https://p5js.org/reference/#/p5/createDiv
    createDiv(link.title);
  });
}
