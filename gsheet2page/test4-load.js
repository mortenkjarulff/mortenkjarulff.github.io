  var sheetdata=null;
  var idx_template=[-1,-1];

  function savedata(json) {

    sheetdata=json.feed.entry;

    for (var i=0; i<sheetdata.length; i++) {
      if (sheetdata[i].gsx$keyword.$t == 'template') {
        idx_template[0]=i;
        idx_template[1]=i;
        break;
      }
    }

    document.write('<script src="//mortenkjarulff.github.io/gsheet2page/test4-' + sheetdata[idx_template[0]].gsx$value1.$t + '.js"></'+'script>');

  }
  document.write('<script src="https://spreadsheets.google.com/feeds/list/' + gsheet + '/1/public/values?alt=json-in-script&callback=savedata"></'+'script>');
