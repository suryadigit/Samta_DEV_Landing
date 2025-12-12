import Link from "next/link";
import DropDown from "./DropDown";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>
      <li>
        <Link href="/team" onClick={() => setMobileToggle(false)}>
          Our Team
        </Link>
      </li>
      <li>
        <Link href="/pricing" onClick={() => setMobileToggle(false)}>
          Pricing
        </Link>
      </li>
      <li>
        <Link href="/project" onClick={() => setMobileToggle(false)}>
          Project
        </Link>
      </li>
      <li>
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
