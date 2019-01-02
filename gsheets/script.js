//------------------- Örnek Apps Script makro.
function doGet(e) {
  try {
    var eventData = _getParams(e);
    _insertNewRow(eventData);
    return HtmlService.createHtmlOutput(eventData[0].join(' '));
  } catch (e) {
    // @TODO: Bildirim ekle. -Örn email-
    return HtmlService.createHtmlOutput('Error occured: ' + e.toString());
  }
}

//----------------------------------------------//
function _getParams(request) {
  //----------------------------------------------//
  // Param list: name, company, email, phone, cpref, clid
  //----------------------------------------------//
  var params = request.parameter
    , name = params["name"]
    , company = params['company']
    , email = params["email"]
    , phone = params["phone"]
    , contactPreference = params["cpref"]
    , clid = params["clid"]
    , date = Utilities.formatDate(new Date(), "GMT+3", "yyyy-MM-dd'T'HH:mm:ss'Z'");
  //----------------------------------------------//
  return [[date, name, company, email, phone, contactPreference, clid]];
}

//----------------------------------------------//
function _insertNewRow(eventData) {
  var targetSheet = SpreadsheetApp.getActiveSheet()
    , startRow = targetSheet.getLastRow() + 1
    , fieldCount = eventData[0].length;
  targetSheet.getRange(startRow, 1, 1, fieldCount).setValues(eventData);
  //----------------------------------------------//
  return;
}
