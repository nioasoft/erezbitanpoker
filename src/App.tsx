import React from 'react';
import { 
  Trophy, 
  Globe, 
  Brain, 
  MessageSquare, 
  ChevronRight, 
  Plane, 
  Award, 
  Zap,
  Star,
  ShieldCheck,
  Instagram,
  Twitter,
  Linkedin,
  ChevronLeft
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10" dir="rtl">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-bold tracking-tighter text-white">
        ארז<span className="text-emerald-500">ביתן</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-white/70 uppercase tracking-widest">
        <a href="#about" className="hover:text-emerald-400 transition-colors">אודות</a>
        <a href="#consulting" className="hover:text-emerald-400 transition-colors">ייעוץ</a>
        <a href="#global" className="hover:text-emerald-400 transition-colors">בינלאומי</a>
        <a href="#edge" className="hover:text-emerald-400 transition-colors">היתרון</a>
        <a href="#contact" className="hover:text-emerald-400 transition-colors">צור קשר</a>
      </div>
      <a href="#contact" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-emerald-900/20">
        תיאום פגישה
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black" dir="rtl">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=2073&auto=format&fit=crop" 
        alt="רקע פוקר" 
        className="w-full h-full object-cover opacity-40"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-emerald-500 font-mono tracking-[0.3em] uppercase text-sm mb-4 block">
          מנטור ויועץ פוקר ברמה עולמית
        </span>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          לשלוט ב-<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-glow">סכומים הגבוהים</span>
        </h1>
        <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          ארז ביתן: 43 שנים של מצוינות אסטרטגית. מטורנירים עולמיים ועד ייעוץ גלובלי, 
          מגשר על הפער בין אינטואיציה לוודאות מתמטית.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#consulting" className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
            גלה את שירותי הייעוץ <ChevronLeft size={20} />
          </a>
          <a href="#about" className="border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center">
            הסיפור של האגדה
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-20 bg-zinc-950 border-y border-white/5" dir="rtl">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
      {[
        { label: "שנות ניסיון", value: "+20" },
        { label: "טורנירים עולמיים", value: "+150" },
        { label: "מדינות שביקר בהן", value: "+40" },
        { label: "שעות ייעוץ", value: "+5000" },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
          <div className="text-xs text-white/40 uppercase tracking-widest font-mono">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const Consulting = () => (
  <section id="consulting" className="py-32 bg-black relative" dir="rtl">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl text-right">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">ייעוץ אסטרטגי</h2>
          <p className="text-white/50 text-lg">
            ארז לא רק משחק את המשחק; הוא מגדיר אותו מחדש. שירותי הייעוץ שלו מיועדים לאלו 
            השואפים לשלוט בסבב המקצועני באמצעות תורת המשחקים מתקדמת וחוסן מנטלי.
          </p>
        </div>
        <div className="text-emerald-500 font-mono text-sm uppercase tracking-widest border-b border-emerald-500/30 pb-2">
          שדרג את המשחק שלך
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Brain className="text-emerald-400" size={32} />,
            title: "תורת המשחקים (GTO)",
            desc: "צלילה עמוקה לאסטרטגיות GTO המותאמות לסביבות של סכומים גבוהים. דיוק מתמטי פוגש יישום בעולם האמיתי."
          },
          {
            icon: <Zap className="text-emerald-400" size={32} />,
            title: "ביצועים מנטליים",
            desc: "שלוט בלוחמה הפסיכולוגית של הפוקר. בנה חוסן מנטלי בלתי שביר שמשגשג תחת לחץ קיצוני."
          },
          {
            icon: <Trophy className="text-emerald-400" size={32} />,
            title: "אסטרטגיית טורנירים",
            desc: "מינוף ההיסטוריה העשירה של ארז בטורנירים עולמיים כדי לנווט בשדות מורכבים ולמקסם את ה-ROI."
          }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all group text-right">
            <div className="mb-6 p-4 bg-emerald-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform mr-0 ml-auto">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-white/40 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GlobalPresence = () => (
  <section id="global" className="py-32 bg-zinc-950 overflow-hidden" dir="rtl">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
      <div className="text-right">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
          <Plane size={14} /> פעילות גלובלית
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          חיים בתנועה, <br />מוח בפעולה.
        </h2>
        <p className="text-white/50 text-lg mb-8 leading-relaxed">
          בגיל 43, ארז ביתן שומר על לוח זמנים אינטנסיבי. הוא טס לחו"ל לפחות פעם בחודש, 
          שם הוא מעניק ייעוץ אישי לשחקני עלית ומתחרה במוקדי הפוקר היוקרתיים ביותר בעולם.
        </p>
        <div className="space-y-4">
          {[
            "סיורי ייעוץ בינלאומיים חודשיים",
            "מנטורינג בלעדי באתר הלקוח",
            "ייצוג בטורנירים גלובליים",
            "ניתוח אסטרטגי חוצה יבשות"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3 text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {text}
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop" 
            alt="ייעוץ פוקר גלובלי" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 p-8 bg-emerald-600 rounded-2xl shadow-2xl hidden lg:block text-right">
          <Globe className="text-white mb-4 mr-0 ml-auto" size={40} />
          <div className="text-2xl font-bold text-white">+40 ערים</div>
          <div className="text-white/70 text-sm">ייעוץ ברחבי העולם</div>
        </div>
      </div>
    </div>
  </section>
);

const SecretEdge = () => (
  <section id="edge" className="py-32 bg-black" dir="rtl">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-gradient-to-br from-zinc-900 to-black p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] -ml-48 -mt-48" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">יתרון החמצן</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              בעולם הפוקר המקצועני, סיבולת קוגניטיבית היא הכל. הנשק הסודי של ארז הוא לא רק אסטרטגיה – הוא אופטימיזציה ביולוגית. 
            </p>
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-2xl mb-8">
              <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2 justify-end">
                פרוטוקול ביצועי CPAP <ShieldCheck size={20} />
              </h4>
              <p className="text-white/70 italic">
                "באמצעות שימוש במערכת CPAP למקסום חמצון המוח בזמן השינה, אני מבטיח שהעיבוד הקוגניטיבי שלי יישאר ברמות שיא לאורך סשנים של מעל 12 שעות. בזמן שאחרים מתעייפים, אני מאיץ."
              </p>
            </div>
            <p className="text-white/40 text-sm">
              *ארז משלב מדע שינה ברמה רפואית כדי לשמור על רמות הבהירות המנטלית הגבוהות ביותר בעולם הפוקר.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-2xl bg-zinc-800/50 flex items-center justify-center border border-white/5">
                <Brain className="text-emerald-500/20" size={80} />
              </div>
              <div className="p-6 rounded-2xl bg-emerald-600 text-white font-bold text-center">
                100% התאוששות קוגניטיבית
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="p-6 rounded-2xl bg-zinc-800/50 border border-white/5 text-white/70 text-center">
                <div className="text-emerald-400 font-bold text-2xl mb-1">24/7</div>
                <div className="text-xs uppercase tracking-widest opacity-50">מוכנות מנטלית</div>
              </div>
              <div className="h-64 rounded-2xl overflow-hidden border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                  alt="טכנולוגיה" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-zinc-950 pt-32 pb-12 border-t border-white/5" dir="rtl">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 mb-32">
        <div className="text-right">
          <h2 className="text-5xl font-bold text-white mb-8">מוכן לשחק <br />ברמה הבאה?</h2>
          <p className="text-white/40 text-lg mb-12 max-w-md">
            מספר מוגבל של מקומות לייעוץ זמין לשחקנים מקצועיים וארגוני סכומים גבוהים.
          </p>
          <div className="flex gap-6 justify-end">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emerald-500 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emerald-500 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emerald-500 transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <form className="space-y-6 text-right" onSubmit={(e) => { e.preventDefault(); alert('הפנייה נשלחה בהצלחה!'); }}>
          <div className="grid grid-cols-2 gap-6">
            <input type="text" placeholder="שם" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-emerald-500 outline-none transition-all text-right" />
            <input type="email" placeholder="אימייל" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-emerald-500 outline-none transition-all text-right" />
          </div>
          <textarea placeholder="הודעה" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-emerald-500 outline-none transition-all text-right" />
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-xl font-bold text-lg transition-all">
            שלח פנייה
          </button>
        </form>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-white/30 text-sm">
        <div>© 2026 ארז ביתן. כל הזכויות שמורות.</div>
        <div className="flex gap-8 uppercase tracking-widest text-[10px] font-bold">
          <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
          <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-emerald-500 selection:text-white" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <section id="about" className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900">
                {/* Note: In a real scenario, replace this with the uploaded image of Erez Bitan */}
                <img 
                  src="/erezbitan.jpg" 
                  alt="ארז ביתן" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
            </div>
            <div className="text-right">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">האורים והתומים של עולם הפוקר</h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                ארז ביתן הוא לא רק שחקן; הוא מנטור וחזון. בגיל 43, הוא עומד כעמוד תווך בקהילת הפוקר העולמית, ידוע בעומק האנליטי שלו ובחזון האסטרטגי שלו.
              </p>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                המסע שלו בטורנירים היוקרתיים ביותר בעולם עיצב פרספקטיבה ייחודית אותה הוא חולק כעת באמצעות ייעוץ בלעדי. בין אם בלאס וגאס, מקאו או לונדון, ארז הוא היועץ אליו פונים שחקני עלית כשהסכומים הם הגבוהים ביותר.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-right">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2 justify-end">
                    סמכות <Star size={18} />
                  </div>
                  <p className="text-white/40 text-sm">מוכר גלובלית כמנטור מוביל בפוקר אסטרטגי.</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2 justify-end">
                    מורשת <Award size={18} />
                  </div>
                  <p className="text-white/40 text-sm">עשורים של תחרות ברמה הגבוהה ביותר בכל סבבי הפוקר המרכזיים.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Consulting />
        <GlobalPresence />
        <SecretEdge />
      </main>
      <Footer />
    </div>
  );
}
