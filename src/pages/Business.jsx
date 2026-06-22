import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage.jsx';
import { SubHero, SubOverview } from '../components/SubsidiaryParts.jsx';
import AccentText from '../components/AccentText.jsx';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx';
import {
  BuildingIcon, ChartIcon, UsersIcon, SettingsIcon, TargetIcon,
  CoinsIcon, TrendingUpIcon, ShieldIcon, WrenchIcon,
} from '../components/Icons.jsx';

export default function Business() {
  // 1. Get everything available out of your custom language hook
  const hookData = useLanguage();
  const { t } = hookData;
  const [openId, setOpenId] = useState('oya');

  // 2. Fallback checking: Identify what your hook actually calls the active language string
  const activeLang = hookData.locale || hookData.language || hookData.currentLang || 'en';

  const services = [
    { Icon: BuildingIcon, t: 'business.svc.01_t', d: 'business.svc.01_d' },
    { Icon: ChartIcon, t: 'business.svc.02_t', d: 'business.svc.02_d' },
    { Icon: UsersIcon, t: 'business.svc.03_t', d: 'business.svc.03_d' },
    { Icon: SettingsIcon, t: 'business.svc.04_t', d: 'business.svc.04_d' },
    { Icon: TargetIcon, t: 'business.svc.05_t', d: 'business.svc.05_d' },
    { Icon: CoinsIcon, t: 'business.svc.06_t', d: 'business.svc.06_d' },
    { Icon: TrendingUpIcon, t: 'business.svc.07_t', d: 'business.svc.07_d' },
    { Icon: ShieldIcon, t: 'business.svc.08_t', d: 'business.svc.08_d' },
    { Icon: WrenchIcon, t: 'business.svc.09_t', d: 'business.svc.09_d' },
  ];

  const expItems = [
    { 
      id: 'oya', 
      name: { en: 'Oya Restaurant', ar: 'مطعم أويا' },
      sub: { 
        en: 'Operations Management, Human Resources, Administrative Affairs, and General Management', 
        ar: 'إدارة العمليات، الموارد البشرية، الشؤون الإدارية، والإدارة العامة' 
      },
      growth: '400%', 
      sectorRank: { en: 'Top 10', ar: 'أفضل 10' },
      desc: {
        en: 'Led complete operational and administrative restructuring with measurable growth outcomes across the F&B sector.',
        ar: 'قيادة إعادة الهيكلة التشغيلية والإدارية الكاملة مع تحقيق نتائج نمو ملموسة عبر قطاع الأغذية والمشروبات.'
      }
    },
    { 
      id: 'othaim', 
      name: { en: 'Othaim Holding Group', ar: 'مجموعة العثيم القابضة' }, 
      sub: null,
      desc: {
        en: 'Strategic management and operational consultation details for Othaim Holding.',
        ar: 'تفاصيل الإدارة الاستراتيجية والاستشارات التشغيلية لمجموعة العثيم.'
      }
    },
    { 
      id: 'sdr', 
      name: { en: 'SDR Group', ar: 'مجموعة إس دي آر' }, 
      sub: null,
      desc: {
        en: 'Operational overview and business development strategies for SDR Group.',
        ar: 'نظرة عامة على العمليات واستراتيجيات تطوير الأعمال لمجموعة إس دي آر.'
      }
    },
    { 
      id: 'smartmed', 
      name: { en: 'Smart Med', ar: 'سمارت ميد' }, 
      sub: null,
      desc: {
        en: 'Led complete operational and administrative restructuring with measurable growth outcomes across the F&B sector.',
        ar: 'قيادة إعادة الهيكلة التشغيلية والإدارية الكاملة مع تحقيق نتائج نمو ملموسة عبر قطاع الأغذية والمشروبات.'
      }
    },
    { 
      id: 'smartlab', 
      name: { en: 'Smart Lab', ar: 'سمارت لاب' }, 
      sub: null,
      desc: {
        en: 'Restructuring and laboratory management operations content.',
        ar: 'عمليات إعادة الهيكلة وإدارة المختبرات.'
      }
    },
    { 
      id: 'habib', 
      name: { en: 'AL Habib Group', ar: 'مجموعة الحبيب' }, 
      sub: null,
      desc: {
        en: 'Corporate transformation and corporate efficiency management frameworks.',
        ar: 'أطر التحول المؤسسي وإدارة كفاءة الشركات.'
      }
    },
  ];

  return (
    <div>
      <SubHero
        eyebrowKey="business.eyebrow"
        descKey="business.desc"
        logoSrc="/logos/utility-business.svg"
        logoAlt="Utility Business"
        images={['/images/business-1.png', '/images/business-2.png', '/images/business-3.png']}
      />

      <SubOverview
        titleKey="business.overview_title"
        textKey="business.overview_text"
        bannerImg="/images/business-4.png"
      />

      {/* SERVICES */}
      <section className="services-section container">
        <div className="services-layout">
          <div>
            <p className="eyebrow">{t('sub.our_services')}</p>
          </div>
          <div>
            <StaggerGroup className="services-grid">
              {/* Row 1: 01, 02, 03 */}
              {services.slice(0, 3).map(({ Icon, t: tk, d }, i) => (
                <StaggerItem key={i} className="service-card">
                  <div className="service-card__icon"><Icon /></div>
                  <p className="service-card__num">{String(i + 1).padStart(2, '0')}.</p>
                  <h4 className="service-card__title">{t(tk)}</h4>
                  <p className="service-card__desc">{t(d)}</p>
                </StaggerItem>
              ))}
              {/* Row 2: 04, 05, 06 */}
              {services.slice(3, 5).map(({ Icon, t: tk, d }, i) => (
                <StaggerItem key={`r2-${i}`} className="service-card">
                  <div className="service-card__icon"><Icon /></div>
                  <p className="service-card__num">{String(i + 4).padStart(2, '0')}.</p>
                  <h4 className="service-card__title">{t(tk)}</h4>
                  <p className="service-card__desc">{t(d)}</p>
                </StaggerItem>
              ))}
              {/* Image card 1 */}
              <StaggerItem
                className="service-image-card"
                style={{ backgroundImage: "url('/images/business-responsive.png')" }}
              />
              {/* Row 3 */}
              <StaggerItem
                className="service-image-card"
                style={{ backgroundImage: "url('/images/business-5.png')" }}
              />
              <StaggerItem className="service-card">
                <div className="service-card__icon">{(() => { const Icon = services[5].Icon; return <Icon />; })()}</div>
                <p className="service-card__num">06.</p>
                <h4 className="service-card__title">{t(services[5].t)}</h4>
                <p className="service-card__desc">{t(services[5].d)}</p>
              </StaggerItem>
              <StaggerItem className="service-card">
                <div className="service-card__icon">{(() => { const Icon = services[6].Icon; return <Icon />; })()}</div>
                <p className="service-card__num">07.</p>
                <h4 className="service-card__title">{t(services[6].t)}</h4>
                <p className="service-card__desc">{t(services[6].d)}</p>
              </StaggerItem>
              {/* Row 4 */}
              <StaggerItem className="service-card">
                <div className="service-card__icon">{(() => { const Icon = services[7].Icon; return <Icon />; })()}</div>
                <p className="service-card__num">08.</p>
                <h4 className="service-card__title">{t(services[7].t)}</h4>
                <p className="service-card__desc">{t(services[7].d)}</p>
              </StaggerItem>
              <StaggerItem className="service-card">
                <div className="service-card__icon">{(() => { const Icon = services[8].Icon; return <Icon />; })()}</div>
                <p className="service-card__num">09.</p>
                <h4 className="service-card__title">{t(services[8].t)}</h4>
                <p className="service-card__desc">{t(services[8].d)}</p>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <Reveal>
        <section className="experience on-dark">
          <div className="experience__grid">
            <div className="experience__left">
              <p className="eyebrow">{t('business.exp.eyebrow')}</p>
              <AccentText as="h2" className="experience__title" text={t('business.exp.title')} />
              <p className="experience__desc">{t('business.exp.desc')}</p>
              <div className="exp-logo">
                <img src="/logos/utility-business-white.svg" alt="Utility Business" />
              </div>
            </div>

            <div className="experience__list">
              {expItems.map((item, i) => {
                const isOpen = openId === item.id;
                const hasMetrics = !!item.growth;

                // Absolute safety layout fallback resolution:
                const determinedLang = (item.name[activeLang]) ? activeLang : 'en';

                return (
                  <div key={item.id} className="exp-item">
                    <button
                      className={`exp-item__head ${!hasMetrics ? 'exp-item__head--simple' : ''}`}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                    >
                      <div className="exp-item__title">
                        <span className="exp-item__num">{String(i + 1).padStart(2, '0')}.</span>
                        
                        {/* Safe Key Resolution */}
                        {item.name[determinedLang]}
                        
                        {item.sub && item.sub[determinedLang] && (
                          <span className="exp-item__sub">{item.sub[determinedLang]}</span>
                        )}
                      </div>
                      
                      {hasMetrics && (
                        <>
                          <div className="exp-item__growth">
                            <strong>{item.growth}</strong>
                            <small>{t('business.exp.growth')}</small>
                          </div>
                          <div className="exp-item__sector">
                            <strong>{item.sectorRank[determinedLang] || item.sectorRank.en}</strong>
                            <small>{t('business.exp.top_sector')}</small>
                          </div>
                        </>
                      )}
                      <span className="exp-item__toggle">{isOpen ? '−' : '+'}</span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="exp-item__detail"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="exp-item__detail-inner">
                            {item.desc[determinedLang]}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}