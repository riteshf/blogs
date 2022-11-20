import IconCherry from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/cherry.tsx";
import Container from "../layout/Container.tsx";

import { site } from "../site.ts";

const Header = () => {
  return (
    <header class="bg-yellow-200 relative max-h-16">
      <Container>
        <div class="h-16 flex items-center">
          <div class="pr-4 max-w-screen-md">
            <a
              href="/"
              class=" flex gap-2 text-2xl font-bold hover:text-underline"
            >
              <IconCherry width="32px" height="32px" />
              {site.title}
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
