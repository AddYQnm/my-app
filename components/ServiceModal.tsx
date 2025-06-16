"use client";

import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

type ServiceModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  visual?: React.ReactNode; // Ajout du visuel dynamique
};

export default function ServiceModal({ open, onClose, title, content, visual }: ServiceModalProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative max-w-3xl w-full rounded-3xl bg-[#0a0a23] text-white p-8 shadow-2xl border border-[#1a1a40]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>

          <Dialog.Title className="text-3xl font-bold mb-6 text-center">{title}</Dialog.Title>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="w-full md:w-1/2 flex justify-center">
              {visual}
            </div>
            <div className="w-full md:w-1/2 text-base leading-relaxed text-gray-300">
              {content}
              <ul className="mt-4 list-disc list-inside text-sm space-y-1">
                <li>Infrastructure Sécurisée</li>
                <li>Protection des Données</li>
                <li>Formation des Équipes</li>
                <li>Surveillance Proactive</li>
              </ul>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
