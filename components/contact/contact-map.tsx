import { contactMapEmbedUrl } from "@/lib/content/contact";

export default function ContactMap() {
  return (
    <section className="my-8 px-4 md:px-[10%]">
      <iframe
        src={contactMapEmbedUrl}
        className="h-[400px] w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="svis map"
      />
    </section>
  );
}
