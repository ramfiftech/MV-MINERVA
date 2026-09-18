import {
  Mail,
  Phone,
  Ship,
  BriefcaseBusiness,
  Handshake,
  Building2,
  MessageCircle,
  Send,
} from "lucide-react";

const interestOptions = [
  {
    value: "investment",
    label: "Investment Opportunities",
    icon: BriefcaseBusiness,
  },
  {
    value: "partnership",
    label: "Tourism Partnership",
    icon: Handshake,
  },
  {
    value: "hospitality",
    label: "Hospitality & Tourism",
    icon: Building2,
  },
  {
    value: "cruise",
    label: "Cruise Enquiry",
    icon: Ship,
  },
  {
    value: "business",
    label: "Business Enquiry",
    icon: BriefcaseBusiness,
  },
  {
    value: "general",
    label: "General Enquiry",
    icon: MessageCircle,
  },
];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#f4f0e8] py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#f4f0e8]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#b99a63]/5 via-transparent to-transparent" />

      {/* Decorative Icon */}
      <div className="pointer-events-none absolute right-10 top-20  text-[#b99a63]/10 ">
        <Ship size={180} strokeWidth={0.6} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center justify-center gap-4 opacity-0 animate-fade-up [animation-delay:0.1s]">
            <span className="h-px w-10 bg-[#b99a63]/60" />

            <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#b99a63]">
              Get In Touch
            </p>

            <span className="h-px w-10 bg-[#b99a63]/60" />
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-light tracking-tight text-[#071923] opacity-0 animate-fade-up [animation-delay:0.25s] md:text-5xl lg:text-6xl">
            Be Part of the Journey
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-base font-light leading-8 text-[#071923]/70 opacity-0 animate-fade-up [animation-delay:0.4s] md:text-lg">
            Whether you are interested in our cruise vision, tourism
            partnerships, investment opportunities, or future experiences
            aboard Arabian Queen, we would be pleased to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left - Contact Information */}
          <div className="opacity-0 animate-fade-up [animation-delay:0.45s]">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b99a63]">
              Arabian White Rock
            </p>

            <h3 className="font-serif text-3xl leading-tight text-[#071923] md:text-4xl">
              Let&apos;s start a
              <br />
              conversation.
            </h3>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#071923]/65 md:text-base">
              Arabian White Rock Public Investment is developing Arabian
              Queen as part of its broader vision for international tourism,
              hospitality, and maritime investment.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-7">
              {/* Email */}
              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#071923]/15 text-[#b99a63] transition-all duration-300 group-hover:border-[#b99a63] group-hover:bg-[#b99a63] group-hover:text-white">
                  <Mail size={17} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b99a63]">
                    Email
                  </p>

                  <a
                    href="mailto:info@arabianwhiterock.com"
                    className="text-sm text-[#071923] transition-colors hover:text-[#b99a63]"
                  >
                    info@arabianwhiterock.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#071923]/15 text-[#b99a63] transition-all duration-300 group-hover:border-[#b99a63] group-hover:bg-[#b99a63] group-hover:text-white">
                  <Phone size={17} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b99a63]">
                    Phone
                  </p>

                  <p className="text-sm text-[#071923]/70">
                    Contact our investment office
                  </p>
                </div>
              </div>

              {/* Enquiries */}
              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#071923]/15 text-[#b99a63] transition-all duration-300 group-hover:border-[#b99a63] group-hover:bg-[#b99a63] group-hover:text-white">
                  <MessageCircle size={17} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b99a63]">
                    Enquiries
                  </p>

                  <p className="text-sm leading-6 text-[#071923]/70">
                    Investment · Partnerships
                    <br />
                    Tourism · General Enquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-10 h-px w-20 bg-[#b99a63]/40" />

            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#071923]/40">
              <Ship size={14} strokeWidth={1.3} />
              Formerly MV Minerva
            </p>
          </div>

          {/* Right - Contact Form */}
          <div className="border border-[#071923]/10 bg-white/40 p-6 backdrop-blur-sm opacity-0 animate-fade-up [animation-delay:0.6s] md:p-10">
            <form className="space-y-7">
              {/* Name + Email */}
              <div className="grid gap-7 md:grid-cols-2">
                {/* Name */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#b99a63]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full border-0 border-b border-[#071923]/20 bg-transparent px-0 py-3 text-sm text-[#071923] outline-none transition-colors placeholder:text-[#071923]/30 focus:border-[#b99a63]"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#b99a63]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full border-0 border-b border-[#071923]/20 bg-transparent px-0 py-3 text-sm text-[#071923] outline-none transition-colors placeholder:text-[#071923]/30 focus:border-[#b99a63]"
                  />
                </div>
              </div>

              {/* Phone + Interest */}
              <div className="grid gap-7 md:grid-cols-2">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#b99a63]"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+971 ..."
                    className="w-full border-0 border-b border-[#071923]/20 bg-transparent px-0 py-3 text-sm text-[#071923] outline-none transition-colors placeholder:text-[#071923]/30 focus:border-[#b99a63]"
                  />
                </div>

                {/* Interest */}
                <div>
                  <label
                    htmlFor="interest"
                    className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#b99a63]"
                  >
                    Area of Interest
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    required
                    className="w-full border-0 border-b border-[#071923]/20 bg-transparent px-0 py-3 text-sm text-[#071923] outline-none transition-colors focus:border-[#b99a63]"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    {interestOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#b99a63]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full resize-none border border-[#071923]/15 bg-transparent p-4 text-sm leading-7 text-[#071923] outline-none transition-colors placeholder:text-[#071923]/30 focus:border-[#b99a63]"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden border border-[#b99a63]/50 bg-[#b99a63]/10 px-10 py-4 text-sm font-medium uppercase tracking-[0.25em] text-[#b99a63] transition-all duration-500 hover:border-[#b99a63] hover:bg-[#b99a63] hover:text-white"
                >
                  <span className="relative z-10">
                    Send Enquiry
                  </span>

                  <Send
                    size={16}
                    strokeWidth={1.5}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </div>

              <p className="text-center text-[10px] leading-5 text-[#071923]/40">
                By submitting this form, you agree to be contacted regarding
                your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}