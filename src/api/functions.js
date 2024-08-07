import React from "react";
import { Share } from "react-native";

export const onShare = async (text) => {
  try {
    const result = await Share.share(
      {
        message: text,
      },
      {
        dialogTitle: "Binary Talk",
      }
    );
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};
