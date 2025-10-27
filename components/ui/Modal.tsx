"use client";

import React, { useEffect } from "react";
import { ModalProps } from "@/types";

export function SuccessModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div>
      <h2>Title</h2>
      <p>Descriptions</p>
      <button onClick={onClose}></button>
    </div>
  );
}

export function ErrorModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div>
      <h2>Title</h2>
      <p>Descriptions</p>
      <button onClick={onClose}></button>
    </div>
  );
}
