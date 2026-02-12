
// Add React import to fix the missing namespace error for React.ElementType.
import React from 'react';

export type AdminRole = 'System Admin' | 'Head Coach' | 'Finance Manager';

export interface StatItem {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon: React.ElementType;
  color: string;
  subtext?: string;
}

export interface Match {
  id: string;
  teams: string;
  date: string;
  score: string;
  status: 'upcoming' | 'completed';
  color: string;
}

export interface TrainingSession {
  id: string;
  title: string;
  group: string;
  time: string;
  location: string;
  tag?: string;
  tagColor?: string;
  status: 'today' | 'tomorrow' | 'upcoming';
}

export interface TopPerformer {
  id: string;
  name: string;
  position: string;
  team: string;
  rating: number;
  stats: string;
  initials: string;
}

export interface Player {
  id: string;
  name: string;
  age: number;
  position: string;
  team: string;
  performance: number;
  status: 'Active' | 'Injured' | 'Away';
  goals: number;
  photoUrl?: string;
}
