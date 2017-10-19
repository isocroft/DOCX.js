# DOCX.js

DOCX.js is a JavaScript library for converting the data in base64 DOCX files into HTML - and back! 

## Browser Support

* IE 8+
* FF 3.5+
* C 3+
* S 4+
* O 11.62+

## Examples

### How to create a word document from a HTML editor (using [FileSaver](http://www.github.com/eligrey/FileSaver.js))

```js

  var result = docx({DOM: $('#doc_html_editor').find('[contenteditable]').get(0) });
  var blob = b64toBlob(result.base64, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  ssaveAs(blob, "test.docx");

```

## License

<strike>Please note that this library is licensed under the Microsoft Office Extensible File License - a license NOT approved by the OSI. 
While this license is based off of the MS-PL, which is OSI-approved, there are significant differences.</strike>

This library is licensed under **MIT**

