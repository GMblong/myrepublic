
import React from 'react';
import { WiFiPackage, AdvantageItem, RequirementItem } from './types';
import { Zap, Infinity, ShieldCheck, Headphones, CreditCard, MapPin, MessageSquare, Mail, Globe, CloudLightning, Shield, DollarSign, Activity, Gamepad2, Star, CheckCircle2, ClipboardCheck, UserCheck, Wrench, Camera, Lightbulb, Home, PhoneCall, PackageSearch } from 'lucide-react';

export const WHATSAPP_NUMBER = '6282228352830';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export interface ExtendedPackage extends WiFiPackage {
  originalSpeed?: number;
  promoBadge?: string;
  hasVidio?: boolean;
  isRecommend?: boolean;
  isGamer?: boolean;
}

export const getRegistrationWhatsAppLink = (packageName: string = "") => {
  const text = `Halo Admin MyRepublic! Saya ingin DAFTAR BERLANGGANAN.

Mohon bantu proses pendaftaran saya dengan data berikut:

- Pilihan Paket: ${packageName || '................'}
- Nama Lengkap: 
- Alamat Lengkap: 
- No HP (WA & Telp): 
- Email Aktif: 

(Saya akan melampirkan Foto KTP, Foto Meteran Listrik, dan Foto Rumah setelah pesan ini terkirim).

Terima kasih!`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
};

export const getAreaCheckWhatsAppLink = () => {
  const text = `Halo Admin MyRepublic! Saya ingin cek ketersediaan layanan di lokasi saya. 

Berikut data alamat saya:
Nama: 
Alamat Lengkap: 
Kelurahan: 
Kecamatan: 
Kota: 

Mohon dibantu pengecekannya. Terima kasih.`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
};

export const PACKAGES: ExtendedPackage[] = [
  { id: 'jet', name: 'JET', speed: 20, price: 205350, benefits: ['Internet Only', 'Flat 12 Bulan', 'PPN Included'] },
  { id: 'neo', name: 'NEO', speed: 100, price: 233100, isRecommend: true, benefits: ['Internet Only', 'Flat 12 Bulan', 'PPN Included'] },
  { id: 'velo', name: 'VELO', speed: 150, price: 277500, benefits: ['Internet Only', 'Flat 12 Bulan', 'PPN Included'] },
  { id: 'nexus', name: 'NEXUS', speed: 300, price: 333000, benefits: ['Internet Only', 'Flat 12 Bulan', 'PPN Included'] },
  { id: 'gamer250', name: 'GAMER', speed: 250, price: 444000, isGamer: true, benefits: ['Gaming Optimized', 'IP Public Static', 'PPN Included'] },
  { id: 'prime', name: 'PRIME', speed: 500, price: 555000, hasVidio: true, benefits: ['Free Vidio Platinum', 'Flat 12 Bulan', 'PPN Included'] },
  { id: 'gamer500', name: 'GAMER', speed: 500, price: 610500, isGamer: true, benefits: ['Gaming Optimized', 'IP Public Static', 'PPN Included'] },
  { id: 'wonder', name: 'WONDER', speed: 750, price: 721500, hasVidio: true, benefits: ['Free Vidio Platinum', 'Flat 12 Bulan', 'PPN Included'] },
  { id: 'gamer750', name: 'GAMER', speed: 750, price: 777000, isGamer: true, benefits: ['Gaming Optimized', 'IP Public Static', 'PPN Included'] },
  { id: 'ultra', name: 'ULTRA', speed: 1000, price: 943500, hasVidio: true, benefits: ['Free Vidio Platinum', 'Flat 12 Bulan', 'PPN Included'] },
  { id: 'gamer1gb', name: 'GAMER', speed: 1000, price: 999000, isGamer: true, benefits: ['Gaming Optimized', 'IP Public Static', 'PPN Included'] },
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    id: 'simetris',
    title: 'Internet Simetris 1:1',
    description: 'Kecepatan UPLOAD & DOWNLOAD seimbang untuk performa maksimal.',
    icon: <Activity className="w-8 h-8" />,
  },
  {
    id: 'unlimited',
    title: 'Tanpa Batasan Kuota',
    description: 'Benar-benar UNLIMITED tanpa FUP (Fair Usage Policy).',
    icon: <Infinity className="w-8 h-8" />,
  },
  {
    id: 'fiber',
    title: 'Tahan Cuaca Ekstrim',
    description: 'Teknologi 100% Full Fiber Optic yang stabil di segala kondisi.',
    icon: <CloudLightning className="w-8 h-8" />,
  },
  {
    id: 'affordable',
    title: 'Harga Terjangkau',
    description: 'Harga kompetitif dengan kualitas internet kelas dunia.',
    icon: <DollarSign className="w-8 h-8" />,
  },
  {
    id: 'stable',
    title: 'Internet Stabil',
    description: 'Koneksi handal untuk gaming, streaming, dan kerja tanpa putus.',
    icon: <Shield className="w-8 h-8" />,
  },
];

export const REQUIREMENTS: RequirementItem[] = [
  {
    id: 'ktp',
    title: 'Foto KTP',
    description: 'Foto KTP asli yang masih berlaku untuk verifikasi identitas.',
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    id: 'meteran',
    title: 'Meteran Listrik',
    description: 'Foto meteran listrik rumah untuk validasi titik lokasi pemasangan.',
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    id: 'rumah',
    title: 'Foto Rumah',
    description: 'Foto tampak depan rumah untuk memudahkan teknisi menemukan lokasi.',
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: 'kontak',
    title: 'No HP Aktif',
    description: 'Nomor WhatsApp dan telepon aktif untuk koordinasi instalasi.',
    icon: <PhoneCall className="w-6 h-6" />,
  },
  {
    id: 'email',
    title: 'Email Aktif',
    description: 'Digunakan untuk pengiriman invoice dan informasi akun MyRepublic.',
    icon: <Mail className="w-6 h-6" />,
  },
  {
    id: 'paket',
    title: 'Pilihan Paket',
    description: 'Tentukan paket yang ingin diambil (JET, NEO, VELO, Gamer, dll).',
    icon: <PackageSearch className="w-6 h-6" />,
  },
];

export const STEPS = [
  {
    id: 1,
    title: "Pilih Paket",
    desc: "Pilih paket yang sesuai kebutuhan Anda (Home/Gamer).",
    icon: <ClipboardCheck className="w-10 h-10" />
  },
  {
    id: 2,
    title: "Kirim Data",
    desc: "Kirim foto KTP, Meteran & Alamat ke Sales via WhatsApp.",
    icon: <UserCheck className="w-10 h-10" />
  },
  {
    id: 3,
    title: "Pemasangan",
    desc: "Teknisi datang melakukan instalasi & internet aktif!",
    icon: <Wrench className="w-10 h-10" />
  }
];

export const CITIES = [
  "Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi", 
  "Bandung", "Semarang", "Yogyakarta", "Surabaya", "Malang",
  "Medan", "Palembang", "Lampung", "Bali", "Makassar"
];

export const FAQS = [
  {
    question: "Apakah ada batasan kuota (FUP) di MyRepublic?",
    answer: "Tidak ada. MyRepublic memberikan internet Truly Unlimited tanpa FUP, sehingga kecepatan Anda tidak akan turun meskipun penggunaan data sangat besar."
  },
  {
    question: "Berapa biaya instalasi untuk pelanggan baru?",
    answer: "Khusus promo pendaftaran online bulan ini, biaya instalasi GRATIS (hemat Rp 500.000). Berlaku untuk semua paket."
  },
  {
    question: "Berapa lama proses pemasangan setelah mendaftar?",
    answer: "Umumnya proses penarikan kabel dan instalasi dilakukan dalam 1-3 hari kerja setelah data diverifikasi, tergantung ketersediaan jadwal teknisi di area Anda."
  },
  {
    question: "Apakah harga di atas sudah termasuk PPN?",
    answer: "Ya, harga yang kami tampilkan di website ini sudah termasuk PPN 11%. Tidak ada biaya tersembunyi."
  }
];

export const TESTIMONIALS = [
  {
    name: "Andi Saputra",
    role: "Content Creator",
    comment: "Pindah ke MyRepublic karena butuh upload kencang. Upload file video 4GB cuma hitungan menit!",
    rating: 5
  },
  {
    name: "Rina Wijaya",
    role: "Working Mom",
    comment: "Anak-anak sekolah online lancar, saya meeting zoom juga aman. Wifi paling stabil yang pernah saya pakai.",
    rating: 5
  },
  {
    name: "Kevin Sanjaya",
    role: "Pro Gamer",
    comment: "Paket Gamer-nya juara! Ping di Valorant stabil banget. MyRepublic emang provider paling ngerti gamer.",
    rating: 5
  }
];

import heroIcon from '@assets/images/hero-icon.png';

export const ROCKET_LOGO = (
  <img src={heroIcon} alt="Hero Icon" className="w-10 h-10" />
);
