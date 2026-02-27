// Items #2 (centralized contact), #27 (privacy/terms links), #28 (social links)
import Link from "next/link";
import Container from "./Container";
import { SITE_CONFIG } from "@/lib/site-config";

const topNYCities = [
  { name: "Manhattan", slug: "manhattan" },
  { name: "Brooklyn", slug: "brooklyn" },
  { name: "Queens", slug: "queens" },
  { name: "Bronx", slug: "bronx" },
  { name: "Staten Island", slug: "staten-island" },
  { name: "Yonkers", slug: "yonkers" },
  { name: "White Plains", slug: "white-plains" },
  { name: "Hempstead", slug: "hempstead" },
];

const topNJCities = [
  { name: "Newark", slug: "newark" },
  { name: "Jersey City", slug: "jersey-city" },
  { name: "Hoboken", slug: "hoboken" },
  { name: "Paterson", slug: "paterson" },
  { name: "Elizabeth", slug: "elizabeth" },
  { name: "Edison", slug: "edison" },
  { name: "Cherry Hill", slug: "cherry-hill" },
  { name: "Princeton", slug: "princeton" },
];

const serviceLinks = [
  { name: "Cabinet Assembly", slug: "ikea-cabinet-assembly" },
  { name: "Countertop Installation", slug: "countertop-installation" },
  { name: "Appliance Installation", slug: "appliance-installation" },
  { name: "Kitchen Removal", slug: "kitchen-removal" },
  { name: "Splashback Installation", slug: "splashback-installation" },
  { name: "Bulkhead Construction", slug: "bulkhead-construction" },
  { name: "Packaging & Cleanup", slug: "packaging-cleanup" },
];

export default function Footer() {
  return (
    <footer className="bg-navy py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & description */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow font-jakarta text-lg font-bold text-navy">
                K
              </div>
              <span className="font-jakarta text-lg font-bold text-white">
                Kitchen Installers
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Professional IKEA kitchen cabinet installation services in New York
              and New Jersey. Quality craftsmanship, transparent pricing, and
              exceptional results.
            </p>
            {/* Item #2: Centralized contact info */}
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="break-all transition-colors hover:text-yellow"
              >
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="transition-colors hover:text-yellow"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>

            {/* Directory links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.yelp}
                target="_blank"
                rel="noopener nofollow"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-yellow hover:text-navy"
                aria-label="Yelp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158zm2.084 15.9505a1.1053 1.1053 0 0 0-1.2306-.4145 1.1398 1.1398 0 0 0-.1526.0633 1.4806 1.4806 0 0 0-.2171.1354c-.1992.1475-.3668.3392-.5196.5315-.0386.049-.074.1143-.12.1562l-.7686 1.0573a113.9168 113.9168 0 0 0-1.2913 1.789c-.278.3895-.5184.7184-.7083 1.0094-.036.0547-.0734.116-.1075.1647-.2277.3522-.3566.6092-.4228.8381a1.0945 1.0945 0 0 0-.046.4721c.0211.1655.0768.3246.1635.467.046.0715.0957.1406.1487.207a2.334 2.334 0 0 0 .1754.1825 1.843 1.843 0 0 0 .2108.1732c.5304.369 1.1112.6342 1.722.8391a6.0958 6.0958 0 0 0 1.5716.3004c.091.0046.1821.0025.2728-.006a2.3878 2.3878 0 0 0 .2506-.0351 2.3862 2.3862 0 0 0 .2447-.071 1.1927 1.1927 0 0 0 .4175-.2658c.1127-.113.1994-.249.2541-.3989.0889-.2214.1473-.5026.1857-.92.0034-.0593.0118-.1305.0177-.1958.0304-.3463.0443-.7531.0666-1.2315.0375-.7357.067-1.4681.0903-2.2026 0 0 .0495-1.3053.0494-1.306.0113-.3008.002-.6342-.0814-.9336a1.396 1.396 0 0 0-.1756-.4054zm8.6754 2.0439c-.1605-.176-.3878-.3514-.7462-.5682-.0518-.0288-.1124-.0674-.1684-.1009-.2985-.1795-.658-.3684-1.078-.5965a120.7615 120.7615 0 0 0-1.9427-1.042l-1.1515-.6107c-.0597-.0175-.1203-.0607-.1766-.0878-.2212-.1058-.4558-.2045-.6992-.2498a1.4915 1.4915 0 0 0-.2545-.0265 1.1527 1.1527 0 0 0-.1648.01 1.1077 1.1077 0 0 0-.9227.9133 1.4186 1.4186 0 0 0 .0159.439c.0563.3065.1932.6096.3346.875l.615 1.1526c.3422.65.6884 1.2963 1.0435 1.9406.229.4202.4196.7799.5982 1.078.0338.056.0721.1163.1011.1682.2173.3584.392.584.569.7458.1146.1107.252.195.4026.247.1583.0525.326.071.4919.0546a2.368 2.368 0 0 0 .251-.0435c.0817-.022.1622-.048.241-.0784a1.863 1.863 0 0 0 .2475-.1143 6.1018 6.1018 0 0 0 1.2818-.9597c.4596-.4522.8659-.9454 1.182-1.51.044-.08.0819-.163.1138-.2483a2.49 2.49 0 0 0 .0773-.2411c.0186-.083.033-.1669.0429-.2513a1.188 1.188 0 0 0-.0565-.491 1.0933 1.0933 0 0 0-.248-.4041z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.thumbtack}
                target="_blank"
                rel="noopener nofollow"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-yellow hover:text-navy"
                aria-label="Thumbtack"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.18 6.38h11.69v2.68H6.17zm7.27 3.8v3.14c0 3.23-.02 3.74-.14 4.36a7.95 7.95 0 0 1-1.3 2.87c-.03 0-.78-1.35-.9-1.62-.17-.4-.3-.8-.4-1.25l-.09-.41-.02-5.78.16-.2a3.3 3.3 0 0 1 2.44-1.1zM12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-jakarta text-sm font-bold uppercase tracking-wider text-white/40">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              {serviceLinks.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-yellow"
                >
                  {s.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* New York */}
          <div>
            <h4 className="mb-4 font-jakarta text-sm font-bold uppercase tracking-wider text-white/40">
              New York
            </h4>
            <nav className="flex flex-col gap-2">
              {topNYCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/new-york/${c.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-yellow"
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/areas/new-york"
                className="text-sm font-medium text-yellow/80 transition-colors hover:text-yellow"
              >
                View all NY areas →
              </Link>
            </nav>
          </div>

          {/* New Jersey */}
          <div>
            <h4 className="mb-4 font-jakarta text-sm font-bold uppercase tracking-wider text-white/40">
              New Jersey
            </h4>
            <nav className="flex flex-col gap-2">
              {topNJCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/new-jersey/${c.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-yellow"
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/areas/new-jersey"
                className="text-sm font-medium text-yellow/80 transition-colors hover:text-yellow"
              >
                View all NJ areas →
              </Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-jakarta text-sm font-bold uppercase tracking-wider text-white/40">
              Company
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-white/70 transition-colors hover:text-yellow">
                About Us
              </Link>
              <Link href="/blog" className="text-sm text-white/70 transition-colors hover:text-yellow">
                Blog
              </Link>
              <Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-yellow">
                Contact
              </Link>
              <Link href="/gallery" className="text-sm text-white/70 transition-colors hover:text-yellow">
                Gallery
              </Link>
              <Link href="/cost-calculator" className="text-sm text-white/70 transition-colors hover:text-yellow">
                Cost Calculator
              </Link>
              <Link href="/faq" className="text-sm text-white/70 transition-colors hover:text-yellow">
                FAQ
              </Link>
              <Link href="/areas" className="text-sm text-white/70 transition-colors hover:text-yellow">
                All Service Areas
              </Link>
              <Link href="/services" className="text-sm text-white/70 transition-colors hover:text-yellow">
                All Services
              </Link>
            </nav>
          </div>
        </div>

        {/* Item #27: Privacy/Terms links + copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
            <Link href="/privacy" className="transition-colors hover:text-white/70">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="transition-colors hover:text-white/70">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="/faq" className="transition-colors hover:text-white/70">
              FAQ
            </Link>
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Kitchen Installers. All rights
            reserved. Kitchen Installers is an independent installation service.
            Not affiliated with, endorsed by, or sponsored by Inter IKEA Systems B.V. or its related entities.
          </p>
        </div>
      </Container>
    </footer>
  );
}
