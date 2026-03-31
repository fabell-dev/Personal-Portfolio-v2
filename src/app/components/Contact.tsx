import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MessageSquare,
  User,
  Send,
  MapPin,
  Clock,
  Github,
  Linkedin,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ojeafabian66@gmail.com",
    href: "mailto:ojeafabian66@gmail",
    color: "#8b5cf6",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/fabell-dev",
    href: "https://github.com/fabell-dev",
    color: "#06b6d4",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/fabianbello",
    href: "https://linkedin.com",
    color: "#a855f7",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Disponible remoto – Global",
    href: null,
    color: "#8b5cf6",
  },
  {
    icon: Clock,
    label: "Disponibilidad",
    value: "Lun–Vie, 9AM–6PM",
    href: null,
    color: "#06b6d4",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#080d1a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm uppercase tracking-widest"
            style={{ color: "#8b5cf6" }}
          >
            Contáctame
          </span>
          <h2
            className="mt-2"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#f1f5f9",
            }}
          >
            Trabajemos Juntos
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{ background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
          />
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "#64748b", fontSize: "0.9rem" }}
          >
            ¿Tienes un proyecto en mente? Me encantaría escucharte. Estoy
            disponible para proyectos freelance y oportunidades a tiempo
            completo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div
              className="rounded-2xl p-6 border mb-6"
              style={{
                background: "rgba(13, 20, 40, 0.8)",
                borderColor: "rgba(139, 92, 246, 0.15)",
              }}
            >
              <h3
                className="mb-4"
                style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "1rem" }}
              >
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map(
                  ({ icon: Icon, label, value, href, color }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${color}15` }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div>
                        <div style={{ color: "#475569", fontSize: "0.72rem" }}>
                          {label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors"
                            style={{ color: "#e2e8f0", fontSize: "0.85rem" }}
                          >
                            {value}
                          </a>
                        ) : (
                          <div
                            style={{ color: "#e2e8f0", fontSize: "0.85rem" }}
                          >
                            {value}
                          </div>
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Available badge */}
            <div
              className="rounded-2xl p-5 border flex items-center gap-4"
              style={{
                background: "rgba(16, 185, 129, 0.05)",
                borderColor: "rgba(16, 185, 129, 0.2)",
              }}
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shrink-0" />
              <div>
                <div
                  style={{
                    color: "#10b981",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  Disponible actualmente
                </div>
                <div style={{ color: "#64748b", fontSize: "0.75rem" }}>
                  Tiempo de respuesta: menos de 24h
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-8 border"
              style={{
                background: "rgba(13, 20, 40, 0.8)",
                borderColor: "rgba(139, 92, 246, 0.15)",
              }}
            >
              {sent ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(139, 92, 246, 0.15)" }}
                  >
                    <Send size={28} style={{ color: "#8b5cf6" }} />
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      color: "#f1f5f9",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    ¡Mensaje enviado! ✨
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "0.88rem" }}>
                    Gracias por contactarme. Te responderé en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-5 py-2 rounded-lg text-sm"
                    style={{
                      background: "rgba(139, 92, 246, 0.15)",
                      color: "#8b5cf6",
                      border: "1px solid rgba(139, 92, 246, 0.3)",
                    }}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        className="flex items-center gap-1.5 mb-2"
                        style={{ color: "#94a3b8", fontSize: "0.82rem" }}
                      >
                        <User size={13} />
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 focus:ring-2"
                        style={{
                          background: "rgba(8, 13, 26, 0.8)",
                          border: "1px solid rgba(139, 92, 246, 0.2)",
                          color: "#e2e8f0",
                          fontSize: "0.88rem",
                        }}
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label
                        className="flex items-center gap-1.5 mb-2"
                        style={{ color: "#94a3b8", fontSize: "0.82rem" }}
                      >
                        <Mail size={13} />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                        style={{
                          background: "rgba(8, 13, 26, 0.8)",
                          border: "1px solid rgba(139, 92, 246, 0.2)",
                          color: "#e2e8f0",
                          fontSize: "0.88rem",
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      className="flex items-center gap-1.5 mb-2"
                      style={{ color: "#94a3b8", fontSize: "0.82rem" }}
                    >
                      <MessageSquare size={13} />
                      Asunto
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="¿En qué puedo ayudarte?"
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                      style={{
                        background: "rgba(8, 13, 26, 0.8)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                        color: "#e2e8f0",
                        fontSize: "0.88rem",
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="flex items-center gap-1.5 mb-2"
                      style={{ color: "#94a3b8", fontSize: "0.82rem" }}
                    >
                      <MessageSquare size={13} />
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(8, 13, 26, 0.8)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                        color: "#e2e8f0",
                        fontSize: "0.88rem",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 disabled:opacity-70"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
