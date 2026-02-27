"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload, X, FileText } from "lucide-react";

const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export default function FileUpload({
  file,
  onFileChange,
}: {
  file: File | null;
  onFileChange: (file: File | null) => void;
}) {
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function validate(f: File): boolean {
    setError("");
    if (f.size > MAX_SIZE) {
      setError("File must be under 10 MB.");
      return false;
    }
    return true;
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f && validate(f)) onFileChange(f);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f && validate(f)) onFileChange(f);
    // Reset so the same file can be re-selected
    e.target.value = "";
  }

  if (file) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-blue/30 bg-blue/5 px-4 py-3">
        <FileText size={20} className="flex-shrink-0 text-blue" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-navy">{file.name}</p>
          <p className="text-xs text-muted">
            {(file.size / 1024 / 1024).toFixed(1)} MB
          </p>
        </div>
        <button
          type="button"
          onClick={() => onFileChange(null)}
          className="flex-shrink-0 rounded-full p-1 text-muted transition-colors hover:bg-red-50 hover:text-red-500"
          aria-label="Remove file"
        >
          <X size={16} />
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
          dragOver
            ? "border-blue bg-blue/5"
            : "border-gray-light hover:border-blue/40"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="*/*"
          onChange={handleChange}
          className="hidden"
        />
        <div className="text-center">
          <Upload
            size={24}
            className={`mx-auto mb-2 ${dragOver ? "text-blue" : "text-muted/40"}`}
          />
          <p className="text-sm text-muted">
            Drag & drop your file here, or{" "}
            <span className="font-medium text-blue">browse</span>
          </p>
          <p className="mt-1 text-xs text-muted/60">Up to 10 MB</p>
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
