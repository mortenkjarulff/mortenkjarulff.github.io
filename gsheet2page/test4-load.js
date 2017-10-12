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

    switch(sheetdata[idx_template[0]].gsx$value1.$t) {
      case 'template1':
        var idx_title=[-1,-1];
        var idx_article=[-1,-1];
        var i=0;
        while (i<sheetdata.length) {
          if (sheetdata[i].gsx$keyword.$t == 'title') {
            idx_title[0]=i;
            i++;
            while (i<sheetdata.length && sheetdata[i].gsx$keyword.$t == 'title') {
              i++;
            }
            idx_title[1]=i-1;
            continue;
          }
          if (sheetdata[i].gsx$keyword.$t == 'article') {
            idx_article[0]=i;
            i++;
            while (i<sheetdata.length && sheetdata[i].gsx$keyword.$t == 'article') {
              i++;
            }
            idx_article[1]=i-1;
            continue;
          }
          i++;

        }
        document.write('<title>' + sheetdata[idx_title[0]].gsx$value1.$t + '</title>');
        document.write('</head>');
        document.write('<body>');
        document.write('<h1>template1</h1>');
        for (i=idx_article[0]; i<=idx_article[1]; i++) {
          document.write('article_value1[' + sheetdata[i].gsx$value1.$t + ']<br/>');
          document.write('article_value2[' + sheetdata[i].gsx$value2.$t + ']<br/>');
        }
        document.write('</body>');
        document.write('</html>');
        break;
      case 'template2':
        var idx_title=[-1,-1];
        var idx_post=[-1,-1];
        var i=0;
        while (i<sheetdata.length) {
          if (sheetdata[i].gsx$keyword.$t == 'title') {
            idx_title[0]=i;
            i++;
            while (i<sheetdata.length && sheetdata[i].gsx$keyword.$t == 'title') {
              i++;
            }
            idx_title[1]=i-1;
            continue;
          }
          if (sheetdata[i].gsx$keyword.$t == 'post') {
            idx_post[0]=i;
            i++;
            while (i<sheetdata.length && sheetdata[i].gsx$keyword.$t == 'post') {
              i++;
            }
            idx_post[1]=i-1;
            continue;
          }
          i++;

        }
        document.write('<title>' + sheetdata[idx_title[0]].gsx$value1.$t + '</title>');
        document.write('</head>');
        document.write('<body>');
        document.write('<h1>template2</h1>');
        for (i=idx_post[0]; i<=idx_post[1]; i++) {
          document.write('post_value1[' + sheetdata[i].gsx$value1.$t + ']<br/>');
          document.write('post_value2[' + sheetdata[i].gsx$value2.$t + ']<br/>');
        }
        document.write('</body>');
        document.write('</html>');
        break;
      default:
        break;
    }

  }
  document.write('<script src="https://spreadsheets.google.com/feeds/list/' + gsheet + '/1/public/values?alt=json-in-script&callback=savedata"></'+'script>');
