import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeKeyboard } from '@ionic-native/native-keyboard';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  messengerOptions: any;
  constructor(public navCtrl: NavController, private nativeKeyboard: NativeKeyboard) {

  }

  ionViewDidLoad() {
    this.messengerOptions = {
      onSubmit: function (text) {
        console.log("onSubmit: " + text);
        // appendMessage(text);
      },
      onKeyboardWillShow: function (height) {
        console.log("keyboard will show, height is: " + height);
        //appendMessage("keyboard will show, height is: " + height);
      },
      onKeyboardDidShow: function (height) {
        console.log("keyboard shows, height is: " + height);
        //appendMessage("keyboard shows, height is: " + height);
      },
      onKeyboardWillHide: function () {
        console.log("keyboard will hide");
      },
      onKeyboardDidHide: function () {
        console.log("keyboard did hide");
      },
      onTextChanged: function(newText) {
        console.log("text changed to: " + newText);
        //appendMessage(newText);
      },
      showKeyboard: true,
      type: "twitter", // iOS only, default (default) | decimalpad | phonepad | numberpad | namephonepad | number | email | twitter | url | alphabet | search | ascii
      appearance: "light", // iOS only,  light (default) | dark
      secure: false, // iOS only,  default false, disables things like Emoji and Predicive text entry
      autocorrectionEnabled: false, // on iOS this hides the 'predictive text' bar
      scrollToBottomAfterMessengerShows: true,
      autoscrollElement: document.getElementById("messages"), // default unset
      keepOpenAfterSubmit: true, // default false
      animated: true,
      text: "This has been prefilled",
      placeholder: 'Type your message..',
      placeholderColor: "#DDDDDD",
      textViewBackgroundColor: "#F6F6F6",
      backgroundColor: "#F6F6F6",
      textViewBorderColor: "#777777", // iOS only
      maxChars: 140, // setting this > 0 will make the counter show up on iOS (and ignore input on Android, for now)
      counterStyle: 'countdownreversed', // iOS only currently, note that 'none' still shows a counter in case maxChars is set
      textColor: '#555555',
      // this button is best suited for picking media (camera / cameraroll / last image) from an actionsheet
      leftButton: {
        type: 'ionicon', // or 'text' (Android only currently) or 'fontawesome'
        value: '\uf48a', // http://ionicons.com/ - right-click and inspect the :before value (don't forget the \uf !)
        //color: '#ff0000', // default blue on iOS, grey on Android
        textStyle: 'normal', // if type is 'text', you can set this to 'normal' (default), 'bold', 'italic'
        disabledWhenTextEntered: false, // default false
        onPress: function () {
          console.log("Left button was pressed - text was passed to 'onSubmit' if provided.");
        }
      },
      rightButton: {
        type: 'text', // or 'fontawesome' or 'ionicon', default 'text'
        value: 'Send', // 'fa-battery-quarter', // '\uf2c3', // 'Send', // default 'Send'
        textStyle: 'bold', // 'normal' (default), 'bold', 'italic'
        //color: '#FF0000', // default iOS blue
        onPress: function () {
          console.log("Right button was pressed - text was passed to 'onSubmit' if provided.");
        }
      }
    };

    this.nativeKeyboard.showMessenger(this.messengerOptions);

  }

  ionViewWillLeave() {
    this.nativeKeyboard.hideMessenger(this.messengerOptions);
  }
}
