import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule, FirebaseAppConfig, AuthProviders, AuthMethods } from 'angularfire2';

import { MyApp } from './app.component';
import { CustomLoggedHeaderComponent } from './../components/custom-logged-header/custom-logged-header.component';
import { MessageBoxComponent } from './../components/message-box/message-box.component';
import { ProgressBarComponent } from './../components/progress-bar/progress-bar.component';
import { UserInfoComponent } from './../components/user-info/user-info.component';
import { UserMenuComponent } from './../components/user-menu/user-menu.component';

import { AuthService } from './../providers/auth.service';
import { ChatService } from './../providers/chat.service';
import { MessageService } from './../providers/message.service';
import { UserService } from './../providers/user.service';

import { CapitalizePipe } from './../pipes/capitalize.pipe';

import { HomePage } from '../pages/home/home';
import { SigninPage } from './../pages/signin/signin';
import { SignupPage } from './../pages/signup/signup';
import { ChatPage } from './../pages/chat/chat';
import { UserProfilePage } from './../pages/user-profile/user-profile';
import { AboutPage } from './../pages/about/about';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBGKIWvO8YySw4sWlSgv7v5xHY1n9h5qSQ",
  authDomain: "ionic2-firebase-chat-b0c65.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-b0c65.firebaseio.com",
  storageBucket: "ionic2-firebase-chat-b0c65.appspot.com",
  messagingSenderId: "968689869506"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    CapitalizePipe,
    CustomLoggedHeaderComponent,
    MyApp,
    HomePage,
    MessageBoxComponent,
    ProgressBarComponent,
    SigninPage,
    SignupPage,
    UserInfoComponent,
    UserMenuComponent,
    ChatPage,
    UserProfilePage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ChatPage,
    UserProfilePage,
    AboutPage
  ],
  providers: [
    AuthService,
    ChatService,
    MessageService,
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
