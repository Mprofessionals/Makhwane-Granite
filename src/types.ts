export type StoneCategory = 
  | 'all'
  | 'executive-double'
  | 'modern-sculpted'
  | 'single-memorial'
  | 'traditional-ledger'
  | 'granite-countertops';

export type StoneFinish = 
  | 'Zimbabwe Absolute Black'
  | 'Rustenburg African Impala'
  | 'African Red Granite'
  | 'Blue Pearl Granite'
  | 'Kashmir White Granite';

export interface TombstoneProduct {
  id: string;
  code: string;
  name: string;
  category: StoneCategory;
  headline: string;
  description: string;
  image: string;
  priceZAR: number;
  laybyDeposit: number;
  monthlyFrom: number;
  dimensions: {
    headstone: string;
    base: string;
    ledger?: string;
    kerbing?: string;
  };
  features: string[];
  recommendedStone: StoneFinish;
  popular?: boolean;
}

export interface InscriptionCustomizerState {
  stoneFinish: StoneFinish;
  shape: 'arched' | 'winged' | 'cathedral' | 'double-arch' | 'book';
  letteringFinish: '24k-gold' | 'silver' | 'pure-white' | 'natural-carved';
  headerText: string;
  fullName: string;
  sunriseDate: string;
  sunsetDate: string;
  tributeMessage: string;
  familyWords: string;
  emblem: 'cross' | 'dove' | 'angel' | 'praying-hands' | 'leopard' | 'flower' | 'none';
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email?: string;
  cemeteryLocation: string;
  selectedProductId?: string;
  customStoneFinish: StoneFinish;
  estimatedDate?: string;
  notes?: string;
  laybyInterest: boolean;
}
