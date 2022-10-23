import Link from "next/link";
import Image from "next/image";
import { FadeContainer, popUp } from "../content/FramerMotionVariant";
import { navigationRoutes } from "../utils/utils";
import { motion } from "framer-motion";
import { SiSpotify } from "react-icons/si";
import { HiOutlineQrcode } from "react-icons/hi";
import useSWR from "swr"; // not installed yet

// Not create yet
import fetcher from "../lib/fetcher";
import socialMedia from "../content/socialMedia";

export default function Footer({ setShowQR, showQR }) {
    const { data: currentSong } = useSWR("/api/now-playing", fetcher);
}