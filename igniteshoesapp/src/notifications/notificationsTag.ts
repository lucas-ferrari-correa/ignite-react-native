import { OneSignal } from "react-native-onesignal";

export function tagUserEmailCreate(email: string) {
  OneSignal.User.addTag('user_email', email);
}

export function tagUserEmailRemove() {
  OneSignal.User.removeTag('user_email');
}

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Lucas Ferrari",
    user_email: "lucasfcorrea2206@gmail.com"
  });
}
