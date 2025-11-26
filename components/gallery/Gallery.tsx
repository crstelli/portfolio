import type { ReactNode } from "react";

import { Provider } from "./Provider";
import { Image } from "./Image";

interface GalleryProps {
  children: ReactNode;
}

function Gallery({ children }: GalleryProps) {
  return (
    <Provider>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mt-15">
        {children}
      </div>
    </Provider>
  );
}

Gallery.Image = Image;

export { Gallery };
