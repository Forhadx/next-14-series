import refreshHandler from "@/lib/revalidateFn";
import React from "react";

export default function RefreshBtn() {
  return <button onClick={refreshHandler}>refresh</button>;
}
