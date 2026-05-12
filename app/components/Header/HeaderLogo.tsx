import { HeaderLogoProps } from "@/app/props";
import Image from "next/image";


export const HeaderLogo = ({ scrolled, onNav }: HeaderLogoProps) => (
  <button
    onClick={() => onNav('#inicio')}
    className="flex flex-col items-start cursor-pointer"
    style={{ background: 'none', border: 'none' }}
  >
    <Image
      src={scrolled ? '/logo_transparente_negro.png' : '/logo_transparente_blanco.png'}
      alt="Innovarq Logo"
      width={150}
      height={50}
    />
  </button>
);
