import Image from "next/image";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "@content/FramerMotionVariant";
import { homeProfileImage } from "@utils/utils"; // not created yet
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Ripples from "react-ripples";
import Metadata from "@components/MetaData";
import pageMeta from "@content/meta";

export default function Home() {
  return (
    <>
      <Metadata
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />
    </>
  );
}