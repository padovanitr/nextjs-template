import "./globals.css";

import { ChildrenProps } from "lib/utils/type";
import { Providers } from "./Providers";
import { getServerSession } from "next-auth/next";
import SessionProvider from "app/components/Auth/SessionProvider";

export default async function RootLayout({ children }: ChildrenProps) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
