import { HeaderLogoProps } from "@/app/props";
import Image from "next/image";


export const HeaderLogo = ({ scrolled, onNav }: HeaderLogoProps) => (
  <button
    onClick={() => onNav('#inicio')}
    className="flex flex-col items-start cursor-pointer"
    style={{ background: 'none', border: 'none' }}
  >
    <Image
      src={scrolled ? '/logo_transparente_negro.webp' : '/logo_transparente_blanco.webp'}
      alt="Innovarq Logo"
      width={150}
      height={50}
    />
  </button>
);
