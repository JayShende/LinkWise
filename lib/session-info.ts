// SessionInfo.ts
import { auth } from "@/auth";

const SessionInfo = async () => {
  const session = await auth();
  return !!session?.user?.id; // true if logged in, false otherwise
};

export default SessionInfo;
