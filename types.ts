
import React from 'react';

export interface WiFiPackage {
  id: string;
  name: string;
  speed: number;
  price: number;
  benefits: string[];
  isPopular?: boolean;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RequirementItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}