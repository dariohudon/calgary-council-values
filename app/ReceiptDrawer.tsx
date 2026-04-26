"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export type ReceiptEntry = {
  resolution: string;
  date: string;
  vote: string;
  domain: string;
  direction: string;
  alignmentLabel: string;
  confidence: string;
  voteType: string;
  notes: string;
};

type Props = {
  councillorName: string;
  reviewedVotesMatched: number;
  receipts: ReceiptEntry[];
  onClose: () => void;
};

const DOMAIN_STYLES: Record<string, string> = {
  Economy: "bg-blue-500/15 text-blue-300",
  Community: "bg-purple-500/15 text-purple-300",
  "Natural Environment": "bg-emerald-500/15 text-emerald-300",
  "Resource Use": "bg-cyan-500/15 text-cyan-300",
  Wellness: "bg-rose-500/15 text-rose-300",
  Governance: "bg-amber-500/15 text-amber-300",
  Education: "bg-indigo-500/15 text-indigo-300",
};

function domainStyle(domain: string): string {
  return DOMAIN_STYLES[domain] ?? "bg-white/10 text-slate-300";
}

function confidenceStyle(confidence: string): string {
  if (confidence === "High") return "text-emerald-500";
  if (confidence === "Medium") return "text-amber-500";
  if (confidence === "Low") return "text-slate-500";
  return "text-slate-600";
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const parts = dateStr.split("/");
  if (parts.length !== 3) return dateStr;
  const [y, m, d] = parts.map(Number);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

// Used only when the notes field is empty — takes the first readable fragment
// of the resolution text as a fallback summary.
function resolutionExcerpt(resolution: string): string {
  const clean = resolution.replace(/\s+/g, " ").trim();
  if (clean.length <= 160) return clean;
  const cut = clean.slice(0, 160);
  const lastSpace = cut.lastIndexOf(" ");
  return cut.slice(0, lastSpace > 0 ? lastSpace : 160) + "…";
}

export default function ReceiptDrawer({
  councillorName,
  reviewedVotesMatched,
  receipts,
  onClose,
}: Props) {
  // Tracks which receipts have their full motion text expanded.
  // Default is collapsed — motion text is secondary.
  const [motionExpanded, setMotionExpanded] = useState<Set<number>>(new Set());

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function toggleMotion(index: number) {
    setMotionExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label={`Reviewed votes for ${councillorName}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col overflow-hidden border-l border-white/10 bg-[#0a0f1e]">

        {/* Header */}
        <div className="flex-none border-b border-white/10 px-8 py-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
                Reviewed votes
              </p>
              <h2 className="mt-2 text-2xl font-semibold">{councillorName}</h2>
              <p className="mt-1 text-sm text-slate-400">
                {reviewedVotesMatched} reviewed votes from the public voting
                record
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="ml-6 mt-1 flex-none text-slate-400 transition-colors hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable receipt list */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="space-y-4">
            {receipts.map((receipt, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5"
              >

                {/* 1. WHAT THIS VOTE WAS ABOUT
                    Notes from the gold standard review are the plain-language
                    summary. If absent, fall back to a resolution excerpt. */}
                <p className="text-sm font-medium leading-relaxed text-slate-200">
                  {receipt.notes || resolutionExcerpt(receipt.resolution)}
                </p>

                {/* 2. CONTEXT — date, domain, vote type, confidence */}
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  {receipt.date && (
                    <span className="text-xs text-slate-500">
                      {formatDate(receipt.date)}
                    </span>
                  )}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${domainStyle(receipt.domain)}`}
                  >
                    {receipt.domain}
                  </span>
                  {receipt.voteType && (
                    <span className="text-xs text-slate-600">
                      {receipt.voteType}
                    </span>
                  )}
                  {receipt.confidence && (
                    <span className={`text-xs ${confidenceStyle(receipt.confidence)}`}>
                      {receipt.confidence} confidence
                    </span>
                  )}
                </div>

                {/* 3. HOW THE COUNCILLOR VOTED */}
                <div className="mt-4 border-t border-white/[0.06] pt-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">Voted</span>
                      <span className="rounded bg-white/[0.09] px-2.5 py-1 text-sm font-semibold text-slate-100">
                        {receipt.vote}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">
                      {receipt.alignmentLabel}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-600">
                    Reviewed direction: {receipt.direction}
                  </p>
                </div>

                {/* 4. FULL MOTION TEXT — collapsed by default
                    The formal council resolution text is preserved for
                    auditability but does not lead the receipt. */}
                <div className="mt-4 border-t border-white/[0.04] pt-3">
                  <button
                    onClick={() => toggleMotion(i)}
                    className="flex items-center gap-1.5 text-xs text-slate-600 transition-colors hover:text-slate-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className={`transition-transform ${motionExpanded.has(i) ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    {motionExpanded.has(i)
                      ? "Hide motion text"
                      : "View full motion text"}
                  </button>

                  {motionExpanded.has(i) && (
                    <p className="mt-3 text-xs leading-relaxed text-slate-500">
                      {receipt.resolution}
                    </p>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none border-t border-white/10 px-8 py-5">
          <p className="text-xs leading-relaxed text-slate-500">
            Receipts reflect reviewed public voting records. Classification and
            weighting follow the{" "}
            <Link
              href="/methodology"
              className="text-red-400 underline underline-offset-2 hover:text-red-300"
            >
              scoring methodology
            </Link>
            . Scoring model v0.1 — MCDA Weighted Sum Model across 7
            sustainability domains.
          </p>
        </div>
      </div>
    </div>
  );
}
