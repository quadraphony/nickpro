import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconPhone, IconMail, IconClock, IconMapPin, IconSend, IconBrandWhatsapp } from "@tabler/icons-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.message) return;

    const msg = `Hi, I'm ${formData.name}. I'm interested in: ${formData.service}. ${formData.message}. Email: ${formData.email}${formData.phone ? `. Phone: ${formData.phone}` : ""}.`;
    const url = `https://wa.me/27621987570?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <IconPhone className="h-5 w-5" />,
      title: "Phone",
      details: ["+27 62 198 7570"],
      href: "tel:+27621987570",
    },
    {
      icon: <IconMail className="h-5 w-5" />,
      title: "Email",
      details: ["Nickmabhuku1988@gmail.com"],
      href: "mailto:Nickmabhuku1988@gmail.com",
    },
    {
      icon: <IconBrandWhatsapp className="h-5 w-5" />,
      title: "WhatsApp",
      details: ["Chat with us instantly"],
      href: "https://wa.me/27621987570",
    },
    {
      icon: <IconClock className="h-5 w-5" />,
      title: "Business Hours",
      details: ["Mon – Sat, all day", "Free quotes anytime"],
      href: null,
    },
    {
      icon: <IconMapPin className="h-5 w-5" />,
      title: "Service Area",
      details: ["All areas in Cape Town", "Northern & Southern Suburbs", "Atlantic Seaboard & City Bowl"],
      href: null,
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Transform <span className="text-gradient">Your Home?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch today for a free consultation and no-obligation quote
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all group"
                  >
                    <div className="text-primary mt-0.5 group-hover:scale-110 transition-transform">{info.icon}</div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{info.title}</p>
                      {info.details.map((d, i) => (
                        <p key={i} className="text-muted-foreground text-sm">{d}</p>
                      ))}
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-card border border-border">
                    <div className="text-primary mt-0.5">{info.icon}</div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{info.title}</p>
                      {info.details.map((d, i) => (
                        <p key={i} className="text-muted-foreground text-sm">{d}</p>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, hsl(229 60% 35%), hsl(0 82% 54%))" }} />
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Request a Free Quote</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                      <IconBrandWhatsapp className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">WhatsApp Opened!</h4>
                    <p className="text-muted-foreground text-sm">Your message is ready to send. We'll get back to you very soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
                          placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                          className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
                          placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
                          placeholder="e.g. 062 123 4567" />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">Service Needed *</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} required
                          className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm">
                          <option value="">Select a service</option>
                          <option value="Tiling">Tiling</option>
                          <option value="Ceiling">Ceiling</option>
                          <option value="Painting">Painting</option>
                          <option value="Flooring">Flooring</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                        className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm resize-none"
                        placeholder="Tell us about your project..." />
                    </div>

                    <button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.service || !formData.message}
                      className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      style={{ background: "linear-gradient(135deg, hsl(229 60% 35%), hsl(245 60% 40%))" }}
                    >
                      <IconSend className="h-5 w-5" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
