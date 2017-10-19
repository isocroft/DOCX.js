function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob;
  
  try{
       blob = new Blob(byteArrays, {type: contentType, endings: 'native' });
  }catch(e){
        // TypeError old chrome and FF
        window.BlobBuilder = window.BlobBuilder || 
                             window.WebKitBlobBuilder || 
                             window.MozBlobBuilder || 
                             window.MSBlobBuilder;
        if(e.name == 'TypeError' && window.BlobBuilder){
            var bb = new BlobBuilder();
            bb.append(byteArrays);
            blob = bb.getBlob(contentType);
        }
        else if(e.name == "InvalidStateError"){
            // InvalidStateError (tested on FF13 WinXP)
            blob = new Blob(byteArrays, {type : contentType, endings; 'native' });
        }
        else{
            // We're screwed, blob constructor unsupported entirely
            return null;
        }
    }
  
    return blob;
}


function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    var blob;

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    
    try{
       blob = new Blob(byteArrays, {type: contentType, endings: 'native' });
  }catch(e){
        // TypeError old chrome and FF
        window.BlobBuilder = window.BlobBuilder || 
                             window.WebKitBlobBuilder || 
                             window.MozBlobBuilder || 
                             window.MSBlobBuilder;
        if(e.name == 'TypeError' && window.BlobBuilder){
            var bb = new BlobBuilder();
            bb.append(byteArrays);
            blob = bb.getBlob(contentType);
        }
        else if(e.name == "InvalidStateError"){
            // InvalidStateError (tested on FF13 WinXP)
            blob = new Blob(byteArrays, {type : contentType, endings; 'native' });
        }
        else{
            // We're screwed, blob constructor unsupported entirely
            return null;
        }
    }
    return blob;
}


