import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Lucas Ferrari",
    user_email: "lucasfcorrea2206@gmail.com"
  });
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag("cart_items_count", itemsCount)
}
