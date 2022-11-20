import IconCherry from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/cherry.tsx";
import Container from "../layout/Container.tsx";
import { settings, site } from "../site.ts";

const Footer = () => {
  return (
    <footer class="w-full pt-10 pb-4 bg-yellow-200">
      <Container>
        <div class="text-center">
          <p>
            &copy; {site.year} {site.copyrightName} •{" "}
            <a class="hover:text-underline" href={site.viewSourceUrl}>
              View Source
            </a>
          </p>
        </div>
        {settings.showBy && (
          <div class="text-center pt-4 flex gap-2 items-center justify-center">
            Site by :
            <a
              class=" flex gap-2 hover:text-underline"
              href={site.developerUrl}
              target="_blank"
              rel="noopener"
            >
              <IconCherry />
              {site.developerName}
            </a>
          </div>
        )}
      </Container>
    </footer>
  );
};

export default Footer;
