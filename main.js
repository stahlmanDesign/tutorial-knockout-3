//import * as ko from "knockout";
//import $ from '../node_modules/jquery/dist/jquery.min.js';
function WebmailViewModel() {
    // Data
    var self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();
    self.chosenMailData = ko.observable();
    // Behaviours
    self.goToFolder = function (folder) { location.hash = folder; };
    self.goToMail = function (mail) { location.hash = mail.folder + '/' + mail.id; };
    // Client-side routes    
    Sammy(function () {
        this.get('#:folder', function () {
            self.chosenFolderId(this.params.folder);
            self.chosenMailData(null);
            var id = this.params.folder.toLowerCase();
            $.get(id + '.json', { folder: this.params.folder }, self.chosenFolderData);
        });
        this.get('#:folder/:mailId', function () {
            self.chosenFolderId(this.params.folder);
            self.chosenFolderData(null);
            $.get("message.json", { mailId: this.params.mailId }, self.chosenMailData);
        });
        //Using runRoute like this means that the empty 
        //client-side URL will be treated the same as #Inbox,
        // i.e., it will load and display the Inbox.
        this.get('', function () { this.app.runRoute('get', '#Inbox'); }); // default location
    }).run();
}
;
ko.applyBindings(new WebmailViewModel());
