import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />
          <p className="nav-logo">
            <span className="text-primary">U</span>Price
          </p>
        </Link>
        
      </nav>
    </header>
  );
}
