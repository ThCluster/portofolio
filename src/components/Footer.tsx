import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";
import GyeNyame from "./GyeNyame";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-8">
      <div className="container-page flex items-center justify-between gap-4 text-sm text-neutral-500">
        <div className="flex items-center gap-3">
          <GyeNyame className="h-7 w-7 text-neutral-900" />
          <div>
            <p className="text-neutral-700">
              © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
            </p>
            <p className="text-xs" title="Symbole Adinkra : « Sauf Dieu »">
              Gye Nyame — symbole Adinkra de force
            </p>
          </div>
        </div>
        <a href="#home" className="btn-icon !h-9 !w-9" aria-label="Retour en haut">
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
