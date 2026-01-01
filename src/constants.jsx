import React from 'react';
import { ChangeOrderStatus } from './types';

export const INITIAL_CHANGE_ORDERS = [
  {
    id: '1',
    coNumber: 'CO-001',
    title: 'Foundation Slab Reinforcement',
    status: ChangeOrderStatus.APPROVED,
    requestedBy: 'Structural Lead',
    cost: 45000,
    scheduleImpact: 4,
    scope: 'Additional rebar required due to soil condition variations discovered on site.',
    date: '2023-10-12'
  },
  {
    id: '2',
    coNumber: 'CO-002',
    title: 'Electrical Sub-panel Relocation',
    status: ChangeOrderStatus.PENDING,
    requestedBy: 'Site Manager',
    cost: 12500,
    scheduleImpact: 2,
    scope: 'Moving panel A1 to avoid interference with HVAC ducting main line.',
    date: '2023-11-05'
  },
  {
    id: '3',
    coNumber: 'CO-003',
    title: 'HVAC Unit Upgrade (Efficiency)',
    status: ChangeOrderStatus.APPROVED,
    requestedBy: 'Project Owner',
    cost: 105000,
    scheduleImpact: 0,
    scope: 'Upgrade to SEER 20 units as requested by owner for LEED certification.',
    date: '2023-11-20'
  },
  {
    id: '4',
    coNumber: 'CO-004',
    title: 'Exterior Cladding Color Change',
    status: ChangeOrderStatus.PENDING,
    requestedBy: 'Architect',
    cost: 8000,
    scheduleImpact: 0,
    scope: 'Change from Slate Gray to Midnight Blue for phase 2 blocks.',
    date: '2024-01-15'
  }
];

export const ICONS = {
  Overview: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
  ),
  ChangeOrders: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22v-7l-2 2h-1"/><path d="M12 22v-7l2 2h1"/><path d="M18 13V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7"/><circle cx="18" cy="18" r="3"/><path d="M18 20v2"/><path d="M18 14v2"/></svg>
  ),
  Approvals: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  ),
  Settings: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  Plus: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  FileText: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14.5 2 14.5 7.5 20 7.5"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/><line x1="8" y1="9" x2="10" y2="9"/></svg>
  )
};

