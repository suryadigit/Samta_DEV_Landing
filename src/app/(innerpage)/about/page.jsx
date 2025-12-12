import About4 from "@/app/Components/About/About4";
import Choose1 from "@/app/Components/Choose/Choose1";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Faq1 from "@/app/Components/Faq/Faq1";
import HowWork from "@/app/Components/HowWork/HowWork";
import Testimonial from "@/app/Components/Testimonial/Testimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="About Us"
      ></BreadCumb>
      <About4
        img1="/assets/images/about/aboutThumb1_1.png"
        img2="/assets/images/about/aboutThumb1_2.png"
        subtitle="Tentang Samta Dev"
        title="Kami Membangun Solusi Digital yang Cepat, Aman, dan Berkualitas"
        content="Samta Dev adalah tim pengembang yang berpengalaman dalam membangun website, aplikasi mobile, dan sistem custom untuk berbagai kebutuhan bisnis. Kami fokus pada kualitas, performa, dan hasil akhir yang memberikan dampak nyata."
        FeatureList={[
          "Teknologi modern & standar industri terbaru.",
          "Dukungan dan maintenance yang cepat & responsif.",
          "Solusi custom yang disesuaikan dengan kebutuhan bisnis Anda.",
        ]}
        btnname="Pelajari Lebih Lanjut"
        btnurl="/about"
      />
      <Choose1
        subtitle="Kenapa Memilih Kami?"
        title="Layanan Profesional untuk Kebutuhan Digital Anda"
        content="Samta Dev memberikan solusi digital yang dirancang untuk membantu bisnis Anda berkembang. Mulai dari desain modern, performa cepat, keamanan tinggi, hingga dukungan jangka panjang."
        FeatureList={["Desain Profesional & Mobile-Friendly", "Optimasi SEO"]}
        FeatureList2={[
          "Keamanan Sistem Terjamin",
          "Akses Cloud & Teknologi Modern",
        ]}
        btnname="Lihat Portfolio"
        btnurl="/portfolio"
      />
      <HowWork></HowWork>
      <Faq1></Faq1>
      <Testimonial></Testimonial>
    </div>
  );
};

export default page;
