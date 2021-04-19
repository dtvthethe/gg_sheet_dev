/**
 * Read all rows in sheet 1.
 */
function readSheet1() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for(var i = 0; i < data.length; i++) {
    Logger.log('Ten = ' + data[i][0]);
    Logger.log('Gia = ' + data[i][1]);
  }
}

/**
 * Write record to sheet1.
 */
function writeSheet1() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var numberOfRow = sheet.getDataRange().getNumRows()

  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(['Item = ' + numberOfRow, numberOfRow]);
}

/**
 * Add customer menu
 */
function addCustomMenu()
{
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("The's Menu")
    .addItem('Hi', 'aoItemClick')
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Quan ao')
        .addItem('Ao', 'aoItemClick')
        .addItem('Quan', 'aoItemClick')
    )
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Phu kien')
        .addItem('Tai nghe', 'aoItemClick')
        .addItem('Dong ho', 'aoItemClick')
    )
    .addToUi();
}

function aoItemClick()
{
  SpreadsheetApp.getUi().alert('hi');
}

/**
 * - Get current email
 * - Send mail by google app
 */
function getCurrentMailAndSendMail() {
  var currentEmail = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(currentEmail, 'Test mail', 'This is content!');
}


