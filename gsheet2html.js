<!-- Start FAQ Check http://www.xn--kligel-byae.dk/ for an explanation -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/showdown/1.7.4/showdown.min.js"></script>
<script>// <![CDATA[

// Function to fetch data from our sheet and build html to show FAQ
function show_faq(div,feed) {

  $.ajax({
    url: feed,
    type: 'get',
    dataType: 'jsonp'})
    .done(function(data) {

      // Number of rows in our sheet
      var len = data.feed.entry.length;

      // Create a new showdown converter
      var converter = new showdown.Converter();
      // Let it behave like github
      converter.setFlavor('github');

      // Collect html here
      var html = '';

      // Lets display it in a table
      html += '<table border style="width:100%">';

      // Header row
      html += '<tr>';
      // Question
      html +=
        '<th style="padding:0 1em;width:50%">' +
        converter.makeHtml('**Spørgsmål**') +
        '</th>'
      ;
      // Answer
      html +=
        '<th style="padding:0 1em;width:50%">' +
        converter.makeHtml('**Svar**') +
        '</th>'
      ;
      html += '</tr>';

      // For each row in our sheet
      for (var i=0; i<len; i++) {

        // If no answer (then it is a "category")
        if (data.feed.entry[i].gsx$answer.$t == '') {

          // Header row
          html += '<tr>';
          // Spans the whole table (2 columns)
          html +=
            '<th style="padding:0 1em;width:100%" colspan="2">' +
            converter.makeHtml('**_' + data.feed.entry[i].gsx$question.$t + '_**') +
            '</th>'
          ;
          html += '</tr>';

        }
        else {

          // Detail row
          html += '<tr>';
          // Question
          html +=
            '<td style="padding:0 1em;width:50%">' +
            converter.makeHtml(data.feed.entry[i].gsx$question.$t) +
            '</td>'
          ;
          // Answer
          html +=
            '<td style="padding:0 1em;width:50%">' +
            converter.makeHtml(data.feed.entry[i].gsx$answer.$t) +
            '</td>'
          ;
          html += '</tr>';

        }

      }

      // End table
      html += '</table>';

      // Replace the div
      $(div).html(html);

    })

  ;

}

// Call show_faq() to replace below div
show_faq('#faq','https://spreadsheets.google.com/feeds/list/1ZBHfd6uyyHkLAgCw_DiKzYcZybf5y_hXk-WiBssMAGM/1/public/values?alt=json-in-script&callback=?');

// ]]></script>
<!-- Div with id and fallback text (if show_faq() for some reason fails) -->
<div id="faq"><a href="https://docs.google.com/spreadsheets/d/1ZBHfd6uyyHkLAgCw_DiKzYcZybf5y_hXk-WiBssMAGM/view#gid=0">L&aelig;s FAQ her</a>.</div>
<!-- End FAQ -->
