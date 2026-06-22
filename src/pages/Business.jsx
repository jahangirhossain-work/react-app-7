import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage.jsx';
import { SubHero, SubOverview } from '../components/SubsidiaryParts.jsx';
import AccentText from '../components/AccentText.jsx';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx';
import {
  ArrowLeft, ArrowRight, ArrowUpRight,
  BuildingIcon, ChartIcon, UsersIcon, SettingsIcon, TargetIcon,
  CoinsIcon, TrendingUpIcon, ShieldIcon, WrenchIcon,
} from '../components/Icons.jsx';

export default function Business() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState('oya');

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

  // Experience items — matches design comp
  const expItems = [
    { id: 'oya', name: t('business.exp.oya'), sub: t('business.exp.oya_sub'), growth: '400%', sectorRank: 'Top 10' },
    { id: 'othaim', name: 'Othaim Holding Group', sub: '' },
    { id: 'sdr', name: 'SDR Group', sub: '' },
    { id: 'smartmed', name: 'Smart Med', sub: '' },
    { id: 'smartlab', name: 'Smart Lab', sub: '' },
    { id: 'habib', name: 'AL Habib Group', sub: '' },
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

          {/* ---> ADD THIS NEW BLOCK HERE <--- */}
          <div>
            <p className="eyebrow">{t('sub.our_services')}</p>
          </div>
          {/* ---> END OF NEW BLOCK <--- */}
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
              {/* Row 2: 04, 05, 06 (06 with image overlay → use 06 + image card together) */}
              {services.slice(3, 5).map(({ Icon, t: tk, d }, i) => (
                <StaggerItem key={`r2-${i}`} className="service-card">
                  <div className="service-card__icon"><Icon /></div>
                  <p className="service-card__num">{String(i + 4).padStart(2, '0')}.</p>
                  <h4 className="service-card__title">{t(tk)}</h4>
                  <p className="service-card__desc">{t(d)}</p>
                </StaggerItem>
              ))}
              {/* Image card 1: glasses man (replaces position 6 in grid) */}
              <StaggerItem
                className="service-image-card"
                style={{ backgroundImage: "url('/images/business-responsive.png')" }}
              />
              {/* Row 3: IMG (keffiyeh man), 07, 08 — image as col 1, service 6 omitted from numbers in design (06 was Budget Planning before; design's 06 is moved) */}
              <StaggerItem
                className="service-image-card"
                style={{ backgroundImage: "url('/images/business-5.png')" }}
              />
              {/* Services 06 (Budget Planning), 07 (Business Dev), 08 (Project Consultancy) */}
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
              {/* Row 4: 08, 09 */}
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
                const isFeatured = item.id === 'oya';
                return (
                  <div key={item.id} className="exp-item">
                    <button
                      className={`exp-item__head ${!isFeatured ? 'exp-item__head--simple' : ''}`}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                    >
                      <div className="exp-item__title">
                        <span className="exp-item__num">{String(i + 1).padStart(2, '0')}.</span>
                        {item.name}
                        {item.sub && <span className="exp-item__sub">{item.sub}</span>}
                      </div>
                      {isFeatured && (
                        <>
                          <div className="exp-item__growth">
                            <strong>{item.growth}</strong>
                            <small>{t('business.exp.growth')}</small>
                          </div>
                          <div className="exp-item__sector">
                            <strong>{item.sectorRank}</strong>
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
                            Led complete operational and administrative restructuring with measurable growth outcomes across the F&B sector.
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
