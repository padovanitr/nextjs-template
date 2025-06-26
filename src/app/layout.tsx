import './globals.css';

import { ChildrenProps } from '@/lib/utils/type';
import { Providers } from './Providers';

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
