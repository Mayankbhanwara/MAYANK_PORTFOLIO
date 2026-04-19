const achievements = [
  {
    title: "RHCSA Certification",
    subtitle: "Red Hat",
    desc: "Red Hat Certified System Administrator",
    link: "https://drive.google.com/file/d/1wqL8RLwjSlVpx_Pg8n26oxwnHltriAiE/view?usp=sharing",
  },
  {
    title: " BUSSIBEES INTERNSHIP",
    subtitle: "Frontend Intern",
    desc: "Bussibees Ed-tech Pvt. Ltd",
    prize: "Certified",
    year: "RHCSA",
    link: "https://drive.google.com/file/d/1584903V-KzfFOiw0DkYWErDwsWOIyUqb/view?usp=sharing",
  },
  {
    title: "NPTEL Certification ",
    subtitle: "IIT KHARAGPUR",
    desc: "PROBLEM SOLVING THROUGH PROGRAMMING IN C",
    prize: "Certified",
    year: "NPTEL",
    link: "https://drive.google.com/file/d/14rmWbp5nLKD6DvMW15LSCjJGZgOEZ76q/view?usp=sharing"
  },
  {
    title: "NPTEL Certification ",
    subtitle: "IIT KHARAGPUR",
    desc: "DATA STRUCTURES AND ALGORITHMS USING JAVA",
    prize: "Certified",
    year: "NPTEL",
    link: "https://drive.google.com/file/d/14fvPuViPOmRjShZgSMGqdLeB7VBEL_Ip/view?usp=sharing"
  },
  {
    title: "NPTEL Certification ",
    subtitle: "IIT KANPUR",
    desc: "DATA STRUCTURES AND ALGORITHMS DESIGN",
    prize: "Certified",
    year: "NPTEL",
    link: "https://drive.google.com/file/d/1j7ppPrRrXOR2u95qDqAIybyqpJnfkH6z/view?usp=sharing"
  },
  {
    title: "NPTEL Certification ",
    subtitle: "IIT KHARAGPUR",
    desc: "DATA BASE MANAGEMENT SYSTEM",
    prize: "Certified",
    year: "NPTEL",
    link: "https://drive.google.com/file/d/1uMGs0Q1Aie_tAelgThiRggzSkkIbRr2N/view?usp=sharing"
  },
  {
    title: "NPTEL Certification ",
    subtitle: "IIT KHARAGPUR",
    desc: "PROGRAMMING IN JAVA",
    prize: "Certified",
    year: "NPTEL",
    link: "https://drive.google.com/file/d/1_joco2aTDW7Sg1eFE-k71B6X4DnvOSUD/view?usp=sharing"
  },
  {
    title: "NPTEL Certification ",
    subtitle: "IIT KHARAGPUR",
    desc: "ETHICS IN ENGINEERING PRACTICE",
    prize: "Certified",
    year: "NPTEL",
    link: "https://drive.google.com/file/d/14pY9am3FOXjEE16PMWpdEN4ACgAGWTRo/view?usp=sharing"
  }
];

export default function Achievement() {
  return (
    <div className="animate-slide-in space-y-10">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white relative transition-colors duration-500">
          Certifications
          <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-indigo-500 rounded-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 ">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="relative p-5 sm:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-[1.5rem] sm:rounded-3xl overflow-hidden cursor-pointer group hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors duration-500"
          >
            {/* Elegant Static Watermark */}
            <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 text-[30px] sm:text-[55px] font-black text-gray-200/50 dark:text-gray-700/50 blur-[1px] select-none pointer-events-none font-cinzel tracking-tighter leading-none whitespace-nowrap opacity-60 overflow-hidden max-w-[90%] text-right transition-colors duration-500">
              {a.prize}
            </div>

            {/* Visual Anchor Node */}
            <div className="absolute top-0 right-8 sm:right-10 w-10 sm:w-12 h-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-b-md transition-colors duration-500"></div>

            {/* Content Container (Layered above watermark) */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-auto">
                {a.iframeUrl && (
                  <a href={a.link} target="_blank" rel="noopener noreferrer" className="block w-full h-32 sm:h-40 bg-gray-100 dark:bg-gray-900/50 rounded-xl overflow-hidden mb-4 border border-gray-200/50 dark:border-gray-700/50 relative group/preview cursor-pointer" title="View Full Certificate">
                    <iframe
                      src={a.iframeUrl}
                      title={a.title}
                      className="w-full h-full border-0 pointer-events-none transition-transform duration-500 group-hover/preview:scale-[1.03]"
                      scrolling="no"
                      tabIndex="-1"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/preview:bg-black/5 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover/preview:opacity-100">
                      <span className="bg-white/90 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">Open Full Document</span>
                    </div>
                  </a>
                )}
                {a.subtitle && (
                  <div className="inline-flex items-center mb-3 sm:mb-4 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-gray-50/80 dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 text-[9px] sm:text-[11px] font-bold uppercase tracking-widest rounded-xl transition-colors duration-500">
                    {a.subtitle}
                  </div>
                )}

                <h3 className="text-[17px] sm:text-[22px] font-bold text-gray-900 dark:text-white font-cinzel tracking-tight leading-snug mb-2 sm:mb-3 drop-shadow-sm transition-colors duration-500">
                  {a.link ? (
                    <a href={a.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="View Certificate">
                      {a.title}
                    </a>
                  ) : (
                    a.title
                  )}
                </h3>
              </div>

              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100/50 dark:border-gray-700/50 transition-colors duration-500">
                <p className="text-[12px] sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-[90%] transition-colors duration-500">
                  {a.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
